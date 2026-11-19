export interface BankAccountRecord {
  role: string;
  bank: string;
  accountNumber: string;
  accountName: string;
  isPrimary?: boolean;
}

export interface MailPreset {
  id: 'kyb' | 'lga' | 'settlement' | 'api';
  label: string;
  subject: string;
  body: string;
}

export interface ApiSandboxPreset {
  id: 'kyb' | 'split' | 'ai' | 'manifest';
  label: string;
  method: 'POST' | 'GET';
  endpoint: string;
  languageLabel: string;
  code: string;
  output: string;
}

export interface LegalDocument {
  id: 'privacy' | 'terms' | 'sla';
  title: string;
  paragraphs: { heading?: string; text: string }[];
}

export const CORPORATE_PROFILE = {
  legalName: 'UNIFIED MULTI CONCEPT LTD',
  rcNumber: 'RC 6881592',
  incorporatedDate: 'February 20, 2023',
  abujaHq: 'No. 33, 64 Crescent, Gwarimpa 2, Abuja, FCT, Nigeria',
  potiskumHub: 'Sabon Layi, T-Junction, Potiskum, Yobe State, Nigeria',
  primaryEmail: 'adamumadu56@gmail.com',
  operationsEmail: 'ADAMUMADU74@GMAIL.COM',
  primaryPhone: '+234 702 569 2917',
  secondaryPhone: '+234 902 569 2917',
  settlementBank: 'Guaranty Trust Bank (GTBank Corporate)',
  classification:
    'Information Technology, Enterprise Software Development, AI Compute Virtualization & Digital Infrastructure Services',
};

export const BANK_ACCOUNTS: BankAccountRecord[] = [
  {
    role: 'Primary Settlement',
    bank: 'GTBank',
    accountNumber: '0766139326',
    accountName: 'UNIFIED MULTI CONCEPT LTD',
    isPrimary: true,
  },
  {
    role: 'Virtual Account 1',
    bank: 'Wema Bank (Flw)',
    accountNumber: '8548944294',
    accountName: 'UNIFIED MULTI CONCEPT LTD',
  },
  {
    role: 'Virtual Account 2',
    bank: 'Wema Bank (Flw)',
    accountNumber: '8548944295',
    accountName: 'UNIFIED MULTI CONCEPT LTD',
  },
  {
    role: 'Virtual Account 3',
    bank: 'Wema Bank (Flw)',
    accountNumber: '8548944296',
    accountName: 'UNIFIED MULTI CONCEPT LTD',
  },
  {
    role: 'Virtual Account 4',
    bank: 'Wema Bank (Flw)',
    accountNumber: '8548944297',
    accountName: 'UNIFIED MULTI CONCEPT LTD',
  },
];

export const SOLUTION_PILLARS = [
  {
    index: '01.',
    category: 'Edge & Cloud AI',
    title: 'Software-Defined AI Compute & In-Transit Virtualization',
    description:
      'Metered AI inference gateways and containerized edge compute nodes engineered for Nigerian universities, regional telecom carriers, and enterprise networks. Converts raw LLM and GPU workloads into predictable, Naira-denominated token quotas.',
    highlights: [
      'Sub-second token and bandwidth metering',
      'Low-latency caching for regional campuses',
      'Automated institutional quota enforcement',
    ],
  },
  {
    index: '02.',
    category: 'Grassroots ERP',
    title: '774-LGA Digital School & Enterprise Operating System',
    description:
      'Turnkey cloud administration for primary and secondary schools, vocational institutes, and LGA enterprise clusters. Automates student fee/levy invoicing, virtual account reconciliation, and verified Local Purchase Order (LPO) vendor procurement workflows.',
    highlights: [
      'Dedicated virtual accounts per student or unit',
      'Multi-party automated split settlements',
      'Auditable LPO and vendor KYB onboarding',
    ],
  },
  {
    index: '03.',
    category: 'Energy IoT & PAYG',
    title: 'Decentralized Clean Energy & Micro-Grid Telemetry',
    description:
      'Real-time IoT inverter telemetry and Pay-As-You-Go (PAYG) billing automation software for solar mini-grids and off-grid commercial clusters across Northern and Central Nigeria—linking kWh consumption directly to automated payment webhooks.',
    highlights: [
      'Automated STS token and relay provisioning',
      'Load balancing and battery health telemetry',
      'Instant USSD and bank transfer top-up webhooks',
    ],
  },
];

