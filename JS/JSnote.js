https://www.w3cschool.cn/javascript/js-statements.html
https://github.com/xiaoaq/helloworld.git
JS&HTML DOM�ο��ֲ᣺
https://www.w3cschool.cn/jsref/jsref-jsref-tutorialnmor1pl5.html
�����Ż����ܣ�
https://www.w3cschool.cn/javascript/javascript-optimization.html
javascript������ʽ֪ʶ��չ�ܽ�:
https://www.w3cschool.cn/javascript/javascript-expression.html


..JavaScript �Դ�Сд����,eg.
  ���� getElementById �� getElementbyID �ǲ�ͬ�ġ�
  ͬ�������� myVariable �� MyVariable Ҳ�ǲ�ͬ�ġ�

..����Զ���Ŀո�

..\ ����

..ע�ͷ�ʽͬC/C++

..�ַ�������""��''��Χ

..�������� JavaScript ����,eg.
  ����������� JavaScript �������ñ�����ֵ���ᶪʧ��
  �������������ִ�к󣬱��� carname ��ֵ��Ȼ�� "Volvo"��
  var carname="Volvo"; 
  var carname;

..JavaScript ��������: �ַ�����String��������(Number)������(Boolean)������(Array)������(Object)���գ�Null����δ���壨Undefined����

..�������ַ�����ʹ�����ţ�ֻҪ��ƥ���Χ�ַ��������ż��ɣ�����ת�壩��

..JavaScript ����, eg. 
  var obj = {name1:"value1", name2:"value2", ...};
  Ѱַ��ʽ��name = obj.name1 or name = obj["name1"];
             
..��ձ�����var=null;
             
..���������±���ʱ������ʹ�ùؼ��� "new" �����������ͣ�var carname=new String;...
             
..boolean: true��һ������1��false��һ������0.

..���κ�������������var
             
..������������ַ�����ӣ��������Ϊ�ַ�����

..JavaScript ��ǩ*

..Object/Date/Array ���ص�typeof����object,�����޷�ͨ��typeof���ж����ǵ�����;null ������������ object.

..constructor ���Է������� JavaScript �����Ĺ��캯��;
  eg."John".constructor // ���غ��� String()  { [native code] }
  
..����ʹ�� constructor �������鿴�����Ƿ�Ϊ����(��Date) (�����ַ��� "Array").

..Number():���ַ���ת��Ϊ 0,�������ַ�����ת��Ϊ NaN (���Ǹ�����).

..Operator + �����ڽ�����ת��Ϊ����(�����������ת��������Ȼ����һ�����֣���ֵΪ NaN (����һ������)).

..JSON �����ڴ洢�ʹ������ݵĸ�ʽ/ͨ�����ڷ��������ҳ�������� .

..HTML �����ⲿ JavaScript �ļ�
	ʹ�ü��ĸ�ʽ���� JavaScript �ļ� ( type ���Բ��Ǳ����):
	<script src="myscript.js">
	
..ʹ�� JavaScript ���� HTML Ԫ��
	var obj =getElementById("Demo")

	....................................
	
..�������ʽ���Դ洢�ڱ�����,�ں������ʽ�洢�ڱ����󣬱���Ҳ����Ϊһ������ʹ��
	eg.var x = function (a, b) {return a * b};
	var z = x(4, 3);
	
..����ͬ������ͨ�����õ� JavaScript ������������Function()�����塣
	eg.var myFunction = new Function("a", "b", "return a * b");
	var x = myFunction(4, 3);

..�� JavaScript �У��ܶ�ʱ������Ҫ����ʹ�� new �ؼ���.

..�Ե��ú���

..ͨ��ֵ���ݲ���:��������޸Ĳ�����ֵ���������޸Ĳ����ĳ�ʼֵ���ں����ⶨ�壩��
  ͨ�����󴫵ݲ���:�޸Ķ������Կ������ں����ⲿ��ȫ�ֱ�������
  
..���������������ʹ�� var �ؼ��֣���ô������һ��ȫ�ֱ������������ں����ڶ��塣

..��Ƕ����/�հ� (������)��	

...............................

..����ҳ������ʱ��������ᴴ��ҳ����ĵ�����ģ�ͣ�Document Object Model����

..onload �� onunload �¼������ڴ��� cookie��

..�¼����� element.addEventListener(event, function, useCapture);

..���� JavaScript ���־�Ϊ 64 λ,�����岻ͬ���͵����֣������������̡���������ȵȡ�

..����ʹ�� toString() ���� ���16���ơ�8���ơ�2����,myNumber.toString(8);

..��һ��������������в�ͬ�Ķ���

..execCommand !!!

..���� navigator �������Ϣ�������ԣ���Ӧ�ñ����ڼ��������汾.

..JavaScript��ͬһ�������п��Դ�Ŷ������͵�Ԫ�أ������ǳ���Ҳ�ǿ��Զ�̬�����ģ����������������ӻ�����Զ������鳤�������ġ�

..�ַ���ת����:
	var s = "abc,abcd,aaa";
	ss = s.split(",");// ��ÿ������(,)�����зֽ⡣
	
..������ӡ�ɾ��:splice������
	join�����������C#��������Ҳ�У������ǰ�����Ԫ�أ����������toString()������ʹ�ò�����Ϊ���ӷ����ӳ�һ�ַ���
	slice(start,end)���������ڷ���������һ��Ƭ�λ������顣
	
..����ת�����ַ��� Ч�ʶԱ�:(���� +) > String() > .toString() > new String()��

..HTML 4 �淶ָ�� <script> ��ǩ���Է��� HTML �ĵ���<head>��<body>�У���������ֶ�Ρ�
	������������� <script> ��ǩʱ���������ֹͣ�����������ݣ����������ؽű��ļ�����ִ�����еĴ��롣
	���ڽű�������ҳ��������Դ�����أ�����Ƽ�������<script>��ǩ�����ܷŵ�<body>��ǩ�ĵײ����Ծ������ٶ�����ҳ�����ص�Ӱ�졣
	
..������HTML��ʹ��˫���ţ���JavaScript��ʹ�õ����ţ���Ϊ�˼��ݸ����������ҲΪ�˽���ʱ�����������JSON����ʱ�����ʹ��˫����.

..JavaScript ����Ӧ�þ������� .js ���ļ���,��Ҫ���õ�ʱ���� HTML ���� <script src=��filename.js��> ����ʽ����������
	<script src=��filename.js��> ��ǩӦ���������ļ��ĺ���,����Ƿ���</body>��ǩǰ�������ή������� JavaScript �����Ӱ��ҳ������������ļ���ʱ�䡣
	
..