const a = {
  name: 'Anton',
  lastName: 'Tabachkov',
}
const b = {
  age: 26,
}

const c = {
  ...a,
  ...b,
}

console.log(c);