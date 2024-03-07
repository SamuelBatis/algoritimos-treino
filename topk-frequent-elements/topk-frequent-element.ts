function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const frequencyArray: number[][] = Array.from(frequencyMap.entries());
    
    frequencyArray.sort((a, b) => b[1] - a[1]);
    const result: number[] = [];
    for (let i = 0; i < k; i++) {
        result.push(frequencyArray[i][0]);
    }

    return result;
};