export const LGA_ZONES = [
  { region: 'North-East', count: 112, note: 'Potiskum Operations Anchor' },
  { region: 'North-West', count: 186, note: 'Regional School & Energy Nodes' },
  { region: 'North-Central + FCT', count: 121, note: 'Abuja Federal HQ & Core Cloud' },
  { region: 'Southern Zones', count: 355, note: 'Commercial & Campus Networks' },
];

export const MAIL_PRESETS: MailPreset[] = [
  {
    id: 'kyb',
    label: 'KYB & Banking Verification Notice',
    subject: 'KYB & Corporate Settlement Verification — UNIFIED MULTI CONCEPT LTD (RC 6881592)',
    body: `Dear Compliance & Partner Onboarding Team,

Please find the verified corporate details for UNIFIED MULTI CONCEPT LTD (CAC Registration No. RC 6881592, incorporated February 20, 2023):

- Registered Head Office: No. 33, 64 Crescent, Gwarimpa 2, Abuja, FCT, Nigeria
- Regional Operations Base: Sabon Layi, T-Junction, Potiskum, Yobe State, Nigeria
- Primary Settlement Account: GTBank — 0766139326 (UNIFIED MULTI CONCEPT LTD)
- Virtual Sub-Accounts (Wema Bank / Flutterwave): 8548944294, 8548944295, 8548944296, 8548944297

Our company operates as an enterprise software, AI compute virtualization, and digital infrastructure provider (non-deposit-taking). Kindly advise if any additional documentation is required.`,
  },
  {
    id: 'lga',
    label: '774-LGA Digital School / Enterprise Proposal',
    subject: '774-LGA Digital School & Enterprise Infrastructure Proposal — UNIFIED MULTI CONCEPT LTD',
    body: `Dear Institutional / LGA Project Lead,

UNIFIED MULTI CONCEPT LTD (RC 6881592) proposes a modular digital operating system and automated payment reconciliation framework designed for schools, enterprise clusters, and grassroots institutions across Nigeria's 774 LGAs.

Our platform supports dedicated virtual account collection, multi-party split settlements, and real-time operational reporting from our Abuja and Potiskum hubs.

We welcome the opportunity to schedule a technical walkthrough at your convenience.`,
  },
  {
    id: 'settlement',
    label: 'Settlement & Virtual Account Confirmation',
    subject: 'Corporate Settlement & Virtual Account Reference — UNIFIED MULTI CONCEPT LTD',
    body: `Dear Finance & Reconciliation Desk,

All approved corporate settlements and scheduled disbursements for UNIFIED MULTI CONCEPT LTD (RC 6881592) are routed to our verified accounts below:

- GTBank Primary Corporate Account: 0766139326
- Wema Bank Virtual Accounts: 8548944294 / 8548944295 / 8548944296 / 8548944297

Please quote your transaction/invoice reference upon remittance so our accounts desk can confirm receipt promptly.`,
  },
  {
    id: 'api',
    label: 'AI Compute & Mono/Flutterwave API Onboarding',
    subject: 'Technical Integration: Mono KYB, Flutterwave Split Rails & AI Compute Gateway',
    body: `Dear Engineering & Integration Team,

We are sharing our technical integration overview for UNIFIED MULTI CONCEPT LTD (RC 6881592) covering:

1. Automated KYB/KYC & live CAC lookup workflows via Mono APIs
2. Non-custodial payment collection and split settlements via Flutterwave
3. Metered AI compute and edge virtualization workflows

Please let us know your sandbox/webhook endpoints so our engineering team can coordinate testing.`,
  },
];

