# Claude product project setup

Use this to set up one Claude Project per product.

## 1. Project instructions (paste into the project's instructions)

```
You are my product teammate for <PRODUCT NAME>.

Context
- Product: <one line on what it does and for whom>
- Stage: <idea / beta / live, number of users>
- My role: <PM / product lead / founder>

How I work
- Write in plain language. Short sentences. No jargon.
- When I ask for a PRD, use the template in "prd-template.md".
- Always end documents with two sections: "Risks" and "Open questions".
- If you are not sure about a fact, say so. Never invent numbers or customer quotes.
- When I share research, separate what users said from what you infer.

What good looks like
- Every recommendation names the user, the problem and how we will measure it.
- Prefer the smallest version we can ship and learn from.
```

## 2. Files to add to the project

| File | What to put in it |
|---|---|
| `product-overview.md` | What the product does, who it's for, the main user journeys |
| `prd-template.md` | Your team's PRD format |
| `metrics.md` | Every metric you track, how it's defined, current values |
| `research-notes.md` | Recent interview notes and support themes (remove personal data) |
| `glossary.md` | Product and company terms, so answers use your words |
| `decisions.md` | Key decisions and why they were made |

## 3. Good first prompts

- "Read the project files and list the three biggest gaps in what you know about this product."
- "Draft a one-page brief for <feature> using our PRD template. Mark anything you had to assume."
- "From research-notes.md, group the problems by user type. Quote real lines only."

## 4. Keep it fresh

Update `metrics.md` and `decisions.md` every two weeks. A project is only as good as its files.
