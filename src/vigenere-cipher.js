class VigenereCipheringMachine {
    machineType;
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    constructor(directMachine = true) {
      this.machineType = directMachine ? 'direct' : 'reverse';
    }
  
    encrypt(message, key) {
      if (!message || !key) throw new Error('invalid argument');
      message = message.toUpperCase().split("");
      key = key.toUpperCase();
      let result = [];
      let keywordIndex = 0;
  
      message.forEach(char => {
        if (this.alphabet.indexOf(char) > -1) {
          let charIndex =
            (this.alphabet.indexOf(char) + this.alphabet.indexOf(key[keywordIndex])) %
            this.alphabet.length;
  
          result.push(this.alphabet[charIndex]);
          keywordIndex++;
        } else {
          result.push(char);
        }
        if (keywordIndex === key.length) keywordIndex = 0;
      });
  
      return (this.machineType === 'direct' ? result : result.reverse()).join("");
    }
  
    decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) throw new Error('invalid argument');
      encryptedMessage = encryptedMessage.toUpperCase().split("");
      key = key.toUpperCase();
      let result = [];
      let keywordIndex = 0;
  
      encryptedMessage.forEach(char => {
        if (this.alphabet.indexOf(char) > -1) {
          let charIndex =
            (this.alphabet.indexOf(char) +
              this.alphabet.length -
              this.alphabet.indexOf(key[keywordIndex])) %
            this.alphabet.length;
  
          result.push(this.alphabet[charIndex]);
          keywordIndex++;
        } else {
          result.push(char);
        }
        if (keywordIndex === key.length) keywordIndex = 0;
      });
  
      return (this.machineType === 'direct' ? result : result.reverse()).join("");
    }
}

module.exports = VigenereCipheringMachine;
