### arguments特点
1、本身不能调用数组方法，是另外一种对象类型，只不过属性从0开始排
2、有callee和length属性


### 类数组转化成数组的方式
1、Array.prototype.slice.call()
2、Array.from()
3、ES6展开运算符
4、concat + apply