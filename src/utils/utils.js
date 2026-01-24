function utils({ url, value }) {
  const tranform = Object.values(url);
  const personId = new Date().getMilliseconds() + "Portfolio";
  const data = tranform?.map((item, i) => ({
    id: i + personId,
    name: value[i],
    url: item.default,
  }));

  return data;
}

function utilsUnion({ union, organize }) {
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
