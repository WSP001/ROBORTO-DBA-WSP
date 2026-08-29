/**
 * Parked public-safe copy of SEATRACE:CONTINUITY-PACKET:v002.
 * Canonical in the live HQ preview; this file is the teammate-readable record.
 * Does not change TAMMY001-SO-v002 core laws.
 * Do not treat this park as ADOPTED. 001A is nominated, not run.
 */
export const PACKET_KIND = "SEATRACE:CONTINUITY-PACKET:v002";
export const PACKET_ORDERS = "TAMMY001-SO-v002";
export const PACKET_POSTURE = "HOLD-PRESERVE-CANDIDATE";
export const PACKET_AUTHORIZATION = "HOLD-AUTHORIZATION";
export const PACKET_KIND_LABEL = "DESIGN-CANDIDATE";
export const PACKET_HANDLER = "Packet Handler";

export const CONTINUITY_LAW = [
  "A traceability event without lineage is incomplete.",
  "A code commit without an accountable receipt is also incomplete.",
  "Neither existence in a database nor existence in Git equals adoption.",
].join(" ");

export const PLANES = [
  {
    id: "EVIDENCE",
    title: "Evidence continuity",
    why: "Seafood evidence. Same Packet Handler. Same receipt law.",
    steps: [
      "source",
      "canonical event",
      "lineage",
      "reconciliation",
      "projection",
      "evidence receipt",
    ],
  },
  {
    id: "SOFTWARE",
    title: "Software continuity",
    why: "The code that implements SeaTrace is governed by the same continuity doctrine.",
    steps: [
      "source commit",
      "authorized change",
      "tests",
      "build artifact",
      "verifier",
      "deployment / projection",
      "release receipt",
    ],
  },
] as const;

export const BOTH_GREEN =
  "Both planes must be green. One green plane does not adopt the other.";

export const RAILS = [
  {
    id: "PUBLIC",
    role: "Allowlist-first disclosure. Stands alone. Never implies a private fact.",
  },
  {
    id: "COMPLIANCE",
    role: "Regulator-facing representation. Authorities live here — not a fifth storage rail.",
  },
  {
    id: "PRIVATE",
    role: "Event logic, graph, harness, settlement, margin, price. Below the waterline.",
  },
  {
    id: "SHARED_METADATA",
    role: "Shared CID / schema / policy labels. Not co-authoritative packets.",
  },
] as const;

export type Knowledge = "UNKNOWN" | "KNOWN";
export type ContextRail = "public-state" | "private-event";

export const SUBJECT_BIND = [
  {
    rail: "public-state" as ContextRail,
    knowledge: "UNKNOWN" as Knowledge,
    law: "Public state context keeps repository, fully qualified ref, and SHA UNKNOWN. Naming a public repo as a lane is allowed. Echoing a private SHA is not. UNKNOWN is the lawful public default — not a missing field.",
  },
  {
    rail: "private-event" as ContextRail,
    knowledge: "UNKNOWN" as Knowledge,
    law: "Private event logic starts UNKNOWN. It becomes KNOWN only from fetched bytes that bind repository + fully qualified ref + full SHA. VERIFIED-REPORTED is not KNOWN. Bare main is never KNOWN.",
  },
] as const;

export const PROMOTION =
  "UNKNOWN → KNOWN is a Packet Handler event with lineage. It is not a chat claim, a Git log anecdote, or a precursor checkmark.";

export const IDENTITY_LAW = [
  {
    name: "pairing handle",
    is: "A correlating name between seats or systems.",
    isNot: "Not a key. Not an authority.",
  },
  {
    name: "crypto key",
    is: "Cryptographic material. PRIVATE unless a separate classification says otherwise.",
    isNot: "Not a pairing handle. Not an authority token.",
  },
  {
    name: "authority_token",
    is: "A bounded reference proving authorization for one named action.",
    isNot: "Not OAuth, JWT, or API-token secret material unless separately classified and handled as PRIVATE.",
  },
] as const;

export const AUTHORITY_TOKEN_LAW =
  "authority_token = a bounded reference proving authorization for one named action; it is not cryptographic key material and must not contain a secret credential unless separately classified and handled as PRIVATE.";

export type ControlGrade =
  | "DESIGN LAW"
  | "TARGET CONTRACT"
  | "SPECIFIED"
  | "VERIFIED-REPORTED PRECURSOR"
  | "DESIGN INPUT"
  | "NOT RUN / NOT AUTHORIZED"
  | "NOT COMPLETE"
  | "NOT PROVEN";

