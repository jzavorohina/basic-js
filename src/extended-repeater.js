module.exports = function repeater(str, options) {

    if (!options) options = {};
    if (typeof str !== 'string') str = String(str);
    if (options.hasOwnProperty('addition') && typeof options.addition !== 'string') {
      options.addition = String(options.addition);
    }
    const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
    const separator = options.separator !== undefined ? options.separator : "+";
    const addition = options.addition !== undefined ? options.addition : "";
    const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
    const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : "|";
  
    let additionArr = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(addition);
    }
    const resultAddition = additionArr.join(additionSeparator);
  
    let resultArr = [];
    for (let i = 0; i < repeatTimes; i++) {
      resultArr.push(`${str}${resultAddition}`);
    }
    const resultString = resultArr.join(separator);
  
    return resultString;
    
};
