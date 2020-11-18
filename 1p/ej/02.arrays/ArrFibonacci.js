function arrfibonacci(num)
    {
        let nums=[0,1];
        for (let i = 2; i < num; i++) {
            nums[i] = nums[i - 2] + nums[i - 1];
        }
        return nums;
    }
    console.log(arrfibonacci(10));