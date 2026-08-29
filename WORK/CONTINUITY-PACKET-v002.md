# SEATRACE:CONTINUITY-PACKET:v002

Shared open Packet Handler understanding for Commons-Good teammates.

**Orders:** TAMMY001-SO-v002 (core laws unchanged)
**Kind:** DESIGN-CANDIDATE
**Posture:** HOLD-PRESERVE-CANDIDATE
**Authorization:** HOLD-AUTHORIZATION
**Execution authority:** none
**001A:** nominated only — not run, not authorized

v002 is the superseding candidate. This pass does not change its core laws.
It makes the DevOps continuity plane explicit so the software that implements
SeaTrace is governed by the same continuity doctrine as the seafood evidence.

Insert **after** the machine-readable compiler and **before** the job
sequence. Do not add another 001 letter. Do not disturb 001A–001K.

## Machine-readable compiler

```
SEATRACE:CONTINUITY-PACKET:v002
kind: DESIGN-CANDIDATE
posture: HOLD-PRESERVE-CANDIDATE
authorization: HOLD-AUTHORIZATION
orders: TAMMY001-SO-v002
handler: Packet Handler
acting_master: 1
execution_authority: none
rails: PUBLIC | COMPLIANCE | PRIVATE | SHARED_METADATA
subject_public: UNKNOWN
subject_private: UNKNOWN
census_001A: NOMINATED
jobs_001B_001K: NOT_COMPLETE
planes: EVIDENCE | SOFTWARE
both_green: required
existence_in_git: not-adoption
existence_in_db: not-adoption
pattern_library: not-inherited-checkmarks
```

Exact repository / ref / SHA remain **UNKNOWN** on this public record.
UNKNOWN is the lawful public default. KNOWN is a private-event promotion
from fetched bytes — never a chat claim.

## Law

A traceability event without lineage is incomplete.

A code commit without an accountable receipt is also incomplete.

Neither existence in a database nor existence in Git equals adoption.

Both planes must be green. One green plane does not adopt the other.

## Two continuity planes

```mermaid
flowchart LR
  subgraph evidence [Evidence continuity]
    E1[source] --> E2[canonical event]
    E2 --> E3[lineage]
    E3 --> E4[reconciliation]
    E4 --> E5[projection]
    E5 --> E6[evidence receipt]
  end
  subgraph software [Software continuity]
    S1[source commit] --> S2[authorized change]
    S2 --> S3[tests]
    S3 --> S4[build artifact]
    S4 --> S5[verifier]
    S5 --> S6[deployment / projection]
    S6 --> S7[release receipt]
  end
```

| Plane | Flow |
|---|---|
| Evidence | source → canonical event → lineage → reconciliation → projection → evidence receipt |
| Software | source commit → authorized change → tests → build artifact → verifier → deployment/projection → release receipt |

## Public state context vs private event logic

This is the UNKNOWN → KNOWN rule.

| Context | Knowledge now | Law |
|---|---|
| **Public state** (campaign copy, Commons record, MSC site) | UNKNOWN | Repository, fully qualified ref, and SHA stay UNKNOWN. Naming a public repo as a *lane* is allowed. Echoing a private SHA is not. UNKNOWN here is correct, not a missing field. |
| **Private event logic** (harness, graph, review receipts) | UNKNOWN | Starts UNKNOWN. Becomes KNOWN only from fetched bytes that bind repository + fully qualified ref + full SHA. VERIFIED-REPORTED is not KNOWN. Bare `main` is never KNOWN. |

UNKNOWN → KNOWN is a Packet Handler event with lineage. It is not a chat
claim, a Git log anecdote, or a precursor checkmark.

Public and private may share a CID. They are not co-authoritative packets.
A generator does not emit both rails.

## Four rails

| Rail | Role |
|---|---|
| PUBLIC | Allowlist-first disclosure. Stands alone. Never implies a private fact. |
| COMPLIANCE | Regulator-facing representation. Authorities live here — not a fifth storage rail. |
| PRIVATE | Event logic, graph, harness, settlement, margin, price. Below the waterline. |
| SHARED_METADATA | Shared CID / schema / policy labels. Not co-authoritative packets. |

## What checks off, and what does not

Predecessor-team work is a **pattern library and evidence lineage**. It is
not a bucket of green checkmarks that transfers into v002.

| Control | State now | Reason |
|---|---|
| One Acting Master / one canonical Packet Handler | DESIGN LAW | Prevents specialty agents becoming competing ledger writers. |
| Four-pillar evidence ordering | DESIGN LAW | EM observation → ER assertion → receiving measurement → approved MarketSide derivative. |
| PUBLIC / COMPLIANCE / PRIVATE / SHARED_METADATA | DESIGN LAW | Four rails. Regulators are authorities inside COMPLIANCE. |
| Pairing handle ≠ crypto key ≠ authority_token | DESIGN LAW | Three unrelated concepts must not collapse into “keys.” |
| Append corrections instead of overwrite | DESIGN LAW | Continuity semantics. Preserve prior receipts. Add a correction edge. |
| Atomic event + lineage + outbox | TARGET CONTRACT | Strong. Not verified on the nominated harness path. |
| Deterministic content hash vs issued envelope hash | TARGET CONTRACT | Right abstraction. Canonical byte encoding still belongs to 001D. |
| Mass balance / forecast error / economics formulas | SPECIFIED | Gated by Owner-ratified tolerances and real comparable baselines. |
| Previous dispatcher ValidateOnly / prior test work | VERIFIED-REPORTED PRECURSOR | Reusable pattern. Cannot check off a harness job without current repo/ref/hash evidence. |
| Earlier Level-0 wrong-root detection | VERIFIED-REPORTED PRECURSOR | Belongs inside 001A. Not already passed for this nominated path. |
| Prior Git / ledger mismatch findings | DESIGN INPUT | Why commit continuity and receipt continuity need separate gates. Not proof about this path. |
| 001A repository census | NOT RUN / NOT AUTHORIZED | Nominated only. No execution authority implied. |
| 001B–001K | NOT COMPLETE | None may inherit success from preceding repositories or agents. |
| Real 001 operating unit | NOT PROVEN | An evidentiary operating unit — not a production or fleet claim. |

