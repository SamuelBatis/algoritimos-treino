function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer: number[] = new Array(n);

  // Calculate prefix products
  const prefixProducts: number[] = new Array(n);
  prefixProducts[0] = 1;
  for (let i = 1; i < n; i++) {
    prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1];
  }

  // Calculate suffix products
  const suffixProducts: number[] = new Array(n);
  suffixProducts[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffixProducts[i] = suffixProducts[i + 1] * nums[i + 1];
  }

  // Multiply prefix and suffix products to get the answer
  for (let i = 0; i < n; i++) {
    answer[i] = prefixProducts[i] * suffixProducts[i];
  }

  return answer;
}
