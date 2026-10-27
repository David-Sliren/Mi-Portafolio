interface UtilsParams {
  url: Record<string, { default: string }>;
  value: string[];
}

interface UtilsItem {
  id: string;
  name: string;
  url: string;
}

function utils({ url, value }: UtilsParams): UtilsItem[] {
  const tranform = Object.values(url);
  const personId = new Date().getMilliseconds() + "Portfolio";
  const data = tranform?.map((item, i) => ({
    id: i + personId,
    name: value[i],
    url: item.default,
  }));

  return data;
}

interface UtilsUnionParams<T> {
  union: Record<string, { default: string }>;
  organize: T[];
}

function utilsUnion<T extends Record<string, unknown>>({ union, organize }: UtilsUnionParams<T>): (T & { src: string })[] {
  const imgRegular = Object.values(union)
    .map((item) => item.default)
    .reverse();

  const projects = organize.map((item, i) => ({
    ...item,
    src: imgRegular[i],
  }));

  return projects;
}

export { utils, utilsUnion };
