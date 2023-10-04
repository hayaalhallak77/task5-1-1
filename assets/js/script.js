
var calc = document.createElement("div");
calc.classList='calc'

var text = document.createElement("div");
text.classList='div';

var input = document.createElement("input");
input.type = "text";
input.placeholder = "0";

text.appendChild(input);

var Div1 = document.createElement("div");
Div1.classList='div1';

var clear = document.createElement("button");
clear.classList='btn';
clear.innerHTML = "C";


var divide = document.createElement("button");
divide.classList='btn';
divide.innerHTML = "/";

var multiply = document.createElement("button");
multiply.classList='btn';
multiply.innerHTML = "*";

var Delete = document.createElement("button");
Delete.classList='btn';
Delete.innerHTML = '<i class="fa fa-window-close" aria-hidden="true"></i>';

Div1.appendChild(clear);
Div1.appendChild(divide);
Div1.appendChild(multiply);
Div1.appendChild(Delete);

var Div2 = document.createElement("div");
Div2.classList='div2';

var seven = document.createElement("button");
seven.innerHTML = "7";

var eight = document.createElement("button");
eight.innerHTML = "8";

var nine = document.createElement("button");
nine.innerHTML = "9";

var sub = document.createElement("button");
sub.classList='btn';
sub.innerHTML = "-";

Div2.appendChild(seven);
Div2.appendChild(eight);
Div2.appendChild(nine);
Div2.appendChild(sub);

var Div3 = document.createElement("div");
Div3.classList='div3';

var four = document.createElement("button");
four.innerHTML = "4";


var five = document.createElement("button");
five.innerHTML = "5";

var six = document.createElement("button");
six.innerHTML = "6";


var plus= document.createElement("button");
plus.classList='btn';
plus.innerHTML = "+";

Div3.appendChild(four);
Div3.appendChild(five);
Div3.appendChild(six);
Div3.appendChild(plus);

var Div4 = document.createElement("div");
Div4.classList='div4';

var one = document.createElement("button");
one.innerHTML = "1";


var two = document.createElement("button");
two.innerHTML = "2";


var three = document.createElement("button");
three.innerHTML = "3";


var resrdivid = document.createElement("button");
resrdivid.classList='btn';
resrdivid.innerHTML = "%";


Div4.appendChild(one);
Div4.appendChild(two);
Div4.appendChild(three);
Div4.appendChild(resrdivid);

var Div5 = document.createElement("div");
Div5.classList='div5';

var zero = document.createElement("button");
zero.innerHTML = "0";

var dot = document.createElement("button");
dot.innerHTML = ".";


var equal = document.createElement("button");
equal.classList='btn1';
equal.innerHTML = "=";

Div5.appendChild(zero);
Div5.appendChild(dot);
Div5.appendChild(equal);

calc.appendChild(text);
calc.appendChild(Div1);
calc.appendChild(Div2);
calc.appendChild(Div3);
calc.appendChild(Div4);
calc.appendChild(Div5);

document.body.appendChild(calc);


clear.addEventListener("click" , function() {
    input.value = "";
  });

  Delete.addEventListener("click" , function() {
    input.value = input.value.slice(0, -1);
  });

  divide.addEventListener("click" , function(){
    input.value += "/";
  });

  multiply.addEventListener("click" , function() {
    input.value += "*";
  });

  sub.addEventListener("click",function(){
     input.value+="-";
  });

  plus.addEventListener("click",function(){
    input.value+="+";
 });
  
 resrdivid.addEventListener("click" , function() {
    input.value += "%";
  });


 zero.addEventListener("click",function(){
    input.value+="0";
 });

 one.addEventListener("click",function(){
    input.value+="1";
 });

 two.addEventListener("click",function(){
    input.value+="2";
 });

 three.addEventListener("click",function(){
    input.value+="3";
 });

 four.addEventListener("click",function(){
    input.value+="4";
 });

 five.addEventListener("click",function(){
    input.value+="5";
 });

 six.addEventListener("click",function(){
    input.value+="6";
 });

 seven.addEventListener("click",function(){
    input.value+="7";
 });

 eight.addEventListener("click",function(){
    input.value+="8";
 });

 nine.addEventListener("click",function(){
    input.value+="9";
 });

 dot.addEventListener("click",function(){
    input.value+=".";
 });


 equal.addEventListener("click" , function() {
    input.value = eval(input.value);
  });