export const CONTROLS: {
  control: string;
  grade: ControlGrade;
  reason: string;
}[] = [
  {
    control: "One Acting Master / one canonical Packet Handler",
    grade: "DESIGN LAW",
    reason:
      "Prevents specialty agents becoming competing ledger writers.",
  },
  {
    control: "Four-pillar evidence ordering",
    grade: "DESIGN LAW",
    reason:
      "EM observation → ER assertion → receiving measurement → approved MarketSide derivative.",
  },
  {
    control: "PUBLIC / COMPLIANCE / PRIVATE / SHARED_METADATA",
    grade: "DESIGN LAW",
    reason:
      "Four rails. Regulators are authorities inside COMPLIANCE, not another store.",
  },
  {
    control: "Pairing handle ≠ crypto key ≠ authority_token",
    grade: "DESIGN LAW",
    reason: "Three unrelated concepts must not collapse into \u201ckeys.\u201d",
  },
  {
    control: "Append corrections instead of overwrite",
    grade: "DESIGN LAW",
    reason: "Continuity semantics. Preserve prior receipts. Add a correction edge.",
  },
  {
    control: "Atomic event + lineage + outbox",
    grade: "TARGET CONTRACT",
    reason: "Strong. Not verified in the nominated harness path.",
  },
  {
    control: "Deterministic content hash vs issued envelope hash",
    grade: "TARGET CONTRACT",
    reason: "Right abstraction. Canonical byte encoding still belongs to 001D.",
  },
  {
    control: "Mass balance / forecast error / economics formulas",
    grade: "SPECIFIED",
    reason:
      "Gated by Owner-ratified tolerances and real comparable baselines.",
  },
  {
    control: "Previous dispatcher ValidateOnly / prior test work",
    grade: "VERIFIED-REPORTED PRECURSOR",
    reason:
      "Reusable pattern. Cannot check off any harness job without current repo/ref/hash evidence.",
  },
  {
    control: "Earlier Level-0 wrong-root detection",
    grade: "VERIFIED-REPORTED PRECURSOR",
    reason:
      "Belongs inside 001A. Not already passed for this nominated path.",
  },
  {
    control: "Prior Git / ledger mismatch findings",
    grade: "DESIGN INPUT",
    reason:
      "Why commit continuity and receipt continuity need separate gates. Not proof about this path.",
  },
  {
    control: "001A repository census",
    grade: "NOT RUN / NOT AUTHORIZED",
    reason: "Nominated only. No execution authority implied.",
  },
  {
    control: "001B–001K",
    grade: "NOT COMPLETE",
    reason: "None may inherit success from preceding repositories or agents.",
  },
  {
    control: "Real 001 operating unit",
    grade: "NOT PROVEN",
    reason:
      "An evidentiary operating unit — not a production or fleet claim.",
  },
];

export const ETL_NAME = "Evidence ETL + Reconcile + Project + Verify";

export const ETL = [
  {
    id: "EXTRACT",
    order:
      "External evidence enters through a bounded adapter. Nothing is promoted merely because it was observed or parsed.",
  },
  {
    id: "TRANSFORM / NORMALIZE",
    order:
      "Units, identifiers, evidence class, authority, source digest and schema are canonicalized. The source observation remains preserved.",
  },
  {
    id: "LOAD",
    order:
      "Only the Packet Handler atomically commits: canonical event + LineageEdge + outbox.",
  },
  {
    id: "RECONCILE",
    order:
      "Later measured evidence may confirm, dispute, or supersede earlier evidence through new events. Never destructive rewriting.",
  },
  {
    id: "PROJECT",
    order:
      "Outbox consumers derive separately authorized COMPLIANCE, PRIVATE, and PUBLIC representations.",
  },
  {
    id: "VERIFY",
    order:
      "Far-side readback proves the receiving representation actually contains the intended identity / version / hash / verdict.",
  },
  {
    id: "RECEIPT",
    order: "Independent evidence records what actually happened.",
  },
] as const;

export const DEFECTS = [
  {
    id: "CODE_WITHOUT_RECEIPT",
    when: "Git knows a commit happened. The governance ledger cannot account for it.",
  },
  {
    id: "RECEIPT_WITHOUT_SUBJECT",
    when: "A receipt exists without bound repository / ref / full SHA.",
  },
  {
    id: "RECEIPT_SUBJECT_MISMATCH",
    when: "The receipt subject is not the fetched bytes it claims.",
  },
  {
    id: "UNVERIFIED_IMPLEMENTATION",
    when: "A design or precursor pattern is offered as proof of this path.",
  },
  {
    id: "UNAUTHORIZED_PROMOTION",
    when: "UNKNOWN is treated as KNOWN, or ADOPTED, without Owner GO.",
  },
  {
    id: "DEPLOYMENT_BINDING_UNKNOWN",
    when: "A deploy or projection cannot name the artifact / policy / subject it bound.",
  },
] as const;

export const LEVEL0_FIELDS = [
  "authorized_root",
  "repository_root",
  "parent_git_boundary",
  "repository_identity",
  "remote_identity",
  "default_branch",
  "current_ref",
  "full_sha",
  "upstream",
  "worktrees",
  "dirty_paths",
  "ignored_required_artifacts",
  "untracked_required_artifacts",
  "history_relationship_to_expected_base",
  "applicable_instruction_files",
  "tool_versions",
] as const;

