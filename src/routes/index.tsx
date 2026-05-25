import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "@/assets/portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gili Faibish — Cloud Architect · DevOps · SRE" },
      {
        name: "description",
        content:
          "Gili Faibish — Cloud Architect, DevOps Engineer & SRE. 6+ years building AWS, Kubernetes and VMware platforms with Terraform, CI/CD and observability.",
      },
      { property: "og:title", content: "Gili Faibish — Cloud Architect · DevOps · SRE" },
      {
        property: "og:description",
        content:
          "Cloud Architect & DevOps Engineer specializing in AWS, Kubernetes, Terraform and Platform Engineering.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "top", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export function Index() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold tracking-tight text-lg">
          <span className="text-accent">{"<"}</span>GF<span className="text-accent">{"/>"}</span>
        </a>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex md:hidden gap-4 text-xs">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-muted-foreground hover:text-accent">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function FlipName() {
  const words = ["Gili Faibish", "@GiliFaibish1999"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      key={i}
      className="text-accent inline-block animate-in fade-in slide-in-from-bottom-2 duration-500"
    >
      {words[i]}
    </span>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative grid-bg min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="relative mb-10">
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl scale-110" />
          <img
            src={portrait}
            alt="Gili Faibish"
            className="relative w-56 md:w-72 h-auto object-contain drop-shadow-[0_0_30px_rgba(39,159,245,0.5)]"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Hi, I am <FlipName />
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">Cloud Architect</span>,{" "}
          <span className="text-foreground font-medium">DevOps Engineer</span> &{" "}
          <span className="text-foreground font-medium">SRE</span> with a B.Sc. in Computer Science
          and 6+ years building, automating and operating production infrastructure across{" "}
          <span className="text-accent">AWS</span>,{" "}
          <span className="text-accent">Kubernetes</span> and{" "}
          <span className="text-accent">VMware</span>. Specializing in Terraform IaC, CI/CD,
          observability, networking, security and platform reliability.
        </p>

        <div className="mt-10 grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-4 w-full max-w-2xl">
          <ActionButton href="/Gili_Faibish_Resume_2026.pdf" label="Resume" icon="resume" download />
          <ActionButton href="mailto:gilifaibishpro@gmail.com" label="Email" icon="email" />
          <ActionButton
            href="https://www.linkedin.com/in/gili-faibish-devops-automation/"
            label="LinkedIn"
            icon="linkedin"
          />
          <ActionButton
            href="https://github.com/GiliFaibish1999"
            label="GitHub"
            icon="github"
          />
        </div>
      </div>
    </section>
  );
}

function ActionButton({
  href,
  label,
  icon,
  download,
}: {
  href: string;
  label: string;
  icon: "resume" | "email" | "linkedin" | "github";
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      download={download}
      className="group flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-accent/60 bg-accent/10 hover:bg-accent hover:text-primary-foreground px-5 py-3 text-sm font-semibold transition-all hover:shadow-glow hover:-translate-y-0.5"
    >
      <Icon name={icon} className="w-4 h-4" />
      {label}
    </a>
  );
}

function Icon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "resume":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
        </svg>
      );
    case "email":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 5L2 7" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 17V10H6v7zM7.17 8.92a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72zM18 17v-3.83c0-2.05-1.1-3-2.56-3-1.18 0-1.71.65-2 1.11V10H11.1V17h2.34v-3.91c0-.21.02-.42.08-.57.17-.42.55-.85 1.2-.85.85 0 1.19.64 1.19 1.59V17z" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.97-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.27 5.7.41.36.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
        </svg>
      );
    default:
      return null;
  }
}

