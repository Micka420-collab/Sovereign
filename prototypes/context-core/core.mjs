/**
 * Prototype sans dépendance : contrat d'événements + filtrage d'autorisation
 * + handoff sourcé. Ne pas utiliser comme serveur ou base de production.
 */
const TYPES = new Set(["message","tool_result","file_change","git_commit","test_result","decision","task_state","checkpoint"]);
const MAX_BODY = 250_000;
export function validateEvent(event) {
  if (!event || typeof event !== "object" || Array.isArray(event)) throw new TypeError("event must be an object");
  for (const key of ["id","workspaceId","projectId","sessionId","agentId","kind","occurredAt","body"]) {
    if (typeof event[key] !== "string" || !event[key].trim()) throw new TypeError(`invalid ${key}`);
  }
  if (!TYPES.has(event.kind)) throw new TypeError("invalid event kind");
  if (!Number.isFinite(Date.parse(event.occurredAt))) throw new TypeError("invalid date");
  if (event.body.length > MAX_BODY) throw new RangeError("event too large");
  if (event.body.includes("\u0000")) throw new TypeError("NUL forbidden");
  return Object.freeze({...event});
}
export class EventMemory {
  #events = new Map();
  add(event) {
    const validated = validateEvent(event);
    if (this.#events.has(validated.id)) throw new Error("duplicate event ID");
    this.#events.set(validated.id, validated);
    return validated.id;
  }
  /**
   * Authorizations passed by trusted caller, never accepted from user prompt.
   * Prototype uses exact workspace and project constraints; production will use
   * a centralized policy engine and authenticated principal.
   */
  search({workspaceId,allowedProjectIds,query,limit=10}) {
    if (typeof workspaceId !== "string" || !Array.isArray(allowedProjectIds)) throw new TypeError("unauthorized query");
    if (typeof query !== "string") throw new TypeError("invalid query");
    const allowed = new Set(allowedProjectIds);
    const tokens = query.toLocaleLowerCase("fr").split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    return [...this.#events.values()]
      .filter(e => e.workspaceId === workspaceId && allowed.has(e.projectId))
      .map(e => ({event:e,score:tokens.reduce((s,t)=>s+(e.body.toLocaleLowerCase("fr").includes(t)?1:0),0)}))
      .filter(x=>x.score>0)
      .sort((a,b)=>b.score-a.score || b.event.occurredAt.localeCompare(a.event.occurredAt))
      .slice(0,Math.max(0,Math.min(100,Math.floor(limit))))
      .map(x=>({eventId:x.event.id,projectId:x.event.projectId,occurredAt:x.event.occurredAt,kind:x.event.kind,excerpt:x.event.body.slice(0,800),score:x.score}));
  }
  handoff({workspaceId,projectId,maxEvents=20}) {
    if (typeof workspaceId!=="string" || typeof projectId!=="string") throw new TypeError("invalid scope");
    return [...this.#events.values()]
      .filter(e=>e.workspaceId===workspaceId && e.projectId===projectId)
      .sort((a,b)=>b.occurredAt.localeCompare(a.occurredAt))
      .slice(0,Math.max(0,Math.min(100,Math.floor(maxEvents))))
      .map(e=>({sourceEventId:e.id,kind:e.kind,agentId:e.agentId,occurredAt:e.occurredAt,text:e.body}));
  }
}
