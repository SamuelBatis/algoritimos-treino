function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();

  for (const str of strs) {
    const sort = str.split("").sort().join("");
    const values = map.get(sort) || [];

    map.set(sort, values.concat(str));
  }

  return [...map.values()];
}
