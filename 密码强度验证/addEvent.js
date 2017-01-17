function addEvent(elem,eventType,func){
	try{
		if(elem!=null&& typeof elem=="object"){
			if(-[1,]){
				elem.addEventListener(eventType,func);
			}else{
				elem.attachEvent("on"+eventType,func);
			}
		}else{
			throw new Error("不是对象或对象为空");
		}
	}catch(e){
		alert(e.message);
	}
}
