# First Commission Worksheet

*A free, practical worksheet from Causeway Services for people administering AI agents.*

A useful agent assignment is a small, owned unit of work that someone other than the agent can receive. Before starting a second agent, run one bounded commission well.

## 1. Select a real job

Pick work with an observable result, such as updating one documented configuration, checking an inventory, fixing one bounded defect or producing a comparison that will change a decision.

Avoid assignments like “improve the business” or “make the system reliable.” Choose the next concrete operation instead.

**My commission**

- **Job and requesting owner:** …
- **Why this work is needed:** …
- **Authorized actor or office:** …
- **Exact source of truth / current version:** …
- **Target files, records or systems:** …
- **Allowed action:** read only / draft for review / bounded write with named authority
- **Explicit exclusions and private data boundaries:** …
- **Inputs available to the agent:** …
- **Output the receiver needs:** …
- **Completion check and who receives it:** …
- **Maximum time, compute or spend:** …
- **Interruption and escalation contact:** …

An agent should not infer permission to send messages, spend money, publish, delete, or change third-party systems merely because those actions seem useful.

## 2. Check for collisions before dispatch

Ask: Is anyone already working on the same source, file, mailbox, account or service?

If yes, agree on custody before parallel work. Record the working boundaries in a **path or resource manifest**:

| Resource or path | Current custodian | Permitted operation | Handoff or expiry |
| --- | --- | --- | --- |
| … | … | … | … |
| … | … | … | … |

If custody cannot be established, run the work sequentially or use a read-only investigation. Starting two writers and hoping to sort out their edits afterward is not coordination.

## 3. Replace a vague prompt with a commission

**Weak commission:** “Clean up the documentation and make sure everything works.”

**Bounded commission:**

> Read the current configuration guide and the three files it names. You have read-only permission. Identify any statement that contradicts the actual configuration, quote the file path and relevant lines, and propose exact replacement text. Do not edit or publish. Return a table of discrepancies and the checks used. The receiving operator will approve or reject each replacement.

This asks for something independently inspectable and does not silently delegate authority.

## 4. Receive the result, don't just read the recap

An agent saying “done” is a report, not the receiver's acceptance. Record the real outcome:

**Receiving record**

- **Commission and date:** …
- **Source or resource revision observed:** …
- **What was inspected:** …
- **What changed, with exact paths or resource IDs:** …
- **Checks actually run and verbatim results:** …
- **Known failures or partially completed steps:** …
- **Compute, elapsed time and fees observed (or ‘not measured’):** …
- **Receiver's independent inspection:** …
- **Accepted / returned for correction / declined:** …
- **Next authorized operation, if any:** …

When a check was not run, say “not run.” When no cost meter exists, say “not measured.” Do not upgrade a proposed fix into a tested or deployed fix.

## 5. Practice recovery on purpose

Stop after a safe, bounded step and pretend the agent's chat disappears. Using only the commission, custody manifest and receiving record, can a second authorized operator answer:

1. What work was requested and under whose authority?
2. What has actually changed, and where?
3. What other agent or person still holds custody of the same resources?
4. What inspection is needed before safely resuming?
5. What work must **not** be repeated?

If not, repair the record before starting again. A lengthy transcript is not a replacement for the state of work.

## 6. Measure something a customer cares about

For this one commission, compare against the ordinary human or sequential process, when there is a fair baseline:

- Work accepted by its receiver?
- Total elapsed time and compute/provider expense?
- Human review and rework required?
- Collisions or unintended changes?
- Whether another operator could safely resume?

One good commission is evidence of a usable practice, not a universal performance guarantee. A failed commission can be equally valuable if its failure leads to a better runbook.

## Continue

The 561 Group's existing **Multi-Agent Operating Discipline for Teams** curriculum expands these habits across five practical sessions: complete briefs, fan-out judgment, steering and recovery, receipts, and collision handling. See [the cohort overview](multi-agent-operating-discipline-for-teams.md) for its planned format and price.

This worksheet can be copied into your own work records. Remove or protect private material before sharing completed versions with anyone else.
