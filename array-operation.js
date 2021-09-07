const strings =['a', 'b', 'c','d'];
//4*4 = 16 bytes of storage

//access one item
strings[2];//O(1)

//push - to the end of the array
strings.push('e');//O(1) for stati array, O(n) for dynamic array

//pop - opposite of push, rmove the last item
strings.pop(); //O(1)

//unshift - Add an item at the beginning of the array
strings.unshift ('x'); //O(n)

//splice: add an item in the middle
strings.splice (2, 0, 'alien');//O(n)

console.log(strings)