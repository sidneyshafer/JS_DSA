class HashTable {
    constructor(size=17) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    //SET:
        // 1). Accepts a key and a value
        // 2). Hashes the key
        // 3). Stores the key-value pair in the hash table array via separate chaining
    set(key, value) {
        let index = (this._hash(key) * -1);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    //GET:
        // 1). Accepts a key
        // 2). Hashes the key
        // 3). Retrieves the key-value pair in the hash table
        // 4). If the key is not found, return 'undefined'
    get(key) {
        let index = (this._hash(key) * -1);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    //KEYS:
    // Loops through the hash table array and 
    // returns an array of keys in the table.
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    //VALUES:
    // Loops through the hash table array and 
    // returns an array of values in the table.
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable();

ht.set("01", "Cats");
ht.set("06", "Cats");
ht.set("02", "Dogs");
ht.set("03", "Trees");
ht.set("04", "Flowers");
ht.set("05", "Coffee");

console.log(ht);
console.log(ht.get("03"));
console.log(ht.get("hello"));
console.log(ht.values());
console.log(ht.keys());