# Big-O Notation : menggambarkan complexity menggunakan ketentuan aljabar

# 2 karater penting dalam Big-O Notation:

time complexity:

1. dinyatakan dalam input
2. fokus pada gambaran besar tanpa terjebak dalam detail kecil -> berfokus pada kode block/n dari input size

```js
function summation(n) {
  let sum = 0; // executed 1
  for (let i = 1; i < n; i++) {
    sum += i; // executed n
  }
  return sum; // executed 1
}

// time complexity => n + 2 (ini function di summation) executed by input terms
```

# Space Complexity:

- O(1)- Constant => apabila algo tidak membutuhkan memory/ memory ga bergntung pada input size maka space complexity adalah constant
  ex: sort di dalam array tanpa memanfaatkan tambahan array
- 0(n)- linear => space complexity di mana ruang ekstra yang dibutuhkan bertambah seiring bertambahnya ukuran input.
- 0(logn)- logarithmic => kompleksitas ruang di mana ruang ekstra yang dibutuhkan tumbuh tetapi tidak pada tingkat yang sama dengan ukuran input

# Point notes:

- Multiple algo ada untuk masalah yg sama there is no one right solution. diffrent algo work well under diffrent constraints.
- the same algo with teh same program language can be implement in diffrent ways.
- When writing programs at work, don't lose sight of the big picture. Rather than writing clever code, write code that is simple to read and maintain.
- input size affected the perfomance(parameternya)
- hindari quadratic time complexity dan space complexity ex: loop di dalam loop
