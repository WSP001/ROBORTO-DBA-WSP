# 14A. DevOps Continuity and Evidence ETL Contract

Folded into `SEATRACE:CONTINUITY-PACKET:v002`.
TAMMY001-SO-v002 core laws unchanged.

**Kind:** DESIGN-CANDIDATE
**Posture:** HOLD-PRESERVE-CANDIDATE
**Authorization:** HOLD-AUTHORIZATION
**001A / 001D / 001J:** NOT RUN / NOT AUTHORIZED

Teammate restatement. **May or may not apply** — graded below.
DESIGN LAW applies now. TARGET CONTRACT is specified, not verified.
NOT RUN stays nominated.

Public state keeps repository / ref / SHA **UNKNOWN**.

## What applies now

| Item | State | Note |
|---|---|---|
| Neither plane borrows completion; COMMIT != RECEIPT and siblings | DESIGN LAW | Fits v002. Applies now. |
| ETL without destructive transformation | DESIGN LAW | Fits append-only. Applies now. |
| Local write / commit / push / build / HTTP is not completion | DESIGN LAW | Restates the inequalities. Applies now. |
| Read-only preflight must not create repository files as proof | DESIGN LAW | Fits 001A–001C. |
| Level-0 duties (REQUIRED / OBSERVE / PASS_OR_BLOCK) | DESIGN LAW | Contract for 001A. Values stay UNKNOWN until fetched bytes. |
| Canonical artifact home; private need not be public | DESIGN LAW | Fits public-vs-private rails. |
| PUBLIC has no ingress to the private ledger | DESIGN LAW | Fits SO-02 / SO-07 / SO-10. |
| Observability Waterline — no echo of prohibited values | DESIGN LAW | Fits SO-10, including CI and error text. |
| Builder cannot verify or authorize itself | DESIGN LAW | Fits SO-05. |
| rail != pairing_handle != cryptographic_key != authority_token | DESIGN LAW | Clarifies v002. |
| EXTRACT envelope / LOAD acceptance / VERIFY far-side fields | TARGET CONTRACT | Specified with duties. Not verified on the nominated harness path. |
| Receipt-chain fields; content_hash vs envelope_hash | TARGET CONTRACT | Canonical encoding still belongs to 001D. |
| Transformation reconciliation (unit, loss, WIP, rounding, tolerance) | TARGET CONTRACT | Gated by Owner-ratified values. Not run. |
| Schema and policy migration contract | TARGET CONTRACT | A newer file is not authoritative merely by existing. |
| Build and release provenance fields | TARGET CONTRACT | SHA fields stay UNKNOWN on this public record. |
| Environment states and separate promotion permissions | TARGET CONTRACT | Named. Not an authorization to promote. |
| 001A Level-0 census execution | NOT RUN / NOT AUTHORIZED | Nominated. |
| 001D hash / encoding / signature procedure | NOT RUN / NOT AUTHORIZED | Must be versioned, not inferred. |
| 001J failure-recovery suite | NOT RUN / NOT AUTHORIZED | Named coverage. Not inherited. |

## Governing law

SeaTrace governs two independent but linked continuity planes.

```
EVIDENCE PLANE
authorized source
→ evidence envelope
→ canonical event
→ lineage
→ reconciliation
→ governed projection
→ evidence receipt

SOFTWARE PLANE
authorized source revision
→ bounded implementation
→ deterministic tests
→ artifact
→ independent verification
→ authorized promotion
→ release receipt
```

Neither plane may borrow completion from the other.

A valid business result does not prove that the software was produced or
promoted correctly.

A valid software build does not prove that a fisheries event, regulatory
anchor, reconciliation, economic result, or public claim is true.

```
COMMIT != RECEIPT
BUILD != VERIFICATION
PUSH != PROMOTION
DEPLOY != CORRECT DEPLOYMENT
HTTP_200 != CORRECT BODY
PRIVATE TRUTH != PUBLIC DISCLOSURE
```

A software commit may exist while remaining:

```
IMPLEMENTED
UNRECEIPTED
UNVERIFIED
UNADOPTED
```

Existence is not adoption.

## Repository Level-0 law

Before repository Job 001A may classify the target, establish read-only.
Every value on this public packet is UNKNOWN. The duty is the law when
001A is authorized in private event logic.

| Field | Duty | Public knowledge |
|---|---|---|
| authorized_root | REQUIRED | UNKNOWN |
| repository_root | REQUIRED | UNKNOWN |
| parent_git_boundary | REQUIRED | UNKNOWN |
| repository_identity | REQUIRED | UNKNOWN |
| repository_visibility | OBSERVE_IF_AUTHORIZED | UNKNOWN |
| remote_identity | REQUIRED | UNKNOWN |
| default_branch | OBSERVE | UNKNOWN |
| current_ref | REQUIRED | UNKNOWN |
| full_sha | REQUIRED | UNKNOWN |
| upstream | OBSERVE | UNKNOWN |
| worktrees | REQUIRED | UNKNOWN |
| tracked_change_state | REQUIRED | UNKNOWN |
| untracked_state | REQUIRED | UNKNOWN |
| ignored_state | REQUIRED_WHEN_RELEVANT | UNKNOWN |
| applicable_instruction_files | REQUIRED | UNKNOWN |
| tool_versions | REQUIRED | UNKNOWN |
| expected_history_relationship | OBSERVE_WHEN_NOMINATED | UNKNOWN |
| result | PASS_OR_BLOCK | UNKNOWN |

