# 247iBET Micro-Frontend Proof of Concept

This Proof of Concept (PoC) demonstrates a micro-frontend architecture using Vue 3, Vite, and `@module-federation/vite`.

## Architecture
- **apps/shell**: The host container app (port 5000). Owns session state, routing, and layout.
- **apps/kyc**: The remote module (port 5001). Exposed via Module Federation.
- **packages/ui**: Shared UI components (stub).
- **packages/api-client**: Generated API client for C# backend (stub).
- **packages/auth**: Shared auth helpers (stub).
- **packages/contracts**: Shared DTOs and types (stub).

## Setup & Running

From the `mfe-poc` root, install dependencies:
```bash
pnpm install
```

### Development Ports
- **Shell**: `http://localhost:5000`
- **KYC**: `http://localhost:5001`

To run locally, you can start both apps using the root script:
```bash
pnpm dev
```

Navigate to `http://localhost:5000` to view the shell. Click on "KYC Module" to dynamically load the KYC remote over the network.
