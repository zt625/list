function index(elem){
			var siblings = elem.parentNode.children;
			for(var i=0;i<siblings.length;i++){
				if (siblings[i]==elem) {
					return i;
				};
			}
		}

		function addClass(elem,str){
			if (elem.className){
				var name=elem.className;
				var newClass=name+" "+str;
				elem.className=newClass;
			}else{
				elem.className=str;
			}
		}

		function siblings(elem){
			// var ul=elem.parentNode;
			// var list=ul.children;
			var list=elem.parentNode.children;
			var newArr=[]
			for (var i = 0; i < list.length; i++){
				if (list[i] != elem) {
					newArr.push(list[i]);
				}; 
			};
			return newArr
		}

		function removeClass(elem,str){
			var newStr=elem.className.split(" ")
			var newArr = []
			for (var i = 0; i < newStr.length; i++) {
					if (newStr[i]!= str) {
						newArr.push(newStr[i])
					};
			}
			var newStr=newArr.join(" ")
			elem.className=newStr
		}