class Grid {
  cells = {};
  items = [];
  constructor(nW = 10, nH = 10) {
    this.nW = nW;
    this.nH = nH;

    for (let i = 0; i < this.nW; i++) {
      for (let j = 0; j < this.nH; j++) {
        this.cells[`[${i},${j}]`] = 0;
      }
    }
  }

  getItem = i => this.items[i];

  addItem = item => {
    const { type, start, end } = item;
    console.log(`ADDED: ${type}, ${start}, ${end}`);
    this.items.push(item);
  };
}
