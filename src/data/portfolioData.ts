import awsEstimatorImg from '../assets/images/lab_aws_estimator_1794535324894.jpg';
import dotnetReviewerImg from '../assets/images/lab_dotnet_reviewer_1794535325365.jpg';

export type SkillCategory =
  | 'All'
  | '.NET Ecosystem'
  | 'AWS Cloud & DevOps'
  | 'Architecture & Data'
  | 'AI & Modern Workflows';

export interface ImpactMetric {
  id: string;
  figure: string;
  title: string;
  detail: string;
  accent: 'cyan' | 'amber';
}

export interface SkillItem {
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  focus: string;
  proficiency: 'Principal' | 'Production' | 'Applied';
  yearsOrContext: string;
}

export interface RadarAxis {
  id: string;
  label: string;
  shortLabel: string;
  category: Exclude<SkillCategory, 'All'>;
  score: number;
  summary: string;
}

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  headlineMetric: string;
  metricContext: string;
  stack: string[];
  problem: string;
  tradeoffs: string[];
  impact: string[];
  topology: {
    step: string;
    service: string;
    role: string;
  }[];
}

export interface LabTool {
  id: string;
  title: string;
  subtitle: string;
  stage: string;
  description: string;
  capabilities: string[];
  stack: string[];
  url: string;
  image: string;
  imageAlt: string;
  accent: 'amber' | 'cyan';
}

export const SOCIAL_LINKS = {
  github: 'https://github.com/gauravkumar-labs',
  linkedin: 'https://www.linkedin.com/in/gaurav-kumar-a154121b/',
  labs: 'https://gauravkumar-labs.vercel.app',
} as const;

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'experience',
    figure: '15+ Yrs',
    title: '15+ Years Engineering Experience',
    detail: 'Enterprise software delivery, architecture leadership, and production ownership.',
    accent: 'cyan',
  },
  {
    id: 'cloud-native',
    figure: '.NET + AWS',
    title: 'Cloud-Native .NET & AWS Systems',
    detail: 'Zero-downtime modernization from Windows monoliths to Linux ECS, Lambda, and EKS.',
    accent: 'amber',
  },
  {
    id: 'distributed-apis',
    figure: '99.99% SLA',
    title: 'High-Throughput Distributed APIs',
    detail: 'Resilient gRPC, Minimal API, and event-driven pipelines built for burst concurrency.',
    accent: 'cyan',
  },
  {
    id: 'genai-modernization',
    figure: 'RAG + LLM',
    title: 'GenAI & Enterprise Modernization',
    detail: 'Secure Semantic Kernel, Bedrock, and Gemini workflows grounded in enterprise data.',
    accent: 'amber',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  'All',
  '.NET Ecosystem',
  'AWS Cloud & DevOps',
  'Architecture & Data',
  'AI & Modern Workflows',
];

