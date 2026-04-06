type StartEndTitle = {
  name: string;
  start: string;
  end: string;
};

type PeriodTitle = {
  name: string;
  period: string;
};

export type ExperienceTitle = StartEndTitle | PeriodTitle;

export type Experience = {
  titles: ExperienceTitle[];
  techs: string[];
  summaries: string[];
};

export const experience: Experience[] = [
  {
    titles: [{ name: "Senior Developer", start: "2025", end: "Current" }],
    techs: [
      "C#",
      ".NET",
      "AI",
      "Angular",
      "Typescript",
      "ASP.NET Core",
      "EF Core",
      "Dapper",
      "SQL Server",
      "Azure",
      "DevOps",
      "GitHub",
      "CI/CD",
    ],
    summaries: [
      "Improving observability and traceability across solutions",
      "Solving complex problems to support smooth operations across the business",
      "Proactively identifying and resolving pain points in the developer experience",
      "Modernising technology usage and adoption to improve velocity",
      "Mentoring other developers and providing valuable, constructive feedback",
      "Fostering a culture of collaboration and continued personal improvement",
    ],
  },
  {
    titles: [
      { name: "Principal Software Engineer", start: "2024", end: "2025" },
      { name: "Senior Developer", start: "2023", end: "2024" },
      { name: "Developer", start: "2021", end: "2023" },
      { name: "Junior Developer", start: "2021", end: "2021" },
    ],
    techs: [
      "C#",
      ".NET",
      "Blazor",
      "ASP.NET Core",
      "EF Core",
      "Azure",
      "DevOps",
      "SQL Server",
      "React",
      "CI/CD",
    ],
    summaries: [
      "Set multi-year strategies in line with tech requirements and business goals",
      "Defined best practices and standards for non-functional requirements",
      "Supported hiring efforts for new engineers, from junior through to senior",
      "Provided mentoring, constructive feedback, and assistance for engineers",
      "Consistently owned the delivery of large-scale projects and changes",
    ],
  },
  {
    titles: [{ name: "Graduate Developer", start: "2020", end: "2021" }],
    techs: ["Python", "SQL Server", "VBA", "PowerShell"],
    summaries: [
      "Abstracted existing embedded software to run in a Python simulation, enabling engineers to rapidly prototype changes to the product's control code",
      "Optimised their database, unlocking up to 100x performance on large queries",
    ],
  },
  {
    titles: [{ name: "1st Class BSc (Hons) in Computer Science", start: "2017", end: "2020" }],
    techs: ["Cryptography", "ARM x64 Assembly", "Maths", "Formal software verification", "Bioinformatics"],
    summaries: [],
  },
  {
    titles: [{ name: "Placement Developer", period: "Summer 2019" }],
    techs: ["C#", ".NET", "Azure", "ASP.NET Core", "Blazor", "EF Core", "SQL Server", "VBA", "Access"],
    summaries: [
      "Developed company-wide internal web system in Blazor, deployed to Azure",
      "Modernised a 20+ year old Access/VB system, porting it to SQL Server",
    ],
  },
  {
    titles: [{ name: "Placement Developer", period: "Summer 2018" }],
    techs: ["C#", ".NET", "WPF", "ASP.NET Core", "EF Core", "SQL Server"],
    summaries: [
      "Developed desktop application in C# and WPF, with an ASP.NET Core/EF API",
      "Met with internal stakeholders to identify and prioritise business requirements",
    ],
  },
  {
    titles: [{ name: "Service Desk Analyst", period: "Summer 2017" }],
    techs: ["Python", "Service desk", "Active Directory"],
    summaries: [
      "Developed a bespoke application to vastly improve Knowledge Base access",
      "Managed Windows systems and administered their Active Directory",
    ],
  },
];
