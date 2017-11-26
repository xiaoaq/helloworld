https://www.w3cschool.cn/javascript/js-statements.html
https://github.com/xiaoaq/helloworld.git
JS&HTML DOM参考手册：
https://www.w3cschool.cn/jsref/jsref-jsref-tutorialnmor1pl5.html


..JavaScript 对大小写敏感,eg.
  函数 getElementById 与 getElementbyID 是不同的。
  同样，变量 myVariable 与 MyVariable 也是不同的。

..会忽略多余的空格

..\ 换行

..注释方式同C/C++

..字符串，用""或''包围

..重新声明 JavaScript 变量,eg.
  如果重新声明 JavaScript 变量，该变量的值不会丢失：
  在以下两条语句执行后，变量 carname 的值依然是 "Volvo"：
  var carname="Volvo"; 
  var carname;

..JavaScript 数据类型: 字符串（String）、数字(Number)、布尔(Boolean)、数组(Array)、对象(Object)、空（Null）、未定义（Undefined）。

..可以在字符串中使用引号，只要不匹配包围字符串的引号即可（无需转义）。

..JavaScript 对象, eg. 
  var obj = {name1:"value1", name2:"value2", ...};
  寻址方式：name = obj.name1 or name = obj["name1"];
             
..清空变量：var=null;
             
..当您声明新变量时，可以使用关键词 "new" 来声明其类型：var carname=new String;...
             
..boolean: true不一定等于1，false不一定等于0.

..带参函数，参数不带var
             
..如果把数字与字符串相加，结果将成为字符串！

..JavaScript 标签*

..Object/Date/Array 返回的typeof都是object,所以无法通过typeof来判断他们的类型;null 的数据类型是 object.

..constructor 属性返回所有 JavaScript 变量的构造函数;
  eg."John".constructor // 返回函数 String()  { [native code] }
  
..可以使用 constructor 属性来查看对象是否为数组(或Date) (包含字符串 "Array").

..Number():空字符串转换为 0,其他的字符串会转换为 NaN (不是个数字).

..Operator + 可用于将变量转换为数字(如果变量不能转换，它仍然会是一个数字，但值为 NaN (不是一个数字)).

..JSON 是用于存储和传输数据的格式/通常用于服务端向网页传递数据 .

..HTML 载入外部 JavaScript 文件
	使用简洁的格式载入 JavaScript 文件 ( type 属性不是必须的):
	<script src="myscript.js">
	
..使用 JavaScript 访问 HTML 元素
	var obj =getElementById("Demo")

	....................................
	
..函数表达式可以存储在变量中,在函数表达式存储在变量后，变量也可作为一个函数使用
	eg.var x = function (a, b) {return a * b};
	var z = x(4, 3);
	
..函数同样可以通过内置的 JavaScript 函数构造器（Function()）定义。
	eg.var myFunction = new Function("a", "b", "return a * b");
	var x = myFunction(4, 3);

..在 JavaScript 中，很多时候，你需要避免使用 new 关键字.

..自调用函数

..通过值传递参数:如果函数修改参数的值，将不会修改参数的初始值（在函数外定义）。
  通过对象传递参数:修改对象属性可作用于函数外部（全局变量）。
  
..变量声明是如果不使用 var 关键字，那么它就是一个全局变量，即便它在函数内定义。

..内嵌函数/闭包 (计数器)？	

...............................

..当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

..onload 和 onunload 事件可用于处理 cookie。

..事件监听 element.addEventListener(event, function, useCapture);

..所有 JavaScript 数字均为 64 位,不定义不同类型的数字，比如整数、短、长、浮点等等。

..可以使用 toString() 方法 输出16进制、8进制、2进制,myNumber.toString(8);

..在一个数组中你可以有不同的对象

..execCommand !!!

..来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本.

..JavaScript在同一个数组中可以存放多种类型的元素，而且是长度也是可以动态调整的，可以随着数据增加或减少自动对数组长度做更改。

..字符串转数组:
	var s = "abc,abcd,aaa";
	ss = s.split(",");// 在每个逗号(,)处进行分解。
	
..数组添加、删除:splice方法。
	join：这个方法在C#等语言中也有，作用是把数组元素（对象调用其toString()方法）使用参数作为连接符连接成一字符串
	slice(start,end)：方法用于返回数组中一个片段或子数组。
	
..	