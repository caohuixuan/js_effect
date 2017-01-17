function addEvent(elem,eventType,func){
	try{
		if(elem!=null&& typeof elem=="object"){
		    if(-[1,]){
		    	elem.addEventListener(eventType,func);
		    }else{
		    	console.log(this===window);
		    	elem.attachEvent("on"+eventType,func);
		    }
		}else{
			throw new Error("对象为空或者不为对象");
		}
	}catch(e){
		alert(e.message);
	}
}
