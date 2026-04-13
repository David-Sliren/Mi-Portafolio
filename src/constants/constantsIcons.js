export const SkillHash = new Map();

export const SkillsIcons = [
  { iconName: "SiHtml5", label: "HTML" },
  { iconName: "SiCss", label: "CSS" },
  { iconName: "SiJavascript", label: "JavaScrpit" },
  { iconName: "SiTailwindcss", label: "Tailwindcss" },
  { iconName: "SiReact", label: "React" },
  { iconName: "SiReact", label: "React-Native" },
  { iconName: "SiReactrouter", label: "React-Router" },
  { iconName: "SiReactquery", label: "TanStack-Query" },
  { iconName: "TbBrandFramerMotion", label: "Motion" },
  { iconName: "SiFirebase", label: "Firebase" },
  { iconName: "SiExpo", label: "Expo" },
  { iconName: "SiNodedotjs", label: "Node js" },
  { iconName: "SiExpress", label: "Express" },
];

SkillsIcons.forEach((item) => SkillHash.set(item.label, item.iconName));
