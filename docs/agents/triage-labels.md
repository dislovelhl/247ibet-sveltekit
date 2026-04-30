# Triage Label Vocabulary

These are the five canonical status values used in `.scratch/*/issue.md` front-matter.

| Role | Status value | Meaning |
|---|---|---|
| Needs evaluation | `needs-triage` | A maintainer needs to look at this |
| Waiting on reporter | `needs-info` | Blocked — awaiting more detail from the person who filed it |
| AFK-agent ready | `ready-for-agent` | Fully specified; an AI agent can pick it up with no extra human context |
| Human-only | `ready-for-human` | Needs a person to implement (judgment, design, auth, etc.) |
| Won't action | `wontfix` | Closed without action — include a short reason in the issue body |

## Triage flow

```
new issue → needs-triage
  ├─ missing info?         → needs-info
  ├─ clear + automatable?  → ready-for-agent
  ├─ clear + human work?   → ready-for-human
  └─ out of scope?         → wontfix
```