function Section({
  id,
  title,
  children,
  alt,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-24 px-6 ${alt ? "bg-card/50" : ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          {title.split(" ")[0]}{" "}
          <span className="text-accent">{title.split(" ").slice(1).join(" ")}</span>
        </h2>
        <div className="mx-auto h-1 w-20 rounded bg-accent mb-12" />
        {children}
      </div>
    </section>
  );
}


const EXPERIENCES = [
  {
    role: "System Architect / DevOps / Infrastructure Engineer",
    company: "Danjo Consulting — Freelance",
    period: "Jul 2025 — Present",
    points: [
      "Design and automate on-prem VMware vSphere/ESXi with reusable Terraform modules for datacenter, networking and VM provisioning.",
      "Build segmented architectures with separated Kubernetes, database and firewall zones using least-privilege routing.",
      "Containerize apps with Docker + Gunicorn on Kubernetes; build GitHub Actions CI/CD that deploys and verifies workloads.",
      "Implement observability with Prometheus + Grafana, health probes, structured logging and runbooks.",
      "Build security features: RBAC, honeypot login flows, audit logging, K8s Secrets and NetworkPolicies.",
    ],
  },
  {
    role: "Cloud Architect / DevOps Engineer / SRE",
    company: "AB Tasty — Paris",
    period: "Jul 2024 — Mar 2025",
    points: [
      "Replaced EKS-based dynamic server with serverless CloudFront + Lambda@Edge — cut ops cost ~90% and improved load time ~60%.",
      "Designed real-time prod→non-prod data replication with Lambda + SQS + DynamoDB Streams across regions.",
      "Built AWS Organization Health monitoring & alerting (Delegated Health Admin + Lambda + EventBridge + S3 + Slack).",
      "Architected event-driven release notifications (EventBridge + SQS + Lambda + DynamoDB GSI + Slack + Mandrill).",
      "Led company-wide AWS Organization & SSO rollout via a custom Terraform AWS SSO module.",
      "FinOps: cut monthly AWS spend ~30% via billing reviews and right-sizing.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Danjo Consulting — Freelance",
    period: "Apr 2023 — Jun 2024",
    points: ["GCP data migration; NetSuite development and automation."],
  },
  {
    role: "DevOps Engineer / DevSecOps",
    company: "Checkmarx — AST DevOps team",
    period: "Apr 2022 — Apr 2023",
    points: [
      "Provisioned AWS (EC2, S3, RDS, Lambda, VPC) and Kubernetes with Terraform; designed IAM policies & roles.",
      "Implemented DevSecOps controls across pipelines: encryption, IAM design and vulnerability assessments.",
      "Built CI/CD pipelines with CircleCI, GitHub Actions, JFrog, Helm and Kubernetes.",
      "Built backoffice CI from scratch with Keycloak SSO.",
      "Built custom Prometheus port-based Unix monitoring with PromQL dashboards and am-executor auto-remediation.",
    ],
  },
  {
    role: "Automation Developer",
    company: "Dot Compliance — Industry QMS",
    period: "Mar 2021 — Oct 2021",
    points: ["Java automation scripts from scratch; Salesforce platform testing."],
  },
  {
    role: "Automation Developer / Junior DevOps",
    company: "IDF — Cyber Unit (Mazpen, DevOps Dept)",
    period: "2017 — 2019",
    points: [
      "Built Java automation infrastructure for ELK using Java and LeanFT; API tests with Postman.",
      "Automated CI/CD on Git with Jenkins + Docker; orchestrated containers with Kubernetes.",
      "Supported top-secret projects (Classification level 2); trained staff on security and DevOps.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" title="My Experience" alt>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-12">
          {EXPERIENCES.map((e, i) => (
            <div
              key={i}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-accent shadow-glow" />
              <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                <p className="text-accent text-sm font-mono">{e.period}</p>
                <h3 className="text-xl font-bold mt-1">{e.role}</h3>
                <p className="text-muted-foreground">{e.company}</p>
              </div>
              <div className="pl-12 md:pl-12 mt-3 md:mt-0">
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {e.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

type Skill = { name: string; slug?: string; color?: string; iconUrl?: string };
const SKILLS: { category: string; items: Skill[] }[] = [
  {
    category: "Cloud & Serverless",
    items: [
      { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "GCP", slug: "googlecloud", color: "4285F4" },
      { name: "Lambda" },
      { name: "CloudFront" },
      { name: "DynamoDB" },
      { name: "S3" },
    ],
  },
  {
    category: "Containers & Kubernetes",
    items: [
      { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
      { name: "Helm", slug: "helm", color: "0F1689" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "EKS" },
    ],
  },
  {
    category: "IaC & CI/CD",
    items: [
      { name: "Terraform", slug: "terraform", color: "7B42BC" },
      { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
      { name: "GitLab CI", slug: "gitlab", color: "FC6D26" },
      { name: "CircleCI", slug: "circleci", color: "343434" },
      { name: "Jenkins", slug: "jenkins", color: "D24939" },
      { name: "JFrog", slug: "jfrog", color: "41BF47" },
    ],
  },
  {
    category: "Observability & Security",
    items: [
      { name: "Prometheus", slug: "prometheus", color: "E6522C" },
      { name: "Grafana", slug: "grafana", color: "F46800" },
      { name: "Keycloak", slug: "keycloak", color: "4D4D4D" },
      { name: "Nginx", slug: "nginx", color: "009639" },
      { name: "Traefik", slug: "traefikproxy", color: "24A1C1" },
    ],
  },
  {
    category: "Languages & DB",
    items: [
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "Bash", slug: "gnubash", color: "4EAA25" },
      { name: "Go", slug: "go", color: "00ADD8" },
      { name: "Java", slug: "openjdk", color: "ED8B00" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
    ],
  },
  {
    category: "OS & Tooling",
    items: [
      { name: "Linux", slug: "linux", color: "FCC624" },
      { name: "VMware", slug: "vmware", color: "607078" },
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "FFFFFF" },
      { name: "Postman", slug: "postman", color: "FF6C37" },
    ],
  },
];

function Skills() {
  return (
    <Section id="skills" title="My Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((g) => (
          <div
            key={g.category}
            className="rounded-2xl border border-border bg-card/60 p-6 hover:border-accent/60 transition-colors"
          >
            <h3 className="font-semibold text-lg mb-4 text-accent">{g.category}</h3>
            <div className="flex flex-wrap gap-3">
              {g.items.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1.5 text-xs hover:border-accent transition-colors"
                >
                  {(s.iconUrl || s.slug) && (
                    <img
                      src={s.iconUrl || `https://cdn.simpleicons.org/${s.slug}/${s.color ?? "279FF5"}`}
                      alt={s.name}
                      className="w-4 h-4"
                      loading="lazy"
                    />
                  )}
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const PROJECTS = [
  {
    name: "vmware-on-prem-network",
    desc: "Full VMware vSphere/ESXi lab built with custom Terraform modules: segmented VLANs, firewall routing, Kubernetes, PostgreSQL, ops VM, and a Flask RBAC honeypot app.",
    tags: ["Terraform", "VMware", "Kubernetes", "Networking"],
  },
  {
    name: "kube-chaos",
    desc: "Troubleshooting guide & lab covering real K8s failures: CrashLoopBackOff, ImagePullBackOff, scheduling and NetworkPolicy issues — with runbooks.",
    tags: ["Kubernetes", "SRE", "Runbooks"],
  },
  {
    name: "aws-org-health",
    desc: "Cross-account AWS Organization Health monitoring: Lambda + EventBridge Scheduler + S3 state + KMS + Secrets Manager + Slack alerts.",
    tags: ["AWS", "Lambda", "Terraform", "Slack"],
  },
  {
    name: "aws-sso",
    desc: "Terraform module for AWS IAM Identity Center / SSO: users, groups, accounts and permission sets at organization scale.",
    tags: ["Terraform", "AWS IAM", "SSO"],
  },
  {
    name: "hp-microservices",
    desc: "Microservices on Kubernetes: Flask + MySQL + SQLite PVC, Secrets, Ingress, network isolation and HPA autoscaling.",
    tags: ["Kubernetes", "Flask", "MySQL", "HPA"],
  },
  {
    name: "aws-dynamic-widget-cdn",
    desc: "Serverless dynamic widget CDN: CloudFront + Lambda@Edge with caching, CORS handling, Route53, ACM — pattern that cut prod costs 90%.",
    tags: ["CloudFront", "Lambda@Edge", "Terraform"],
  },
  {
    name: "kind-java",
    desc: "Multi-node Kind cluster with Java backend, Nginx frontend, Traefik Gateway API, Prometheus and Grafana.",
    tags: ["Kind", "Java", "Traefik", "Grafana"],
  },
  {
    name: "aws-release-notifications-system",
    desc: "Event-driven release notifier: EventBridge + SQS + Lambda + DynamoDB (GSI) + Slack + email.",
    tags: ["EventBridge", "SQS", "DynamoDB", "Lambda"],
  },
  {
    name: "flask-rbac-tictactoe-k8s",
    desc: "Flask RBAC app on Kubernetes with PostgreSQL, Prometheus metrics, health probes and honeypot login monitoring.",
    tags: ["Flask", "K8s", "RBAC", "Prometheus"],
  },
  {
    name: "nginx-minikube",
    desc: "GitHub Actions pipeline: builds Docker images, pushes to Minikube registry, updates Helm values, deploys Nginx and verifies workload.",
    tags: ["GitHub Actions", "Minikube", "Helm", "Nginx"],
  },
];

function Projects() {
  return (
    <Section id="projects" title="Recent Projects" alt>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={`https://github.com/GiliFaibish1999/${p.name}`}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-card/60 p-6 hover:border-accent hover:-translate-y-1 hover:shadow-glow transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <Icon name="github" className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </div>
            <h3 className="font-bold text-base mb-2 break-all group-hover:text-accent transition-colors">
              {p.name}
            </h3>
            <p className="text-sm text-muted-foreground flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-medium px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} Gili Faibish · Built with TanStack Start ·{" "}
        <a href="#top" className="text-accent hover:underline">Back to top</a>
      </p>
    </footer>
  );
}
