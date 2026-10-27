export interface SkillIconItem {
  iconName: string;
  label: string;
}

export const SkillHash = new Map<string, string>();

export const SkillsIcons: SkillIconItem[] = [
  { iconName: "SiGit", label: "Git" },
  { iconName: "SiGithub", label: "GitHub" },
  { iconName: "SiHtml5", label: "HTML" },
  { iconName: "SiCss", label: "CSS" },
  { iconName: "SiJavascript", label: "JavaScript" },
  { iconName: "SiTypescript", label: "TypeScript" },
  { iconName: "SiPython", label: "Python" },
  { iconName: "SiTailwindcss", label: "Tailwindcss" },
  { iconName: "SiNextdotjs", label: "Next.js" },
  { iconName: "SiExpo", label: "Expo" },
  { iconName: "SiReact", label: "React-Native" },
  { iconName: "SiReact", label: "React" },
  { iconName: "SiReactrouter", label: "React-Router" },
  { iconName: "SiReactquery", label: "TanStack-Query" },
  { iconName: "SiRedux", label: "Redux" },
  { iconName: "TbBrandFramerMotion", label: "Motion" },
  { iconName: "SiPydantic", label: "Pydantic" },
  { iconName: "SiNodedotjs", label: "Node.js" },
  { iconName: "SiExpress", label: "Express" },
  { iconName: "SiFastapi", label: "FastApi" },
  { iconName: "SiFirebase", label: "Firebase" },
  { iconName: "SiBetterauth", label: "Betterauth" },
  { iconName: "SiMongodb", label: "MongoDB" },
  { iconName: "SiMongoose", label: "Mongoose" },
  { iconName: "SiPostgresql", label: "Postgresql" },
  { iconName: "SiSqlite", label: "SQLite" },
  { iconName: "SiDocker", label: "Docker" },
  { iconName: "SiClaudecode", label: "Claudecode" },
  { iconName: "SiOpencode", label: "Opencode" },
];

SkillsIcons.forEach((item) => SkillHash.set(item.label, item.iconName));
