class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let ans =[]
        for(let i=0;i<=n;i++){
            ans.push(this.helperfn(i))
        }
        return ans;
    }

    helperfn (num){
        let count = 0;
        for(let i=0;i<32;i++) {
            if(num & (1<<i)){
                count++;
            }
        }
        return count;
    }
}
