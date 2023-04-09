class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRED_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96; // Gives the position of alphabets. Any between from 1 to 26.
      total = (total * WEIRED_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  //  We are adding the  key value pair using separate chaining method to
  // avoid collision. So each key value pair is added to an array which is the
  // value for hask key.
  set(key, value) {
    let hashKey = this._hash(key);
    if (!this.keyMap[hashKey]) {
      this.keyMap[hashKey] = [];
    }
    this.keyMap[hashKey].push([key, value]);
    return true;
  }

  get(key) {
    let hashKey = this._hash(key);
    let hashValue = this.keyMap[hashKey];
    if (hashValue) {
      for (let arr of hashValue) {
        if (arr[0] === key) {
          return arr[1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let entry of this.keyMap) {
      if (entry) {
        for (let arr of entry) {
          if (!keys.includes(arr[0])) {
            keys.push(arr[0]);
          }
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let entry of this.keyMap) {
      if (entry) {
        for (let arr of entry) {
          if (!values.includes(arr[1])) {
            values.push(arr[1]);
          }
        }
      }
    }
    return values;
  }
}

let ht = new HashTable();
ht.set("red", "1");
ht.set("green", "2");
ht.set("blue", "3");
ht.set("yellow", "4");
ht.set("orange", "5");

ht.keys().forEach((key) => {
  console.log(key, ht.get(key));
});
