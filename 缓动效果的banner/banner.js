window.onload=function(){
	var banner=document.getElementById("banner");
	var imgList=['img/bigpic1.jpg','img/bigpic2.jpg','img/bigpic3.jpg','img/bigpic4.jpg'];
    var imgTemp=new Array();
    for(var i=0;i<imgList.length;i++){
    	imgTemp[i]=new Image();
    	imgTemp[i].src=imgList[i];
    }
    imgs=new Array();
    var imgID=0,nextImgID=1,proveImgID;
    var tf=true;
    var speed1=1000; 
    var speed2=3000;
    var i=0;
    function imgInit(){
    	var content='';
    	for(var i=0;i<imgList.length;i++){
    		content+='<img src="'+imgList[i]+'" style="left:0;" />\n';
    	}
    	banner.innerHTML=content;
    	imgs=banner.getElementsByTagName('img');
    	imgs[0].style.zIndex=15;
    	imgs[1].style.zIndex=5;
    	
    }
    function imgChange(imgID,nextImgID){	
    	if(tf){
    		if(parseInt(imgs[imgID].style.left)>-180){
    			imgs[nextImgID].style.zIndex =imgs[imgID].style.zIndex-1;
    		    var sid1=setInterval(function(){
    		 	       //console.log(imgID+"===="+nextImgID);
    					imgs[imgID].style.left = (parseInt(imgs[imgID].style.left)-10) + 'px';
    	                imgs[nextImgID].style.left = (parseInt(imgs[nextImgID].style.left)+5) + 'px';
    	                if(parseInt(imgs[imgID].style.left)<-180){
    	                	imgs[imgID].style.zIndex +=imgs[nextImgID].style.zIndex;
                            imgs[nextImgID].style.zIndex +=imgs[imgID].style.zIndex+10;
                      //      console.log(imgs[imgID].style.zIndex+"===="+imgs[nextImgID].style.zIndex);
    	                	clearInterval(sid1);
    	                	tf=!tf;
    	 		            imgChange(imgID,nextImgID);
    	                }
    		 	},30);
    		}
    	}else{
    		if(parseInt(imgs[imgID].style.left)<0){
    		 var sid2=setInterval(function(){
    					imgs[imgID].style.left = (parseInt(imgs[imgID].style.left)+10) + 'px';
    	                imgs[nextImgID].style.left = (parseInt(imgs[nextImgID].style.left)-5) + 'px';
    	                if(parseInt(imgs[imgID].style.left)==0){
    	                	clearInterval(sid2);
    	                	tf=!tf;
    	                }
    		 	},30);
    		}
    	}    
    	}
    function setinter(){	
    	var sid3=setInterval(function(){
    		imgChange(imgID,nextImgID);
    	    imgID++;
            nextImgID = imgID + 1;
    	    i++;
    	    if(i==3){
    	    	clearInterval(sid3);
    	    	setTimeout(function(){
    	    		for(var t=0;t<4;t++){
    	    		imgs[t].style.zIndex=0;
    	    	}
    	    		imgs[0].style.zIndex=5;
    	        imgs[3].style.zIndex=15;
                      for(var t=0;t<4;t++){
    	   // 	console.log(imgs[t].style.zIndex);
    	    	}  	  
    	 //   	 console.log(imgID+"===="+nextImgID);
    	    	imgChange(imgID,0);
    	    	imgID=0;
    	    	nextImgID = imgID + 1;
    	    //	console.log(imgID+"===="+nextImgID);
    	    	setinter();
    	    	},10000);

            i=0;
    	    }
    	},3000);
    }
    imgInit();
    setinter();
};
