export const SkillHash = new Map();

export const SkillsIcons = [
  { iconName: "SiHtml5", label: "HTML" },
  { iconName: "SiCss", label: "CSS" },
  { iconName: "SiJavascript", label: "JavaScrpit" },
  { iconName: "SiTypescript", label: "TypeScrpit" },
  { iconName: "SiTailwindcss", label: "Tailwindcss" },
  { iconName: "SiNextdotjs", label: "Next js" },
  { iconName: "SiReact", label: "React" },
  { iconName: "SiReact", label: "React-Native" },
  { iconName: "SiReactrouter", label: "React-Router" },
  { iconName: "SiReactquery", label: "TanStack-Query" },
  { iconName: "SiRedux", label: "Redux" },
  { iconName: "TbBrandFramerMotion", label: "Motion" },
  { iconName: "SiExpo", label: "Expo" },
  { iconName: "SiFirebase", label: "Firebase" },
  { iconName: "SiNodedotjs", label: "Node js" },
  { iconName: "SiExpress", label: "Express" },
  { iconName: "SiMongodb", label: "MongoDB" },
  { iconName: "SiMongoose", label: "Mongoose" },
];

SkillsIcons.forEach((item) => SkillHash.set(item.label, item.iconName));