Unexpected parent Git metadata, repository identity, history topology,
worktree state, or instruction scope blocks continuation.

Read-only preflight produces stdout or an independently authorized
external receipt. It must **not** create repository files as proof that
it ran.

Where Git is confirmed, prefer machine-stable output intended for
programmatic parsing rather than human-oriented console summaries.

## Canonical-artifact visibility law

Required architecture, tests, schemas, contracts, fixtures, receipts, and
governance instructions must have a canonical accountable location.

A required artifact that is ignored, untracked, local-only, or otherwise
absent from canonical provenance must return:

```
CANONICAL_REQUIRED_ARTIFACT_UNACCOUNTED
```

unless an authorized manifest records:

| Field | Duty |
|---|---|
| identity | REQUIRED |
| classification | REQUIRED |
| canonical_location | REQUIRED |
| digest | REQUIRED |
| exclusion_reason | REQUIRED |
| recovery_method | REQUIRED |
| authority_reference | REQUIRED |

Private material need not be placed into a public repository. It must
still have an accountable canonical home.

## Evidence ETL law

SeaTrace retains the established ETL concept but applies it without
destructive transformation.

```
EXTRACT → NORMALIZE → LOAD → RECONCILE → PROJECT → VERIFY
```

Receipts terminate each plane (evidence receipt / release receipt).
They are not a seventh ETL rewrite step.

**EXTRACT** — Adapters may read only authorized sources. Extraction does
not promote observation into assertion, measurement, reconciliation,
compliance, or public truth.

| Field | Duty |
|---|---|
| source_id | REQUIRED |
| source_type | REQUIRED |
| source_reference | REQUIRED |
| source_digest | REQUIRED_WHEN_AVAILABLE |
| observed_at | REQUIRED_WHEN_AVAILABLE |
| retrieved_at | REQUIRED |
| evidence_grade | REQUIRED |
| rail | REQUIRED |
| schema_version | REQUIRED |

**NORMALIZE** — May standardize identifiers, units, schemas, authority
references, evidence classes, and deterministic representations. Must
preserve original source identity and digest. Never silently overwrite
source evidence.

**LOAD** — Only the authorized Packet Handler may write canonical state.
One logical acceptance commits canonical event + typed LineageEdge +
outbox atomically. No specialty agent, adapter, generator, projector,
verifier, UI, or public service becomes a second canonical writer.

| Field | Duty |
|---|---|
| idempotency_key | REQUIRED |
| duplicate_policy | REQUIRED |
| ordering_policy | REQUIRED |
| transaction_boundary | REQUIRED |
| failure_result | REQUIRED |
| retry_policy | REQUIRED |
| correction_policy | APPEND_ONLY |

**RECONCILE** — Later evidence may CONFIRM, DISPUTE, CORRECT, SUPERSEDE,
RECONCILE, or BLOCK. It may not erase historical evidence.
Transformation reconciliation uses Owner-ratified unit, loss taxonomy,
WIP treatment, rounding rule, and tolerance.

**PROJECT** — The outbox is the asynchronous boundary. PUBLIC consumes
approved projection inputs only and has no ingress or query path to the
private canonical ledger. COMPLIANCE is not public. PRIVATE may retain
protected operating and economic values. SHARED_METADATA contains pairing
information, hashes, versions, timestamps, counts, classifications,
verdicts, and approved redaction metadata only.

**VERIFY** — Every authorized boundary crossing requires far-side
readback. A local write, commit, push, build, projection, API response,
deployment command, or successful transport status is not completion by
itself.

| Field | Duty |
|---|---|
| subject_identity | REQUIRED |
| source_content_hash | REQUIRED |
| received_content_hash | REQUIRED |
| schema_version | REQUIRED |
| policy_version | REQUIRED |
| code_sha | REQUIRED_WHEN_SOFTWARE_PRODUCED |
| artifact_digest | REQUIRED_WHEN_BUILT |
| verdict | REQUIRED |

## Dual continuity gate

Deterministic defects:

```
CODE_WITHOUT_RECEIPT
RECEIPT_WITHOUT_SUBJECT
RECEIPT_SUBJECT_MISMATCH
RECEIPT_CHAIN_BREAK
EVENT_WITHOUT_LINEAGE
LINEAGE_WITHOUT_EVENT
OUTBOX_WITHOUT_ACCEPTED_EVENT
PROJECTION_WITHOUT_SOURCE_RECEIPT
PUBLIC_PROJECTION_RECONSTRUCTS_PRIVATE
UNVERIFIED_IMPLEMENTATION
SELF_VERIFIED_IMPLEMENTATION
UNAUTHORIZED_PROMOTION
DEPLOYMENT_BINDING_UNKNOWN
CANONICAL_REQUIRED_ARTIFACT_UNACCOUNTED
```