export const API_SANDBOX_PRESETS: ApiSandboxPreset[] = [
  {
    id: 'kyb',
    label: '1. KYB Onboarding (Mono)',
    method: 'POST',
    endpoint: '/v1/orchestration/kyb/verify-institution',
    languageLabel: 'Node.js / REST JSON',
    code: `// Orchestrate Mono Prove Custom KYC + Live CAC Status Report Lookup
const response = await fetch("https://api.unifiedmulticoncept.ng/v1/orchestration/kyb/verify-institution", {
  method: "POST",
  headers: {
    "Authorization": "Bearer umc_live_sec_98a71f4e22b0",
    "Content-Type": "application/json",
    "X-Idempotency-Key": "umc-kyb-2026-1119-001"
  },
  body: JSON.stringify({
    provider: "mono_prove_cac_v2",
    institution_name: "POTISKUM MODEL SCIENCE ACADEMY",
    cac_rc_number: "RC1948210",
    kyc_level: "custom",
    identities: ["bvn", "nin", "cac_status_report"],
    lga_code: "YOB-PTK-014"
  })
});`,
    output: `{
  "status": "success",
  "orchestrator": "UNIFIED MULTI CONCEPT LTD (RC 6881592)",
  "verification_id": "umc_ver_9948210ab",
  "mono_cac_lookup": {
    "rc_number": "RC1948210",
    "company_status": "ACTIVE",
    "status_report_pdf_verified": true,
    "director_bvn_nin_match": "EXACT_MATCH"
  },
  "provisioned_routing": {
    "psp_partner": "Flutterwave (CBN Licensed)",
    "virtual_account_status": "READY_FOR_SPLIT_SETTLEMENT"
  }
}`,
  },
  {
    id: 'split',
    label: '2. Split Settlement (Flw)',
    method: 'POST',
    endpoint: '/v1/orchestration/payments/virtual-account-split',
    languageLabel: 'TypeScript / REST JSON',
    code: `// Provision Flutterwave Virtual Account with Automated Multi-Party Split
const payload = {
  orchestrator_rc: "6881592",
  psp_rail: "flutterwave_v4",
  currency: "NGN",
  is_permanent: true,
  bvn: "22290184712",
  narration: "UMC-LGA Tuition & LPO Settlement",
  subaccount_splits: [
    { id: "RS_UMC_INST_001", transaction_split_ratio: 82 }, // School / Enterprise
    { id: "RS_UMC_VEND_014", transaction_split_ratio: 13 }, // Verified LPO Vendor
    { id: "RS_UMC_SAAS_999", transaction_split_ratio: 5 }   // UMC Software & Compute Fee
  ]
};

await umcClient.payments.createSplitVirtualAccount(payload);`,
    output: `{
  "status": "success",
  "message": "Non-custodial split virtual account provisioned via Flutterwave",
  "data": {
    "account_number": "8548944294",
    "bank_name": "Wema Bank / Flutterwave",
    "account_name": "UNIFIED MULTI CONCEPT LTD",
    "custody_model": "DIRECT_PSP_ESCROW_SPLIT",
    "settlement_schedule": "T+0_INSTANT_SUBACCOUNT"
  }
}`,
  },
  {
    id: 'ai',
    label: '3. AI Compute Metering',
    method: 'POST',
    endpoint: '/v1/compute/ai-gateway/meter-inference',
    languageLabel: 'Node.js / Edge Runtime',
    code: `// Metered AI Compute & In-Transit Virtualization Token Gateway
const inferenceRequest = {
  node_cluster: "NG-ABJ-EDGE-02",
  tenant_id: "UNIV-NORTHEAST-ICT-04",
  model_route: "enterprise-inference-router",
  metering_policy: {
    billing_currency: "NGN",
    max_tokens: 4096,
    auto_deduct_prepaid_compute_quota: true
  },
  prompt: "Generate audit summary for 774-LGA primary school energy & ICT allocation."
};

const result = await umcClient.compute.executeMeteredInference(inferenceRequest);`,
    output: `{
  "status": "completed",
  "node": "NG-ABJ-EDGE-02 (Unified Multi Concept Compute Virtualizer)",
  "metering": {
    "prompt_tokens": 28,
    "completion_tokens": 312,
    "total_tokens": 340,
    "compute_cost_ngn": 4.25,
    "remaining_institutional_quota_ngn": 48995.75
  },
  "latency_ms": 184
}`,
  },
  {
    id: 'manifest',
    label: '4. Integration Manifest JSON',
    method: 'GET',
    endpoint: '/v1/orchestration/corporate-manifest',
    languageLabel: 'Corporate Manifest JSON',
    code: `{
  "company": "UNIFIED MULTI CONCEPT LTD",
  "cac_rc_number": "RC 6881592",
  "architecture": "non_custodial_software_orchestrator",
  "identity_and_open_banking": {
    "provider": "Mono",
    "capabilities": [
      "prove_custom_kyc",
      "cac_status_report_lookup",
      "account_insights",
      "sweep_mandates"
    ]
  },
  "payment_and_split_rails": {
    "provider": "Flutterwave",
    "settlement_account": {
      "bank": "GTBank",
      "account_number": "0766139326",
      "account_name": "UNIFIED MULTI CONCEPT LTD"
    },
    "virtual_accounts_wema": [
      "8548944294",
      "8548944295",
      "8548944296",
      "8548944297"
    ]
  }
}`,
    output: `{
  "status": "verified",
  "entity": "UNIFIED MULTI CONCEPT LTD",
  "rc_number": "RC 6881592",
  "primary_settlement_gtb": "0766139326",
  "virtual_subaccounts_count": 4,
  "regulatory_classification": "NON_BANK_TECHNOLOGY_VENDOR"
}`,
  },
];

