# tupleize

Loop over a bunch of arrays, getting back *tuples* with items from each array.

Implementated as an *iterable*, so you can `for...of` and `...spread` but it's still memory-efficient.

### Usage

```javascript
import tupleize from 'tupleize';

// Put in some arrays to loop over them
let pets = ["dog", "cat", "bird"];
let descriptions = ["furry", "fluffy", "feathery"];
let sounds = ["barks", "meows", "chirps"];

for (let [pet, desc, snd] of tupleize(pets, descriptions, sounds)) {
    console.log(pet, desc, snd);
}

// result:
//  > dog furry barks
//  > cat fluffy meows
//  > bird feathery chirps
```

Or use `Array.from` to get a single array with all the results

```javascript

let result = Array.from( tupleize( [1,2], [3, 4], [5, 6] ) );
console.log(result);

// result:
//  [ [1,3,5], [2, 4, 6] ]
```

### Testing

```
yarn install
yarn test
```
