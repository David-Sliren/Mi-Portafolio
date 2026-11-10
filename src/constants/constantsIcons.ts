import { IconType } from "react-icons";
import type { Locale } from "../i18n/routing";

export type { Locale };
export type Localized<T> = Record<Locale, T>;import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiReactrouter,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiPydantic,
  SiBetterauth,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiRedux,
  SiReactquery,
  SiZod,
  SiReacthookform,
  SiVitest,
  SiPytest,
  SiGit,
  SiGithub,
  SiDocker,
  SiClaudecode,
  SiOpencode,
} from "react-icons/si";

import {
  TbBrandReactNative,
  TbBrandFramerMotion,
  TbDatabaseCog,
  TbPaw,
  TbMasksTheater,
} from "react-icons/tb";

export interface Skill {
  label: string;
  icon: IconType;
}

export interface SkillCategory {
  title: Localized<string>;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: { es: "Frontend", en: "Frontend" },
    skills: [
      { label: "HTML", icon: SiHtml5 },
      { label: "CSS", icon: SiCss },
      { label: "JavaScript", icon: SiJavascript },
      { label: "TypeScript", icon: SiTypescript },
      { label: "React", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "React Native", icon: TbBrandReactNative },
      { label: "Expo", icon: SiExpo },
      { label: "React Router", icon: SiReactrouter },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Motion", icon: TbBrandFramerMotion },
      { label: "Vite", icon: SiVite },
    ],
  },
  {
    title: { es: "Backend", en: "Backend" },
    skills: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express", icon: SiExpress },
      { label: "Python", icon: SiPython },
      { label: "FastAPI", icon: SiFastapi },
      { label: "Pydantic", icon: SiPydantic },
      { label: "Better Auth", icon: SiBetterauth },
    ],
  },
  {
    title: { es: "Bases de datos", en: "Databases" },
    skills: [
      { label: "MongoDB", icon: SiMongodb },
      { label: "Mongoose", icon: SiMongoose },
      { label: "Beanie", icon: TbDatabaseCog },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "SQLite", icon: SiSqlite },
      { label: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: { es: "Estado y validación", en: "State and validation" },
    skills: [
      { label: "Zustand", icon: TbPaw },
      { label: "Redux", icon: SiRedux },
      { label: "TanStack Query", icon: SiReactquery },
      { label: "Zod", icon: SiZod },
      { label: "React Hook Form", icon: SiReacthookform },
    ],
  },
  {
    title: { es: "Testing", en: "Testing" },
    skills: [
      { label: "Vitest", icon: SiVitest },
      { label: "Playwright", icon: TbMasksTheater },
      { label: "Pytest", icon: SiPytest },
    ],
  },
  {
    title: { es: "Herramientas", en: "Tools" },
    skills: [
      { label: "Git", icon: SiGit },
      { label: "GitHub", icon: SiGithub },
      { label: "Docker", icon: SiDocker },
      { label: "Claude Code", icon: SiClaudecode },
      { label: "OpenCode", icon: SiOpencode },
    ],
  },
];

export const fullSkill: Skill[] = skillCategories.flatMap(
  (item) => item.skills,
);
