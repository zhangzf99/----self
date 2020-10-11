block formatting context  块级格式化上下文

产生了BFC的，形成了独立的容器，此时在布局中不会影响到其他的元素

特性：
    1、BFC边距会重叠
    2、BFC内外元素互不相互影响
    3、BFC不会与浮动元素发生重叠
    4、BFC元素的高度会计算包括元素内的浮动元素的高度

触发条件：
    1、body根元素
    2、浮动元素：float除了none以外的值
    3、绝对定位元素：position(absolute、fixed)
    4、display为inline-block、table-cells、flex、table-caption
    5、overflow除了visible以外的值(hidden、auto、scroll)



GFC：可简单理解为grid布局
FFC：可简单理解为flex布局
IFC：内联格式化上下文，简单理解为inline-block