function test(person) {
  person.name = 26
  person = {
    name: 'zzf',
    age: 23
  }
  return person
}
const p1 = {
  name: 'cdy',
  age: 16
}
const p2 = test(p1)
console.log(p1)
console.log(p2)












































/**
 * 函数传参时，传递的是对象在堆中的内存地址值，test函数中的实参person是p1对象的内存地址，通过调用person.age = 26确实改变了p1的值，但随后person变成了另一块内存空间的地址，并且在最后将这另外一份内存空间的地址返回，赋给了p2。
 */
/**
 * p1 = {
 *   name: 'cdy',
 *   age: 26
 * }
 * 
 * p2 = {
 *    name: 'zzf',
 *    age: 23
 * }
 */