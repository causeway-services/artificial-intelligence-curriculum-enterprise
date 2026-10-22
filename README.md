# AI education books and live courses

<!-- 561-group-standards:badges:start -->
[![Causeway Services](https://img.shields.io/badge/561%20Group-Causeway%20Services-115e69)](https://github.com/causeway-services)
[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-115e69)](LICENSE)
[![Indigenous data: CARE](https://img.shields.io/badge/Indigenous%20data-CARE-4b6f44)](https://github.com/causeway-services/.github/blob/main/GOVERNANCE.md)
[![Tips welcome](https://img.shields.io/badge/tips-welcome-d4a017)](https://github.com/561-group/.github/blob/main/TIPS.md)
<!-- 561-group-standards:badges:end -->

This directory holds *The Agent Operator's Handbook* and the multi-agent operating discipline course: authored chapters, lesson briefs, edition parameters, and launch research. MachineLearningHistoryFrontier's publication settings and history are in [its channel directory](channels/machine-learning-history-frontier); its reusable course material is in [the curriculum](content/curricula/history-and-frontiers-of-machine-learning/curriculum.json).

Build the handbook from this directory with the shared ebook implementation:

```sh
node ../../../../../../../../../../../engineering-services-section/services/computer-engineering-services-section/services/computer-data-engineering-services-section/services/computer-content-engineering-services-section/services/computer-documents-engineering-services-section/services/ebook-engineering-services-section/apps/ebook-production-cli.mjs --manifest content/books/the-agent-operators-handbook/ebook.json
```

The manifest selects the manuscript and EPUB/PDF destination. The [edition work order](content/edition-work-orders/the-agent-operators-handbook.md) preserves the editorial and conformance obligations: successful rendering does not establish editorial approval or authorize a sale. [Ebook launch research](content/launches/ebook.json) and [cohort launch research](content/launches/cohort.json) preserve the pricing assumptions, comparables, funnel decisions, and outstanding launch work; they do not record a new launch.

The books and course remain independently consumed by the shop catalog.
