const chainMaker = {

  links: [],
  
  getLength() {
    return this.links.length;
  },

  addLink(value = "()") {
    this.links.push(value);
    return this;
  },

  removeLink(position) {
    if (Number(position) <= 0 || Number(position) > this.links.length || typeof position === "string")
    {
        this.links = [];
        throw new Error('Invalid position value');
    }
    this.links.splice(position - 1, 1);
    return this;
},

  reverseChain() {
    this.links = this.links.reverse();
    return this
  },

  finishChain() {
    const values = this.links;
    this.links = [];
    let result = values.map((value) => {
      return `( ${value} )`;
    });
    return result.join('~~');
  }
}

module.exports = chainMaker;