export const SKILLS: SkillItem[] = [
  // .NET Ecosystem
  {
    name: 'C#',
    category: '.NET Ecosystem',
    focus: 'High-allocation-free concurrency, Span<T>, Channels, and strongly typed domain models',
    proficiency: 'Principal',
    yearsOrContext: '15+ yrs production',
  },
  {
    name: '.NET 8/9',
    category: '.NET Ecosystem',
    focus: 'Linux containerization, AOT readiness, background Worker Services, and runtime tuning',
    proficiency: 'Principal',
    yearsOrContext: 'Modern LTS core',
  },
  {
    name: 'ASP.NET Core',
    category: '.NET Ecosystem',
    focus: 'Resilient middleware pipelines, rate limiting, OpenTelemetry, and health probes',
    proficiency: 'Principal',
    yearsOrContext: '10+ yrs APIs',
  },
  {
    name: 'Minimal APIs',
    category: '.NET Ecosystem',
    focus: 'Low-overhead microservice endpoints with typed results and source-generated JSON',
    proficiency: 'Principal',
    yearsOrContext: 'High-throughput edge',
  },
  {
    name: 'Entity Framework Core',
    category: '.NET Ecosystem',
    focus: 'Compiled queries, split-query tuning, migrations, and read/write DbContext separation',
    proficiency: 'Principal',
    yearsOrContext: 'SQL Server & Postgres',
  },
  {
    name: 'gRPC',
    category: '.NET Ecosystem',
    focus: 'Low-latency internal service contracts with Protobuf schemas and streaming RPCs',
    proficiency: 'Production',
    yearsOrContext: 'East-west RPC',
  },
  {
    name: 'xUnit',
    category: '.NET Ecosystem',
    focus: 'Contract testing, WebApplicationFactory integration suites, and CI quality gates',
    proficiency: 'Principal',
    yearsOrContext: 'Automated testing',
  },

  // AWS Cloud & DevOps
  {
    name: 'ECS/Fargate',
    category: 'AWS Cloud & DevOps',
    focus: 'Serverless container orchestration, ALB blue/green rollouts, and autoscaling policies',
    proficiency: 'Principal',
    yearsOrContext: 'Primary compute',
  },
  {
    name: 'AWS Lambda',
    category: 'AWS Cloud & DevOps',
    focus: 'Event-driven .NET workers, cold-start mitigation, and SQS partial-batch responses',
    proficiency: 'Principal',
    yearsOrContext: 'Serverless compute',
  },
  {
    name: 'EKS',
    category: 'AWS Cloud & DevOps',
    focus: 'Managed Kubernetes workloads, pod identity, Karpenter scaling, and mesh routing',
    proficiency: 'Production',
    yearsOrContext: 'Container clusters',
  },
  {
    name: 'DynamoDB',
    category: 'AWS Cloud & DevOps',
    focus: 'Single-table modeling, idempotency locks, TTL expiry, and DynamoDB Streams',
    proficiency: 'Production',
    yearsOrContext: 'Low-latency NoSQL',
  },
  {
    name: 'RDS (PostgreSQL/SQL Server)',
    category: 'AWS Cloud & DevOps',
    focus: 'Multi-AZ failover, read replicas, RDS Proxy pooling, and zero-downtime cutovers',
    proficiency: 'Principal',
    yearsOrContext: 'Relational core',
  },
  {
    name: 'SQS/SNS',
    category: 'AWS Cloud & DevOps',
    focus: 'Fan-out pub/sub, FIFO ordering groups, dead-letter queues, and replay tooling',
    proficiency: 'Principal',
    yearsOrContext: 'Async backbone',
  },
  {
    name: 'EventBridge',
    category: 'AWS Cloud & DevOps',
    focus: 'Schema-validated domain event buses, cross-service routing, and scheduled rules',
    proficiency: 'Production',
    yearsOrContext: 'Domain choreography',
  },
  {
    name: 'Terraform/CDK',
    category: 'AWS Cloud & DevOps',
    focus: 'Modular Infrastructure as Code, drift detection, and repeatable multi-account stacks',
    proficiency: 'Principal',
    yearsOrContext: 'IaC governance',
  },
  {
    name: 'Docker',
    category: 'AWS Cloud & DevOps',
    focus: 'Multi-stage chiseled .NET images, non-root security hardening, and ECR scanning',
    proficiency: 'Principal',
    yearsOrContext: 'Immutable artifacts',
  },

  // Architecture & Data
  {
    name: 'Microservices',
    category: 'Architecture & Data',
    focus: 'Bounded contexts, strangler-fig decomposition, and fault-isolated deployments',
    proficiency: 'Principal',
    yearsOrContext: 'Domain boundaries',
  },
  {
    name: 'Event-Driven Architecture',
    category: 'Architecture & Data',
    focus: 'Transactional outbox, saga orchestration, and eventual consistency guarantees',
    proficiency: 'Principal',
    yearsOrContext: 'Resilient workflows',
  },
  {
    name: 'Redis',
    category: 'Architecture & Data',
    focus: 'Distributed caching, sliding-window rate limits, and sub-millisecond session state',
    proficiency: 'Production',
    yearsOrContext: 'ElastiCache',
  },
  {
    name: 'Kafka',
    category: 'Architecture & Data',
    focus: 'High-volume event streaming, consumer group partitioning, and log compaction',
    proficiency: 'Production',
    yearsOrContext: 'Event streaming',
  },
  {
    name: 'REST',
    category: 'Architecture & Data',
    focus: 'Versioned OpenAPI contracts, RFC 7807 ProblemDetails, and idempotent HTTP semantics',
    proficiency: 'Principal',
    yearsOrContext: 'External contracts',
  },
  {
    name: 'CI/CD (GitHub Actions)',
    category: 'Architecture & Data',
    focus: 'OIDC AWS federation, parallel test matrices, container signing, and canary gates',
    proficiency: 'Principal',
    yearsOrContext: 'Automated release',
  },

  // AI & Modern Workflows
  {
    name: 'Semantic Kernel',
    category: 'AI & Modern Workflows',
    focus: '.NET orchestration plugins, native function calling, memory connectors, and guardrails',
    proficiency: 'Applied',
    yearsOrContext: '.NET AI orchestration',
  },
  {
    name: 'Amazon Bedrock',
    category: 'AI & Modern Workflows',
    focus: 'VPC-private foundation model inference, IAM-scoped access, and Guardrails policies',
    proficiency: 'Applied',
    yearsOrContext: 'Enterprise AWS AI',
  },
  {
    name: 'Gemini API',
    category: 'AI & Modern Workflows',
    focus: 'Structured JSON extraction, long-context code analysis, and multimodal workflows',
    proficiency: 'Applied',
    yearsOrContext: 'Reasoning & synthesis',
  },
  {
    name: 'RAG Pipelines',
    category: 'AI & Modern Workflows',
    focus: 'Hybrid semantic + keyword retrieval, ACL-filtered chunking, and citation grounding',
    proficiency: 'Applied',
    yearsOrContext: 'Grounded knowledge',
  },
  {
    name: 'Prompt Engineering',
    category: 'AI & Modern Workflows',
    focus: 'Deterministic schema prompts, evaluation rubrics, and injection-resistant templates',
    proficiency: 'Applied',
    yearsOrContext: 'Production reliability',
  },
];