export const LEVEL0_NOTE =
  "Level 0 belongs inside 001A. It is not a new job letter. It does not disturb 001A–001K. When Git is the tool, use porcelain intended for scripts, stable across versions; v2 supplies branch/upstream; NUL-terminated paths avoid pathname parsing. A legitimate command from the wrong inherited Git root invalidates everything downstream. Every field starts UNKNOWN.";

export const JOBS = [
  {
    id: "001A",
    title: "Repository census + Level-0 observations",
    state: "NOMINATED · NOT RUN · NOT AUTHORIZED",
    mode: "read-only when authorized",
  },
  {
    id: "001B",
    title: "Read-only follow-on (named in candidate)",
    state: "NOT COMPLETE",
    mode: "read-only",
  },
  {
    id: "001C",
    title: "Read-only follow-on (named in candidate)",
    state: "NOT COMPLETE",
    mode: "read-only",
  },
  {
    id: "001D",
    title: "Canonical byte encoding (content hash vs envelope hash)",
    state: "NOT COMPLETE",
    mode: "not started",
  },
  {
    id: "001E–001K",
    title: "Remaining sequence",
    state: "NOT COMPLETE",
    mode: "none inherit success from a precursor repo or agent",
  },
] as const;

export const PATTERN_LIBRARY =
  "Predecessor-team work is a pattern library and evidence lineage. It is not a bucket of green checkmarks that transfers into v002.";

export const INSERT_POINT =
  "Insert after the machine-readable compiler and before the job sequence. Do not add another 001 letter. Do not change TAMMY001-SO-v002 core laws.";

export const CONTINUITY_TRIGGERS = [
  { id: "SO-02", when: "Public state would name a private SHA, lot, AIS, buyer, or COC." },
  { id: "SO-03", when: "Private event logic claims KNOWN without fetched repo / ref / full SHA." },
  { id: "SO-04", when: "A precursor SHA or suite pass is inherited as proof of this path." },
  { id: "SO-05", when: "UNKNOWN is promoted to ADOPTED or SEND-IT without Owner GO." },
  { id: "SO-07", when: "A specialty agent writes the ledger, or a generator emits both rails." },
  { id: "SO-09", when: "Git existence is offered as a receipt, or a receipt has no subject." },
  { id: "001A", when: "A command may be running from the wrong inherited Git root." },
  { id: "TOKEN", when: "authority_token is treated as OAuth / JWT / API-secret material." },
] as const;

export function formatContinuityHeader() {
  return [
    PACKET_KIND,
    `kind: ${PACKET_KIND_LABEL}`,
    `posture: ${PACKET_POSTURE}`,
    `authorization: ${PACKET_AUTHORIZATION}`,
    `orders: ${PACKET_ORDERS}`,
    `handler: ${PACKET_HANDLER}`,
    "acting_master: 1",
    "execution_authority: none",
    "rails: PUBLIC | COMPLIANCE | PRIVATE | SHARED_METADATA",
    "subject_public: UNKNOWN",
    "subject_private: UNKNOWN",
    "census_001A: NOMINATED",
    "jobs_001B_001K: NOT_COMPLETE",
    "planes: EVIDENCE | SOFTWARE",
    "both_green: required",
    "existence_in_git: not-adoption",
    "existence_in_db: not-adoption",
    "pattern_library: not-inherited-checkmarks",
  ].join("\n");
}

export function formatContinuityPacket() {
  return [
    formatContinuityHeader(),
    "",
    INSERT_POINT,
    "",
    "LAW",
    CONTINUITY_LAW,
    "",
    BOTH_GREEN,
    "",
    "PLANES",
    ...PLANES.map(
      (p) => `${p.id}\n${p.steps.join(" → ")}`,
    ),
    "",
    "SUBJECT BIND",
    ...SUBJECT_BIND.map((s) => `${s.rail}: ${s.knowledge}\n${s.law}`),
    "",
    PROMOTION,
    "",
    "AUTHORITY TOKEN",
    AUTHORITY_TOKEN_LAW,
    "",
    ETL_NAME,
    ...ETL.map((s) => `${s.id}\n${s.order}`),
    "",
    "DEFECT CLASSES",
    ...DEFECTS.map((d) => `${d.id}\n${d.when}`),
    "",
    "001A LEVEL-0 (inside 001A, not a new letter)",
    LEVEL0_NOTE,
    LEVEL0_FIELDS.join(", "),
    "",
    "JOBS",
    ...JOBS.map((j) => `${j.id} ${j.title}\n${j.state} · ${j.mode}`),
    "",
    PATTERN_LIBRARY,
    "",
    "Ask when:",
    ...CONTINUITY_TRIGGERS.map((t) => `- ${t.id}: ${t.when}`),
  ].join("\n\n");
}

export function gradeVariant(
  grade: ControlGrade,
): "ok" | "hold" | "stop" | "public" | "default" {
  if (grade === "DESIGN LAW") return "ok";
  if (grade === "TARGET CONTRACT" || grade === "SPECIFIED") return "public";
  if (
    grade === "VERIFIED-REPORTED PRECURSOR" ||
    grade === "DESIGN INPUT"
  ) {
    return "hold";
  }
  return "stop";
}
