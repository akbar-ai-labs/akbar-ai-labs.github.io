# CLAUDE.md starter + ship checklist

## CLAUDE.md starter (put it in your project root)

```markdown
# <Project name>

## Goal
<What this product does and for whom, in two sentences.>

## Non-goals
- <What we are deliberately not building now>

## Tech stack
- <language, framework, database, hosting>

## House rules
- Ask for a plan before writing code for anything bigger than a small fix.
- Work in small slices: one feature per change. Keep changes reviewable.
- Run the tests and the linter before saying something is done.
- Never commit secrets. Read config from environment variables.
- Don't add new dependencies without saying why.
- Match the existing code style and folder structure.

## How to run
- Install: <command>
- Run locally: <command>
- Test: <command>

## Known traps
- <Anything that has bitten us before>
```

## Ship checklist
- [ ] I read every change and can explain it
- [ ] Tests pass and I tried it in the browser / app myself
- [ ] No secrets, keys or personal data in the code or logs
- [ ] Permissions: users can only see and change what they should
- [ ] Rollback plan: I know how to undo this release
- [ ] Monitoring: errors will reach me if it breaks