export const RADAR_AXES: RadarAxis[] = [
  {
    id: 'dotnet',
    label: '.NET Runtime & APIs',
    shortLabel: '.NET Core',
    category: '.NET Ecosystem',
    score: 96,
    summary: '15+ years across C#, .NET 8/9, ASP.NET Core, gRPC, and EF Core optimization.',
  },
  {
    id: 'aws',
    label: 'AWS Cloud & IaC',
    shortLabel: 'AWS Cloud',
    category: 'AWS Cloud & DevOps',
    score: 94,
    summary: 'Production ECS/Fargate, Lambda, EKS, RDS, DynamoDB, and Terraform/CDK.',
  },
  {
    id: 'distributed',
    label: 'Distributed Systems',
    shortLabel: 'Distributed',
    category: 'Architecture & Data',
    score: 93,
    summary: 'Event-driven microservices, SQS/SNS, Kafka, Redis, and fault tolerance.',
  },
  {
    id: 'data',
    label: 'Data & Persistence',
    shortLabel: 'Data Layer',
    category: 'Architecture & Data',
    score: 90,
    summary: 'PostgreSQL, SQL Server, DynamoDB single-table patterns, and outbox consistency.',
  },
  {
    id: 'devops',
    label: 'CI/CD & Observability',
    shortLabel: 'DevOps',
    category: 'AWS Cloud & DevOps',
    score: 89,
    summary: 'Docker chiseled containers, GitHub Actions OIDC, OpenTelemetry, blue/green deploys.',
  },
  {
    id: 'genai',
    label: 'Enterprise GenAI',
    shortLabel: 'GenAI & RAG',
    category: 'AI & Modern Workflows',
    score: 86,
    summary: 'Semantic Kernel, Amazon Bedrock, Gemini API, and ACL-safe RAG pipelines.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'legacy-dotnet-eks',
    index: '01',
    title: 'Legacy .NET Framework to Cloud-Native .NET on AWS EKS',
    subtitle: 'Strangler-fig containerization and portable Kubernetes architecture across AWS, multi-cloud, and on-prem.',
    headlineMetric: '-42% Compute Cost',
    metricContext: '38% lower p95 latency',
    stack: ['.NET 8', 'ASP.NET Core', 'AWS EKS', 'Helm / Karpenter', 'RDS SQL Server', 'Terraform'],
    problem:
      'A core enterprise platform running on aging .NET Framework 4.8 Windows IIS servers suffered from 18-minute manual deployment windows, high Windows EC2 licensing overhead, and tight AWS/VM coupling that blocked hybrid-cloud and on-premises customer deployments.',
    tradeoffs: [
      'Chose AWS EKS over ECS/Fargate despite higher control-plane complexity ($0.10/hr cluster fee + Helm/RBAC ops) because standard Kubernetes manifests and Helm charts allow identical .NET workloads to run on AWS, Azure/GCP, or on-prem clusters without vendor lock-in.',
      'Adopted Karpenter node auto-provisioning with Linux Spot/Graviton fallbacks and a strangler-fig Ingress routing strategy, migrating high-churn checkout and reporting domains into .NET 8 Minimal APIs before retiring legacy IIS VMs.',
      'Retained RDS SQL Server with Read Replicas during phase one and introduced EF Core compiled queries + Redis caching instead of an immediate high-risk database engine migration.',
    ],
    impact: [
      '42% reduction in monthly compute and Windows licensing spend via Linux chiseled .NET containers and bin-packed EKS nodes.',
      '38% drop in p95 API latency through async I/O, connection pooling, and ElastiCache Redis offloading.',
      'Full workload portability—validated deployment of identical Helm charts across AWS EKS and air-gapped on-prem Kubernetes.',
    ],
    topology: [
      { step: '01', service: 'ALB Ingress Controller', role: 'Canary path routing' },
      { step: '02', service: '.NET 8 on AWS EKS', role: 'Portable Linux pods + HPA' },
      { step: '03', service: 'Redis / ElastiCache', role: 'Hot session & query cache' },
      { step: '04', service: 'Multi-AZ RDS', role: 'Primary + read replica' },
    ],
  },
  {
    id: 'event-driven-lead-pipeline',
    index: '02',
    title: 'Event-Driven Lead Processing Pipeline with SQS & Lambda',
    subtitle: 'Decoupling synchronous lead-capture bottlenecks into idempotent, high-concurrency serverless workflows.',
    headlineMetric: '10x Burst Capacity',
    metricContext: 'Zero duplicate leads',
    stack: ['C#', '.NET 8', 'AWS Lambda', 'Amazon SQS', 'EventBridge', 'DynamoDB', 'PostgreSQL'],
    problem:
      'Synchronous HTTP chains spanning web-form ingestion, lead scoring, CRM enrichment, and partner webhook dispatch timed out during marketing campaign spikes. Downstream CRM rate limits cascaded back to the API tier and risked duplicate lead assignments.',
    tradeoffs: [
      'Selected Amazon SQS with Lambda partial-batch failure reporting (ReportBatchItemFailures) instead of synchronous API fan-out, smoothing campaign traffic spikes and isolating third-party CRM rate limits behind controlled queue concurrency.',
      'Implemented deterministic idempotency keys in DynamoDB with conditional writes and a transactional outbox so at-least-once SQS delivery never created duplicate CRM records or double-billed partner webhooks.',
      'Used SQS FIFO message groups partitioned by lead source/account where strict sequencing mattered, paired with EventBridge rules for downstream analytics and automated Dead-Letter Queue (DLQ) replay.',
    ],
    impact: [
      'Absorbed 10x campaign burst throughput without API gateway timeouts or thread-pool exhaustion.',
      'Eliminated duplicate lead mutations via DynamoDB conditional idempotency locks and automated DLQ replay.',
      'Cut end-to-end ingestion p95 response times by returning immediate 202 Accepted acknowledgments while processing enrichment asynchronously.',
    ],
    topology: [
      { step: '01', service: 'ASP.NET Core API', role: 'Validation + 202 Accepted' },
      { step: '02', service: 'Amazon SQS + DLQ', role: 'Buffered backpressure' },
      { step: '03', service: '.NET Lambda Workers', role: 'Partial-batch enrichment' },
      { step: '04', service: 'DynamoDB + CRM Sink', role: 'Idempotent lead routing' },
    ],
  },
  {
    id: 'enterprise-ai-rag',
    index: '03',
    title: 'Enterprise AI Knowledge Assistant using .NET Semantic Kernel & RAG',
    subtitle: 'Grounded internal engineering and policy retrieval with strict IAM boundaries and citation verification.',
    headlineMetric: '65% Faster Triage',
    metricContext: '100% cited responses',
    stack: ['.NET 9', 'Semantic Kernel', 'Amazon Bedrock', 'Gemini API', 'PostgreSQL pgvector', 'ECS'],
    problem:
      'Support and engineering teams spent hours searching across fragmented Confluence runbooks, architectural decision records, and compliance PDFs. Sending internal documents to unmanaged public chat interfaces violated enterprise data governance.',
    tradeoffs: [
      'Built the orchestration service natively in .NET 9 with Microsoft Semantic Kernel instead of standing up a separate Python stack, reusing existing C# auth middleware, telemetry, and CI/CD pipelines.',
      'Enforced pre-retrieval document ACL filtering in PostgreSQL pgvector metadata before context assembly, ensuring users only retrieve chunks they are authorized to read.',
      'Paired Amazon Bedrock VPC-private endpoints with structured Gemini evaluation harnesses for citation accuracy and prompt-injection defense rather than relying on unverified freeform completions.',
    ],
    impact: [
      'Reduced internal runbook lookup and incident triage time by 65% across engineering and operations teams.',
      'Maintained 100% source-document citation traceability with zero ungrounded policy hallucinations in production audits.',
      'Kept all enterprise embeddings and inference traffic inside private VPC boundaries with full audit logging.',
    ],
    topology: [
      { step: '01', service: 'Ingestion Worker', role: 'Chunking + ACL tagging' },
      { step: '02', service: 'RDS pgvector', role: 'Hybrid ACL-scoped search' },
      { step: '03', service: '.NET Semantic Kernel', role: 'Prompt + guardrail chain' },
      { step: '04', service: 'Bedrock / Gemini', role: 'Cited synthesis output' },
    ],
  },
];

