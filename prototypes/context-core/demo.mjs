import {EventMemory} from "./core.mjs";
const memory=new EventMemory();
memory.add({id:"evt-1",workspaceId:"local",projectId:"tireforge",sessionId:"codex-1",agentId:"codex",kind:"decision",occurredAt:"2026-10-09T12:00:00Z",body:"Décision : conserver SQLite pour le prototype. Source: test de simplicité."});
memory.add({id:"evt-2",workspaceId:"local",projectId:"tireforge",sessionId:"claude-1",agentId:"claude",kind:"task_state",occurredAt:"2026-10-09T12:15:00Z",body:"Tâche ouverte : tester la migration du schéma SQLite."});
console.log(JSON.stringify({search:memory.search({workspaceId:"local",allowedProjectIds:["tireforge"],query:"SQLite"}),handoff:memory.handoff({workspaceId:"local",projectId:"tireforge"})},null,2));
