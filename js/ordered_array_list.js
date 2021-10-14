class OrderedArrayList extends ArrayList {
  append(value) {
    this._checkValue(value);
    let index = 0;
    while (this.data[index] < value && index < this.data.length) {
      index++;
    }
    this.data.splice(index, 0, value);
  }

  insert(position, value) {
    throw new Error("Indisponível na lista ordenada");
  }
}
