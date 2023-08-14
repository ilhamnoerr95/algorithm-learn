Objek: sebuah koleksi yang berisikan keys of values pairs

```js
const object = {
  key1: "value1",
  key2: "value2",
};
```

- Time Complexity of Objects:

1. insert - O(1) -> constant - tidak membutuhkan amount of time complexity dalam menambahkan properti object
2. remove - O(1) -> constant
3. access - O(1) -> constant
4. search - O (N) => linear (karena kita harus mencari semua properti yg ada di dalam object)
5. Object.keys() - O(N) -> linear
6. Object.values() - O(N) -> linear
7. Object.entries() - O(N) -> linear

---

time complexity array:

1. insert/remove at end - O(1) -> constant
2. insert/remove at beginning - O(n) -> linear - karena index harus di reset setiap nilai sisa elemen di dalam array
3. access = O(1) -> constant -> fetching elemnt pertama tidak ada bedanya dengan fetching posisi element 1000
4. search - O(n) -> linear
5. push/pop - o(1) -> constant
6. shift/unshift/concat/slice/splice - O(n)- linear
7. forEach/map/filter/reduce - O(n) - linear
   Worst Case: apabila ketika menggunakan forEach/filter dan callback function juga membawa for loop maka akan menghasilkan time complexity quadratic yg membuat perfomance buruk - ini patut untuk dihindari
