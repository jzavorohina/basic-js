module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        }
        let arrDepth = 1;
        for (let value of arr) {
            if (Array.isArray(value)) {
                const depth = this.calculateDepth(value);
                arrDepth = Math.max(depth + 1, arrDepth);
            }
        }
        return arrDepth;
    }
};
