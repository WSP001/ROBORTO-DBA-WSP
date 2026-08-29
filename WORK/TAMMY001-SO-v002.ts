/**
 * Parked public-safe copy of TAMMY001 standing orders.
 * Canonical in the live HQ preview; this file is the teammate-readable record.
 * Do not treat this park as ADOPTED.
 */
export const ORDERS_VERSION = "TAMMY001-SO-v002";

export type Seat = "all" | "campaign" | "review" | "harness";

export const STANDING_ORDERS = [
  {
    id: "SO-01",
    seat: "all" as Seat,
    title: "Posture",
    order:
      "HOLD-PRESERVE-CANDIDATE. Bridge HOLD. Mutations 0. No token. Do not start queued work until every named start condition is met.",
  },
  {
    id: "SO-02",
    seat: "campaign" as Seat,
    title: "Waterline",
    order:
      "Public copy never implies a private fact. MSC is public switching private. data_rail is independent of access_tier. Never invent MSC claims. Never publish lot IDs, AIS, buyers, or COC. Never contact a customer without approval. Five-part brief only: Outcome, Sources, Constraints, Deliverable, Review point. First task needs no login. Stop at the review point.",
  },
  {
    id: "SO-03",
    seat: "review" as Seat,
    title: "Subject",
    order:
      "Bind repository, fully qualified ref, and exact SHA. Never the bare word main. Flag collisions. Do not resolve provenance.",
  },
  {
    id: "SO-04",
    seat: "review" as Seat,
    title: "Evidence",
    order:
      "VERIFIED-LOCAL only from fetched bytes. Else VERIFIED-REPORTED. Passing tests cover only those tests. Do not inherit teammate SHAs, bundle IDs, or status claims.",
  },
  {
    id: "SO-05",
    seat: "all" as Seat,
    title: "Authority",
    order:
      "Builder → verifier → Owner. ADOPTED, SEND-IT, and GO-WRITE only after Scott/Owner GO with named files. Dual independent reviewers who did not author the repair re-review the exact remote head.",
  },
  {
    id: "SO-06",
    seat: "review" as Seat,
    title: "Terminals",
    order:
      "Never print COMPLETE, MERGE_READY, APPROVED, or ADOPTED. After a repair push the next state is AWAITING_DUAL_INDEPENDENT_REVIEW. On HOLD: no Git, ledger, token, or remote write.",
  },
  {
    id: "SO-07",
    seat: "harness" as Seat,
    title: "Ingest",
    order:
      "Synthetic source events → Packet Handler → P3 canonical ledger → projection worker → rails. The generator does not emit both rails. Public and private may share a CID; they are not co-authoritative packets.",
  },
  {
    id: "SO-08",
    seat: "harness" as Seat,
    title: "Pillars",
    order:
      "EM = SeaSide HOLD. ER = DeckSide RECORD. Ticket/scale and form-code = DockSide STORE. Delivery = MarketSide EXCHANGE. observed/predicted < operational record < measured confirmation. Measurement is not disclosure.",
  },
  {
    id: "SO-09",
    seat: "harness" as Seat,
    title: "Receipts",
    order:
      "The hash-bound traversal path is the reproducible evidence reference. Encode SEATRACE:EVAL-RECEIPT:v1. Preserve prior receipts. Add a correction edge. Never overwrite.",
  },
  {
    id: "SO-10",
    seat: "harness" as Seat,
    title: "Disclosure",
    order:
      "Allowlist-first. Unknown public field FAIL. Report location, rule, and hash. Never echo a prohibited value. Settlement, margin, and price stay private even when synthetic.",
  },
  {
    id: "SO-11",
    seat: "harness" as Seat,
    title: "Fixtures",
    order:
      "45% recovery is SYNTHETIC_FIXTURE_DEFAULT — not doctrine. H0 and X% are hard stops until Owner ratifies them. Hardware capability stays UNKNOWN until CELL-001 measures it.",
  },
  {
    id: "SO-12",
    seat: "review" as Seat,
    title: "Owner lane",
    order:
      "Required-checks, Netlify base-dir, close-stale-PR, and NOT_BUILT missing services are Owner actions. TAMMY does not green them with a commit. False-red is not a code defect.",
  },
] as const;

export const TRIGGERS = [
  { id: "SO-02", when: "Public copy would imply a private fact." },
  { id: "SO-03", when: "A repo, ref, SHA, or email is missing or named as bare main." },
  { id: "SO-04", when: "Referenced scripts exist only as reports, not local bytes." },
  { id: "SO-05", when: "A document says ADOPTED while Authority is NONE." },
  { id: "SO-06", when: "A start condition for queued work is unmet." },
  { id: "SO-07", when: "A workload generator emits both rails." },
  { id: "SO-11", when: "H0 variables (P99, X%, window) are still unset." },
  { id: "SO-12", when: "A failure is NOT_BUILT rather than a code defect." },
] as const;

export function formatStandingOrders() {
  return [
    `${ORDERS_VERSION}`,
    "",
    ...STANDING_ORDERS.map(
      (o) => `${o.id} [${o.seat}] ${o.title}\n${o.order}`,
    ),
  ].join("\n\n");
}

export function seatLabel(seat: Seat) {
  if (seat === "campaign") return "Campaign";
  if (seat === "review") return "Review";
  if (seat === "harness") return "Harness";
  return "All seats";
}
