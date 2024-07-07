// function hash(key, arrayLen) {
//     let total = 0;
//     for (let char of key) {
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

// function hash(key, arrayLen) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

function hash(key, arrayLen) {
    let total = 0;
    let DUMMY_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * DUMMY_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(hash("hello", 13));
console.log(hash("goodbye", 13));
console.log(hash("sidney", 13));