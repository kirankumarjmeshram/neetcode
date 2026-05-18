class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let n = matrix.length;
        const ans = Array.from({ length :n }, ()=> Array(n).fill(0));
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++) {
                ans[j][n-1-i] = matrix[i][j]
            }
        }
        
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++) {
                matrix[i][j] = ans[i][j]
            }
        }
    }
}
