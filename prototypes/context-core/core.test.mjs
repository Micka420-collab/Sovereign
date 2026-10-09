import test from "node:test";
import assert from "node:assert/strict";
import {EventMemory,validateEvent} from "./core.mjs";
const ev=(overrides={})=>({id:"1",workspaceId:"w",projectId:"a",sessionId:"s",agentId:"codex",kind:"decision",occurredAt:"2026-10-09T10:00:00Z",body:"Choix SQLite",...overrides});
test("validate rejects unknown kind and oversized payload",()=>{
  assert.throws(()=>validateEvent(ev({kind:"system_instructions"})));
  assert.throws(()=>validateEvent(ev({body:"x".repeat(250001)})));
});
test("event immutable and unique",()=>{
  const db=new EventMemory();db.add(ev());assert.throws(()=>db.add(ev()),/duplicate/);
});
test("search isolates workspace and project",()=>{
  const db=new EventMemory();
  db.add(ev());
  db.add(ev({id:"2",projectId:"secret",body:"Choix SQLite secret"}));
  db.add(ev({id:"3",workspaceId:"other",body:"Choix SQLite other"}));
  assert.deepEqual(db.search({workspaceId:"w",allowedProjectIds:["a"],query:"SQLite"}).map(x=>x.eventId),["1"]);
});
test("handoff includes source event IDs and chronological order",()=>{
  const db=new EventMemory();db.add(ev());db.add(ev({id:"2",agentId:"claude",kind:"task_state",occurredAt:"2026-10-09T11:00:00Z",body:"test à compléter"}));
  assert.deepEqual(db.handoff({workspaceId:"w",projectId:"a"}).map(x=>x.sourceEventId),["2","1"]);
});
