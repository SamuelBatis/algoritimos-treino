function isAnagram(s: string, t: string): boolean {
  let arr1 = s.split("").sort();
  let arr2 = t.split("").sort();

  if (arr1.toString() === arr2.toString()) {
    return true;
  }
  return false;
}
