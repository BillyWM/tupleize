import tupleize from "./tupleize.js";

test('can combine two arrays with Array.from', ()=> {
    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8];
    let result = Array.from(tupleize(arr1, arr2));

    expect(result).toEqual([[1, 5], [2, 6], [3, 7], [4, 8]]);
})

test('can combine more than 2 arrays', ()=> {
    let arr1 = [1, 2, 3];
    let arr2 = [1, 4, 9];
    let arr3 = [1, 8, 27];
    let arr4 = [1, 16, 81];
    let result = Array.from(tupleize(arr1, arr2, arr3, arr4));

    expect(result).toEqual(
        [ [1, 1, 1, 1], [2, 4, 8, 16], [3, 9, 27, 81] ]
    );
})

test(`rejects non-arrays`, ()=> {
    expect(() => {
        tupleize( [1,2], [3, 4], "random string", [7, 8] );
    }).toThrow();
})
