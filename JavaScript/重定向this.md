call、apply、bind，三者都可以用来改变函数的this对象的指向，且第一个参数都是this要指向的对象，也就是想指定的上下文。

但传参的值也不同，apply后续只能传递数组，而call和bind可以传递多个参数

bind是返回对应函数，便于稍后调用；apply和call是立即调用。