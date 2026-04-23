"use client";

import React, { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";

type Tab = "resume" | "projects";

type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
  role: string;
};

const RESUME_DATA = {
  name: "Nader Ramadan Almohammadi",
  contact: {
    linkedin: "https://www.linkedin.com/in/nader-almohammadi",
    github: "https://github.com/naderalmohammadi"
  },
  education: [
    {
      institution: "Pace University",
      location: "New York, USA",
      degree: "Master of Information Systems",
      gpa: "4.0/4",
      dates: "Jan 2017 – Dec 2018"
    },
    {
      institution: "Taibah University",
      location: "Medina, Saudi Arabia",
      degree: "Bachelor of Information Systems",
      gpa: "4.14/5",
      dates: "Sep 2009 – May 2014"
    }
  ],
  skills: {
    governance: "NCA Controls, Compliance Auditing, Logging and Monitoring, Backups and Recovery",
    technical: "PHP, Laravel, OOP, MVC, Web Apps Vulnerability Protection",
    databases: "MySQL, cPanel, GitHub, IIS Server, Nmap, Metasploit",
    professional: "Project Management, Access Control Management, Security Documentation"
  },
  certifications: [
    "eJPT (Junior Penetration Tester) – Feb 2026",
    "CISSP – Nov 2025",
    "CompTIA Security+ – June 2024",
    "CompTIA Network+ – Feb 2024",
    "Certified in Cybersecurity (CC) – Nov 2023",
    "Laravel 7 for Beginners Practical Course | Udemy – Mar 2021"
  ],
  workExperience: [
    {
      position: "Software Engineer",
      company: "King Fahd Complex for the Printing of the Holy Quran",
      dates: "Feb 2021 – Present",
      responsibilities: [
        "Deputy Director of IT and Computing Department.",
        "Liaison officer for the Digital Government Authority for the Website Efficiency Index.",
        "Implemented cybersecurity requirements and ensured compliance with NCA regulations.",
        "Analyzed operational procedures to reduce technical risks and improve compliance.",
        "Developed secure web systems with access control mechanisms, and reviewed it to ensure alignment with information security policies.",
        "Managed hosting settings and permissions using IIS and CPanel."
      ]
    },
    {
      position: "Programmer",
      company: "Osraty Association",
      dates: "Feb 2019 – Aug 2020",
      responsibilities: [
        "Developed internal systems considering data protection requirements.",
        "Supported the IT specialist in monitoring and maintaining secure systems.",
        "Assessed vulnerabilities on association websites.",
        "Member of the Institutional Excellence Committee contributing to safe digital processes."
      ]
    }
  ],
  projects: [
    {
      name: "Scientific Research Arbitration System",
      status: "Ongoing",
      description: "Developed a secure system for research arbitration in accordance with data protection rules using Laravel."
    },
    {
      name: "Recruitment Portal",
      status: "2022",
      description: "System for managing recruitment requests with secure access and user management controls."
    },
    {
      name: "Visitor Request System",
      status: "2022",
      description: "System to manage visits using Laravel and QR codes with security compliance measures."
    }
  ],
  languages: [
    "Arabic: Native",
    "English: Advanced (TOEFL 94 | Duolingo 125)"
  ]
};

const RESUME_CODE = JSON.stringify(RESUME_DATA, null, 2);

const PROJECTS: Project[] = [
  {
    id: "goodviewer",
    title: "GoodViewer",
    description: "A PHP-based application for viewing content.",
    url: "https://github.com/naderalmohammadi/GoodViewer",
    tech: ["PHP"],
    role: "Developer",
  },
  {
    id: "karma",
    title: "Karma",
    description: "A PHP project focused on application development.",
    url: "https://github.com/naderalmohammadi/Karma",
    tech: ["PHP"],
    role: "Developer",
  },
  {
    id: "mvc",
    title: "MVC",
    description: "MVC model implementation in PHP.",
    url: "https://github.com/naderalmohammadi/MVC",
    tech: ["PHP"],
    role: "Developer",
  },
  {
    id: "myhobbies",
    title: "MyHobbies",
    description: "Laravel lesson project from Udemy course.",
    url: "https://github.com/naderalmohammadi/MyHobbies",
    tech: ["PHP", "Laravel"],
    role: "Developer",
  },
  {
    id: "naqra",
    title: "Naqra",
    description: "A PHP-based application project.",
    url: "https://github.com/naderalmohammadi/naqra",
    tech: ["PHP"],
    role: "Developer",
  },
  {
    id: "stopwatch",
    title: "StopWatch JavaScript",
    description: "Stopwatch application built using JavaScript.",
    url: "https://github.com/naderalmohammadi/stopWatch_javascript",
    tech: ["JavaScript"],
    role: "Developer",
  },
];

export default function PortfolioPage() {
  const [tab, setTab] = useState<Tab>("projects");

  const tabs = useMemo(
    () => [
      { key: "resume" as Tab, label: "Resume" },
      { key: "projects" as Tab, label: "Projects" },
    ],
    [],
  );

  return (
    <div style={styles.page}>
      <Header />

      <Tabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "resume" ? (
        <CodeViewer code={RESUME_CODE} />
      ) : (
        <ProjectsList projects={PROJECTS} />
      )}
    </div>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Nader Almohammadi</h1>
      <p style={styles.subtitle}>Full Stack Developer</p>
    </header>
  );
}

function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: { key: Tab; label: string }[];
  active: Tab;
  onChange: (t: Tab) => void;
}) {
  return (
    <div style={styles.tabs}>
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          style={{
            ...styles.tab,
            ...(active === t.key ? styles.tabActive : {}),
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div>
          <h3 style={styles.cardTitle}>{project.title}</h3>
          <p style={styles.role}>{project.role}</p>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconButton}
          aria-label="Visit project"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      <p style={styles.desc}>{project.description}</p>

      <div style={styles.tags}>
        {project.tech.map((t) => (
          <span key={t} style={styles.tag}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function CodeViewer({ code }: { code: string }) {
  return (
    <div style={styles.codeBox}>
      <pre style={styles.code}>{code}</pre>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { maxWidth: 800, margin: "0 auto", padding: 20 },

  header: { marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 700 },
  subtitle: { color: "#666" },

  tabs: { display: "flex", gap: 10, marginBottom: 20 },
  tab: {
    padding: "8px 16px",
    border: "none",
    cursor: "pointer",
    background: "#e0e0e0",
    borderRadius: 6,
  },
  tabActive: { background: "#000", color: "#fff" },

  card: {
    border: "1px solid #ddd",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    background: "#fff",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: { fontSize: 18, fontWeight: 600 },
  role: { fontSize: 12, color: "#666" },

  desc: { marginBottom: 10, color: "#444" },

  iconButton: {
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    border: "1px solid #ddd",
    background: "#fff",
    color: "#333",
    cursor: "pointer",
  },

  tags: { display: "flex", gap: 6, flexWrap: "wrap" },
  tag: {
    background: "#f2f2f2",
    padding: "4px 10px",
    borderRadius: 12,
    fontSize: 12,
  },

  codeBox: {
    background: "#111",
    color: "#0f0",
    padding: 12,
    borderRadius: 8,
  },
  code: {
    fontSize: 12,
    overflowX: "auto",
    margin: 0,
  },

  resumeContainer: {
    border: "1px solid #ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  resumeIframe: {
    border: "none",
  },
};
