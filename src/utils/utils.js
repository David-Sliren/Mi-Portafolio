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

export { utils };
