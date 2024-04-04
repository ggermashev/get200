const answers = []
const calculated = new Set()

function getResult(nums, result) {
    if (calculated.has(nums)) {
        return
    }
    calculated.add(nums)
    const values = nums.split(/[+-]/)
        .map(val => parseInt(val))
        .map(val => {
            const ind = nums.indexOf(val)
            const sign = nums[ind-1] || null
            return sign === "-" ? -val : val
        })
    const sum = values.reduce((acc, val) => acc + val, 0)
    if (sum === result) {
        answers.push(nums)
    }
    
    for (let i = 0; i < nums.length-1; i++) {
        if (!["+", "-"].includes(nums[i]) && !["+", "-"].includes(nums[i+1])) {
            getResult(nums.substring(0, i+1) + "+" + nums.substring(i+1), result)
            getResult(nums.substring(0, i+1) + "-" + nums.substring(i+1), result)
        }
    }
}

getResult("9876543210", 200)
console.log(answers)