## Evidence ETL + Reconcile + Project + Verify

Keep “ETL” because the engineering lineage already understands it.
SeaTrace’s version is:

**EXTRACT**
External evidence enters through a bounded adapter. Nothing is promoted
merely because it was observed or parsed.

**TRANSFORM / NORMALIZE**
Units, identifiers, evidence class, authority, source digest and schema
are canonicalized. The source observation remains preserved.

**LOAD**
Only the Packet Handler atomically commits: canonical event + LineageEdge
+ outbox.

**RECONCILE**
Later measured evidence may confirm, dispute, or supersede earlier
evidence through new events. Never destructive rewriting.

**PROJECT**
Outbox consumers derive separately authorized COMPLIANCE, PRIVATE, and
PUBLIC representations.

**VERIFY**
Far-side readback proves the receiving representation actually contains
the intended identity / version / hash / verdict.

**RECEIPT**
Independent evidence records what actually happened.

Receipt canonicalization precedes receipt-producing tests.
001A–001C are genuinely read-only when authorized.

## Defect classes

Git can know something happened while the governance ledger cannot account
for it. That is a deterministic defect class, not an anecdote.

| Class | When |
|---|---|
| `CODE_WITHOUT_RECEIPT` | Git knows a commit happened. The governance ledger cannot account for it. |
| `RECEIPT_WITHOUT_SUBJECT` | A receipt exists without bound repository / ref / full SHA. |
| `RECEIPT_SUBJECT_MISMATCH` | The receipt subject is not the fetched bytes it claims. |
| `UNVERIFIED_IMPLEMENTATION` | A design or precursor pattern is offered as proof of this path. |
| `UNAUTHORIZED_PROMOTION` | UNKNOWN is treated as KNOWN, or ADOPTED, without Owner GO. |
| `DEPLOYMENT_BINDING_UNKNOWN` | A deploy or projection cannot name the artifact / policy / subject it bound. |

## authority_token

Keep the v002 distinction. Define it as an **authorization reference**, not
a secret bearer credential. Otherwise a future agent may read it as
OAuth / JWT / API-token material.

```
authority_token =
a bounded reference proving authorization for one named action;
it is not cryptographic key material and must not contain a secret
credential unless separately classified and handled as PRIVATE.
```

| Name | Is | Is not |
|---|---|
| pairing handle | A correlating name between seats or systems | Not a key. Not an authority. |
| crypto key | Cryptographic material. PRIVATE unless separately classified | Not a pairing handle. Not an authority_token. |
| authority_token | Bounded reference for one named action | Not OAuth / JWT / API-secret unless classified PRIVATE. |

## Level 0 belongs inside 001A

001A is already the repository census. Preceding work shows why it must
also observe the Git root. A legitimate command from the wrong inherited
Git root invalidates everything downstream.

This is **not** a new 001 letter. It does not disturb 001A–001K.

When Git is the tool in that environment, use porcelain intended for
scripts and stable across Git versions and configuration. v2 supplies
branch / upstream data. NUL-terminated paths avoid pathname parsing
ambiguity.

Every field starts **UNKNOWN** on this public packet:

- authorized_root
- repository_root
- parent_git_boundary
- repository_identity
- remote_identity
- default_branch
- current_ref
- full_sha
- upstream
- worktrees
- dirty_paths
- ignored_required_artifacts
- untracked_required_artifacts
- history_relationship_to_expected_base
- applicable_instruction_files
- tool_versions

## Job sequence (still not run)

| Job | Title | State | Mode |
|---|---|---|---|
| 001A | Repository census + Level-0 observations | NOMINATED · NOT RUN · NOT AUTHORIZED | read-only when authorized |
| 001B | Read-only follow-on (named in candidate) | NOT COMPLETE | read-only |
| 001C | Read-only follow-on (named in candidate) | NOT COMPLETE | read-only |
| 001D | Canonical byte encoding (content hash vs envelope hash) | NOT COMPLETE | not started |
| 001E–001K | Remaining sequence | NOT COMPLETE | none inherit success |

This packet ends at HOLD-AUTHORIZATION. 001A is merely nominated.

## Ask when

- SO-02: public state would name a private SHA, lot, AIS, buyer, or COC.
- SO-03: private event logic claims KNOWN without fetched repo / ref / full SHA.
- SO-04: a precursor SHA or suite pass is inherited as proof of this path.
- SO-05: UNKNOWN is promoted to ADOPTED or SEND-IT without Owner GO.
- SO-07: a specialty agent writes the ledger, or a generator emits both rails.
- SO-09: Git existence is offered as a receipt, or a receipt has no subject.
- 001A: a command may be running from the wrong inherited Git root.
- TOKEN: authority_token is treated as OAuth / JWT / API-secret material.

## Terminals this seat will not print

COMPLETE, MERGE_READY, APPROVED, ADOPTED.

v003 remains: ARCHITECTURE-ALIGNED CANDIDATE · RATIFICATION BLOCKED ·
IMPLEMENTATION UNVERIFIED.
