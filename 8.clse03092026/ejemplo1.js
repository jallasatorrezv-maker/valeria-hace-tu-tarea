let age=prompt("enter your age:",15);
alert("your age" + age + "years old.");
let res=confirm("eres mayor de edad?");
if(res){
    alert("you are an adult");
}
else{
alert("you are not an adult.")
}
alert(Number(" 12345")); // 12345
alert(Number(" 12345gt")); // nan
alert(Number(true)); // 1
alert(Number(false)); // 0

alert(Boolean(1)); // true
alert(Boolean(0));// false

alert(Boolean("hola"));// true
alert(Boolean(""));// false