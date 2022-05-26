function solution(nums){
    if (nums == null || nums.length < 1) {
      return []
    } else {
      return nums.sort((a,b) => a-b)
    }
  }