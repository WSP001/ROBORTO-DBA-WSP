# Public record vs private stores

MSC = public switching private.
Waterline = the disclosure edge.
`data_rail` is independent of `access_tier`.

## Two rails

| Rail | Repo examples | What teammates may read |
|---|---|
| **Public record** | `ROBORTO-DBA-WSP`, `MARKETING-SeaTrace-MSC-v007`, `SeaTrace-ODOO`, `SirRodg`, `WAFC-Business` | Doctrine, marketing copy that stands alone, integration docs, RFP landing. |
| **Private store** | `SeaTrace.waterline`, `SeaTrace002`, `SeaTrace003`, `seatrace-harness`, `MARKETING-SeaTrace_CAMPAIGN`, `WSP2agent` | Graph, harness, campaign internals, outreach contacts. Named here; contents not echoed. |

Public and private may share a CID. They are not co-authoritative packets.
A generator does not emit both rails.

## Social is a third thing

Social / personal repos are neither SeaTrace record nor SeaTrace store:

CV, SirTrav, SirJames, wedding, football, movies, chatbot.

Do not commit SeaTrace HQ into those repos. Do not commit those projects
into this WORK folder.

## Never in the public record

- Lot IDs, AIS tracks, buyer names, chain-of-custody rows
- Private PR review receipts or exact private SHAs
- Harness internals, settlement, margin, price — even when synthetic
- The live HQ app source tree dumped into a random repo
- ADOPTED / SEND-IT / GO-WRITE without Owner GO and named files

On BLOCK: report location, rule, and hash. Never echo a prohibited value.

## Evidence order (doctrine, not disclosure)

observed / predicted < operational record < measured confirmation.

Measurement is not automatic disclosure.

## Authority

Builder → verifier → Owner.

This pack is a public **record** of classification and standing orders.
It is not ratification of v003. It is not a merge stamp.
