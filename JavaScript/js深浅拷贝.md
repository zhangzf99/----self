浅拷贝：只拷贝对象的最外层属性。
深拷贝：彻底的克隆，源对象与克隆对象不会互相影响。

浅拷贝实现方式
1、Object.assign(target, ...sources)
let copyObj = Object.assign({}, sourceObj);
    局限性：只拷贝了自身的可枚举属性，没有拷贝正确的原型和不可枚举属性
            IE不兼容


深拷贝实现方式
let copyObj = JSON.parse(JSON.stringify(target));
    局限性：对某些数据不支持，Data类型会被转为字符串类型，Undefined和RegExp类型丢失等问题
        无法拷贝存在循环引用的对象
        拷贝自身可枚举字符串属性，原型链丢失
