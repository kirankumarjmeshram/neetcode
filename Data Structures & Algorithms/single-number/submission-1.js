class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let singleNum = 0;
        for(let num of nums) {
            singleNum^=num
        }
        return singleNum;
    }
}