export const LIVE_LABS: LabTool[] = [
  {
    id: 'aws-cost-estimator',
    title: 'AWS Cost & Architecture Estimator',
    subtitle: 'Interactive workload sizing comparing AWS Lambda vs. EKS (and ECS/Fargate), RDS & SQS',
    stage: 'Upcoming on gauravkumar-labs',
    description:
      'Model monthly AWS infrastructure trade-offs before writing Terraform. Compare serverless AWS Lambda invocation profiles against containerized AWS EKS clusters (with optional ECS/Fargate), RDS Multi-AZ sizing, and NAT Gateway egress patterns for .NET workloads.',
    capabilities: [
      'Side-by-side AWS Lambda vs. AWS EKS (control plane, EC2/Karpenter nodes) & ECS/Fargate cost curves across RPS profiles',
      'RDS PostgreSQL / SQL Server Multi-AZ, Read Replica, and SQS/NAT Gateway egress estimation',
      'Exportable Terraform variable baselines and portability vs. ops-overhead decision notes',
    ],
    stack: ['React', 'TypeScript', 'AWS Pricing Models', 'Terraform Specs'],
    url: 'https://gauravkumar-labs.vercel.app',
    image: awsEstimatorImg,
    imageAlt: 'Minimalist dark architectural rendering of modular cloud compute blocks and balance plates',
    accent: 'amber',
  },
  {
    id: 'dotnet-code-review',
    title: '.NET Code Review AI Helper',
    subtitle: 'Automated architectural & reliability inspection for C# / ASP.NET Core PRs',
    stage: 'Upcoming on gauravkumar-labs',
    description:
      'Focused static + LLM review assistant tailored for senior .NET standards: detects EF Core N+1 queries, missing CancellationToken propagation, sync-over-async traps, and SQS/API idempotency gaps.',
    capabilities: [
      'Flags EF Core tracking overhead, missing AsNoTracking(), and cartesian split risks',
      'Audits async/await paths for ConfigureAwait, CancellationToken, and HttpClientFactory usage',
      'Generates concrete C# diff suggestions aligned with .NET 8/9 Minimal API patterns',
    ],
    stack: ['.NET 8/9', 'Roslyn AST', 'Semantic Kernel', 'Gemini API'],
    url: 'https://gauravkumar-labs.vercel.app',
    image: dotnetReviewerImg,
    imageAlt: 'Minimalist dark architectural rendering of smoked-glass optical prisms analyzing light rays',
    accent: 'cyan',
  },
];