export const GITHUB_DEPLOY_STEPS = [
  {
    step: 'Step 01',
    title: 'Create Public Repository',
    description:
      'Create a GitHub repository (e.g. unified-multi-concept) under your GitHub account.',
  },
  {
    step: 'Step 02',
    title: 'Push Project & Workflow',
    description:
      'Push this project (including .github/workflows/deploy.yml and vite.config.ts) to the main branch.',
  },
  {
    step: 'Step 03',
    title: 'Select GitHub Actions Source',
    description:
      'In GitHub → Settings → Pages, set Build and deployment Source to GitHub Actions.',
  },
  {
    step: 'Step 04',
    title: 'Live on *.github.io',
    description:
      'The workflow builds dist/ and publishes your portal live on https://<username>.github.io/<repo>/.',
  },
];

export const LEGAL_DOCUMENTS: Record<LegalDocument['id'], LegalDocument> = {
  privacy: {
    id: 'privacy',
    title: 'Privacy & NDPR Data Protection Policy — UNIFIED MULTI CONCEPT LTD',
    paragraphs: [
      {
        text: 'UNIFIED MULTI CONCEPT LTD (RC 6881592) processes institutional and user telemetry in compliance with the Nigeria Data Protection Act (NDPA) and NDPR guidelines.',
      },
      {
        heading: '1. Consent-Driven Open Banking',
        text: 'Bank account telemetry and BVN/NIN identity checks are executed strictly upon explicit end-user consent via CBN-licensed open-banking infrastructure partner Mono.',
      },
      {
        heading: '2. Data Minimization & Encryption',
        text: 'All API payloads in transit are secured via TLS 1.3 and AES-256 encryption at rest. We never store raw banking passwords or card PAN details.',
      },
    ],
  },
  terms: {
    id: 'terms',
    title: 'Enterprise Software Terms of Service',
    paragraphs: [
      {
        heading: '1. Scope of Technology Services',
        text: 'UNIFIED MULTI CONCEPT LTD provides cloud ERP software, metered AI compute virtualization, and payment orchestration middleware to verified institutions, schools, utilities, and businesses.',
      },
      {
        heading: '2. Non-Custodial Financial Architecture',
        text: 'Client institutions acknowledge that all payment collections, virtual accounts, and split disbursements are settled directly by CBN-licensed Payment Service Providers (Flutterwave) into designated corporate bank accounts.',
      },
    ],
  },
  sla: {
    id: 'sla',
    title: 'Infrastructure Uptime & API Service Level Agreement (SLA)',
    paragraphs: [
      {
        heading: '1. Core API Availability',
        text: 'UNIFIED MULTI CONCEPT LTD commits to a 99.98% monthly uptime SLA across its AI Compute Gateway, Split-Settlement Webhook Router, and 774-LGA Digital School Operating System.',
      },
      {
        heading: '2. Engineering Support Hubs',
        text: 'Enterprise incident response is staffed across our Abuja Head Office (No. 33, 64 Crescent, Gwarimpa 2, FCT) and Regional Operations Hub (Sabon Layi, T-Junction, Potiskum, Yobe State).',
      },
    ],
  },
};
