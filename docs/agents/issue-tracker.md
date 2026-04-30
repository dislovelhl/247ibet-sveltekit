# Issue Tracker: Local Markdown

Issues for this repo live as markdown files under `.scratch/` in the repository root.

## Layout

```
.scratch/
  <feature-or-bug-slug>/
    issue.md       # the issue itself
    notes.md       # optional — research, spike notes
```

## File format

Each `issue.md` should have this front-matter:

```yaml
---
title: Short imperative title
status: needs-triage          # one of the triage label values
type: bug | feature | chore
created: YYYY-MM-DD
---
```

Body follows the front-matter in plain markdown.

## Skill commands

| Action | What to do |
|---|---|
| Create issue | Write a new `.scratch/<slug>/issue.md` |
| List issues | `find .scratch -name issue.md` |
| Filter by status | `grep -rl "status: needs-triage" .scratch/` |
| Close issue | Set `status: wontfix` (or delete the folder) |
