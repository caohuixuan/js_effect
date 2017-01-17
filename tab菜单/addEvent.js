function addEvent(elem,eventType,func){
	try{
		if(elem!=null&& typeof elem=="object"){
			if(-[1,]){
				elem.addEventListener(eventType,func,false);
			}else{
				alert("IE678");
				elem.attachEvent("on"+eventType,func);
			}
		}else{
			throw new Error("不是对象或者对象为空");
		}
	}catch(e){
		alert(e.message);
	}
}
