class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subSets =[[]];
        for(let num of nums){
            let length = subSets.length;
            for(let i=0;i<length;i++){
                let subSetEle = subSets[i]
                subSets.push([...subSetEle,num])
            }
        }
        return subSets;
    }
}
