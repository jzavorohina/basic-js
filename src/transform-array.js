module.exports = function transform(arr) {
    let transformedArr = [];
    if (!Array.isArray(arr)) throw new Error();
    if (!arr.length) return transformedArr;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--double-prev") {
            arr[i - 1] !== undefined ? transformedArr.push(arr[i - 1]) : null;
        } else if (arr[i] === "--double-next") {
            arr[i + 1] !== undefined ? transformedArr.push(arr[i + 1]) : null;
        } else if (arr[i] === "--discard-prev") {
            arr[i - 1] !== undefined ? transformedArr.pop() : null;
        } else if (arr[i] === "--discard-next") {
            i++;
        } else {
            transformedArr.push(arr[i]);
        }
    }
    return transformedArr;
};
