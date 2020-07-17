let tupleize = (...arrays) => {
    let current = 0;

    if (!arrays.every(x => Array.isArray(x))) {
        throw new TypeError("All parameters must be arrays");
    }

    let shortestLength = arrays.reduce
    (
        (accumulator, current) => {
            return current.length < accumulator ? current.length : accumulator;
        },
        arrays[0].length
    )

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    if (current > shortestLength - 1) {
                        return { done: true }
                    } else {
                        let ret = arrays.map(x => x[current]);
                        current++;
                        return { value: ret, done: false }
                    }
                }
            }
        }	
    }
}

export default tupleize;
