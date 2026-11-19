# AI feature scorecard

Measure what users **do** after the AI answers.

| Metric | Definition | How to measure | Target (set your own) |
|---|---|---|---|
| Action rate | % of AI answers that led to an action or decision | Log the next action after each answer | |
| Override rate | % of answers users edited, corrected or rejected | Track edits / rejections on AI output | |
| Task time | Time to complete the task with vs without AI | Measured timestamps, not surveys | |
| Real-case accuracy | % correct on a weekly sample of real cases | Review 20–50 real cases every week | |

## What not to report on its own
- Number of AI queries (usage is not value)
- Thumbs-up rate (most people never click it)
- "Time saved" from a survey (people guess)
- Accuracy on a demo set (demos are easy)

## Sheet template (copy into Google Sheets or Excel)

```
Week,Answers,Actions taken,Action rate,Edited or rejected,Override rate,Avg task time (with AI),Avg task time (without),Real cases checked,Correct,Accuracy
```
