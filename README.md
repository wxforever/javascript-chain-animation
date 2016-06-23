###用JavaScript实现链式调用动画的小插件

>使用方法

1、引入animate.js

2、把animate方法添加到dom上

3、对dom实现链式动画

```js
var rect=document.querySelector('.rect');
rect.animate=animate；	
/*
* @param {string}animation eg.'width 200px 1s linear 2s'
*
*/
rect.animate('width 5rem 2s').animate('height 5rem 2s').animate('background red 3s')

```

>注意事项

1、第二次对同一个dom使用该函数，需要设置chain参数为0，例如`rect.chain=0`

2、animate的参数`@param {string}animation eg.'width 200px 1s linear 2s'`,其中第二个参数要注意没有空格，如`translate3d(0,0,0)`,
如果有空格注意去掉，因为使用了数组的split函数拆开成数组.