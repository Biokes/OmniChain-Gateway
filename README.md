# Omnichain Gateway

> B2B cross-chain settlement router and middleware built on Stellar.

Omnichain Gateway programmatically bridges Stellar's compliant fiat anchors with external decentralized finance ecosystems, automating currency conversions and transaction verification across chains.

---

## Why This Project Exists

Fintech applications and cross-border payment processors need to leverage Stellar's extensive on-ramps and off-ramps while maintaining interoperability with external DeFi applications on networks like Ethereum, Solana, and Arbitrum. This project addresses several persistent infrastructure gaps:

- **Fragmented liquidity** across isolated chain infrastructures forces manual and insecure treasury management.
- **Compliance complexity** — navigating Stellar's standard compliance layers (SEP-24, SEP-31, and SEP-38) alongside multi-chain protocols introduces significant integration overhead.
- **No standardized order router** exists to bundle fiat deposits directly into cross-chain swaps without manual intervention.
- **High-slippage paths** on localized pools degrade transaction capital efficiency.

---

## Repository Structure

```
.
├── packages/
│   │                       # locking, minting, and cross-chain message passing
│   ├── anchor-adapter/     # Node.js middleware handling interactive SEP-24
│   │                       # and B2B SEP-31 compliance workflows
│   └── rfq-engine/         # Core pricing service integrating with SEP-38 APIs
│                           # to lock in guaranteed currency conversion rates
└── docs/                   # Developer blueprints, security assumptions,
                            # and bridge implementation patterns
```

---

## Quick Start

### Prerequisites

- Node.js 22+
- Rust stable + Cargo
- Hardhat / Foundry (for EVM contract testing)

### Run EVM and Soroban Integration Tests

```bash
npm install
npm run test:all
```

### Execute SEP-38 Quote Generation

Query the gateway's routing engine to lock in an exchange rate between Stellar-native stablecoins and external destination assets:

```bash
cd packages/rfq-engine
npm run generate-quote -- --from "stellar:USDC" --to "ethereum:USDC" --amount 10000
```

---

## Security

To report a vulnerability, open  an issue, 

Multi-chain bridging involves significant risk. Omnichain Gateway minimizes exposure by requiring consensus validation through **Decentralized Verifier Networks (DVNs)** or institutional **Guardian nodes** to confirm source-chain state events before releasing target assets.

---

## License
[Click here to read License](.github/LICENSE)
