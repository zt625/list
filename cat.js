var cat= {
	name:"miaomiao",
	age:2, 
	sayName:function(){
		alert(this.name);
		
	},
	sayHello:function(){
		var content = "大家好，我是" + this.name + ",我今年" + this.age + "岁了.";
		alert(content);
		
	},
	eat:function(food){
		var content = "我喜欢吃" + food;
		alert(content);
		
	},
	count:function(num1,num2,sign){
		var result = 0;
		switch(sign){
			case "+" : result = Number(num1) + Number(num2); break;
			case "-" : result = Number(num1) - Number(num2); break;
			case "*" : result = Number(num1) * Number(num2); break;
			case "/" : result = Number(num1) / Number(num2); break;
		}
		var content = num1 + sign +num2 + "计算的结果是" + result;
		alert(content);
	}
}