## Receipt-chain law

Execution, evidence, verification, and release receipts must identify
their subject explicitly. Where receipts form a sequence:

| Field | Duty |
|---|---|
| receipt_id | REQUIRED |
| receipt_type | REQUIRED |
| subject_id | REQUIRED |
| subject_digest | REQUIRED |
| prior_receipt_hash | REQUIRED_OR_GENESIS |
| assignment_id | REQUIRED |
| authority_reference | REQUIRED |
| producer_identity | REQUIRED |
| producer_role | REQUIRED |
| content_hash | REQUIRED |
| envelope_hash | REQUIRED_WHEN_ISSUED |
| schema_version | REQUIRED |
| policy_version | REQUIRED |
| issued_at | REQUIRED_WHEN_ENVELOPED |
| verdict | REQUIRED |

content_hash covers deterministic canonical content.
envelope_hash covers the issued envelope and may vary because of issuance
time, signer, or authorized delivery metadata.

The hash algorithm, canonical encoding, domain separation, signature
algorithm, key policy, and verification procedure belong to Job 001D and
must be versioned rather than inferred.

## Authority-token clarification

```
rail
!= pairing_handle
!= cryptographic_key
!= authority_token
```

authority_token means a bounded authorization reference for one named
action. It does not imply a bearer credential and must not contain secret
authentication material unless independently classified and handled as
PRIVATE. Receipts record the authorization reference, not reusable secret
credentials.

## Schema and policy migration law

Every canonical schema and executable policy has an explicit version.
A newer file does not become authoritative merely by existing.

| Field | Duty |
|---|---|
| from_version | REQUIRED |
| to_version | REQUIRED |
| compatibility | REQUIRED |
| migration_id | REQUIRED |
| migration_digest | REQUIRED_WHEN_IMPLEMENTED |
| affected_event_types | REQUIRED |
| rollback_or_forward_fix | REQUIRED |
| owner_authority | REQUIRED |
| verification_receipt | REQUIRED |

Historical receipts remain interpretable under the schema and policy
versions that produced them.

## Observability Waterline law

Logs, traces, metrics, crash reports, CI output, test artifacts, and
error messages are disclosure surfaces.

Must not echo: exact protected weights, exact locations or tracks,
prices, customers, invoices, settlements, margins, credentials, private
routing, private canaries.

Failure evidence records identifiers, rule codes, paths, counts, digests,
and classifications rather than prohibited values.

## Build and release provenance law

Software artifacts are governed separately from fisheries evidence
events. On this public record those SHA fields stay UNKNOWN.

| Field | Duty |
|---|---|
| source_repository | REQUIRED |
| source_ref | REQUIRED |
| source_sha | REQUIRED |
| builder_identity | REQUIRED |
| build_definition | REQUIRED |
| dependency_lock_digest | REQUIRED_WHEN_APPLICABLE |
| configuration_digest | REQUIRED |
| artifact_digest | REQUIRED |
| tests | REQUIRED |
| verifier_identity | REQUIRED |
| promotion_authority | REQUIRED |
| target_environment | REQUIRED |
| far_side_digest | REQUIRED_AFTER_PROMOTION |
| release_receipt | REQUIRED |

Build provenance describes how software was produced. It does not replace
SeaTrace evidence, lineage, reconciliation, or regulatory records.

## Environment and promotion law

Rail and deployment environment are separate classifications.

```
LOCAL_SYNTHETIC
TEST_SYNTHETIC
STAGING_PUBLIC
STAGING_PRIVATE
PRODUCTION_PUBLIC
PRODUCTION_PRIVATE
COMPLIANCE_EXPORT
```

Movement between environments requires separate bounded authority.
Write, commit, push, preview, deploy, publish, and regulatory export
remain separate permissions.

## Recovery law (Job 001J)

001J must exercise failure recovery in addition to nominal scale.

Named coverage, **not run**: duplicate delivery, retry after partial
failure, Packet Handler interruption, outbox replay, projection replay,
correction replay, receipt-chain recovery, backup restoration, schema
migration recovery, wrong-target rejection.

Recovery succeeds only if canonical evidence, lineage, receipts, and
projection state remain explainable after the test.

## DevOps termination principle

1. Observe before changing.
2. Bind identity before authority.
3. Preserve source before normalization.
4. One writer commits canonical truth.
5. Reconciliation creates events rather than rewriting history.
6. Projection crosses the Waterline only through policy.
7. Every boundary is read back from the far side.
8. Every material software artifact has accountable provenance.
9. Every material evidence event has accountable lineage.
10. A builder cannot verify or authorize itself.
11. Owner authority remains separate from machine execution.

## Terminals this seat will not print

COMPLETE, MERGE_READY, APPROVED, ADOPTED.

v003 remains: ARCHITECTURE-ALIGNED CANDIDATE · RATIFICATION BLOCKED ·
IMPLEMENTATION UNVERIFIED.
