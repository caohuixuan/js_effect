window.onload=function(){
	function $(_id){return document.getElementById(_id);}
	var content=$("content");
	var preview=$("preview");
	var mask=$("mask");
	var pics=$("pics");
	var picbar=$("picbar");
	var piclis=picbar.getElementsByTagName("li");
	var zoom=$("zoom");
	var zoompic=zoom.getElementsByTagName("img")[0];
	var pw=preview.offsetWidth;
	var ph=preview.offsetHeight;
	for(var i=0;i<piclis.length;i++){
    piclis[i].index=i;
	piclis[i].onmouseover=function(){
	for(var j=0;j<piclis.length;j++){
		piclis[j].className="";
	}
	this.className="active";
	pics.src="images/s/"+(this.index+1)+".jpg";
	zoompic.src="images/b/"+(this.index+1)+".jpg";
	};	
	}
	preview.onmouseover=function(){
		TweenLite(mask,.1,{opacity:30,ease:Tween.Expo.easeOut,onComplete:function(){mask.style.display="block";}});
		TweenLite(zoom,.1,{opacity:100,ease:Tween.Expo.easeOut,onComplete:function(){zoom.style.display="block";}});
	};
	preview.onmouseout=function(){
		TweenLite(mask,.6,{opacity:0,ease:Tween.Expo.easeOut,onComplete:function(){mask.style.display="none";}});
	    TweenLite(zoom,.6,{opacity:0,ease:Tween.Expo.easeOut,onComplete:function(){zoom.style.display="none";}});
	};
	preview.onmousemove=function(e){
		e=e||window.event;
		var x=e.clientX-content.offsetLeft-preview.offsetLeft-mask.offsetWidth/2;
		var y=e.clientY-content.offsetTop-preview.offsetTop-mask.offsetHeight/2;
		var w=pw-mask.offsetWidth;
		var h=ph-mask.offsetHeight;
		x<0&&(x=0);
		x>w&&(x=w);
		y<0&&(y=0);
		y>h&&(y=h);
		mask.style.left=x+"px";
		mask.style.top=y+"px";
	    TweenLite(zoompic,1,{left:-(x/pw)*zoompic.offsetWidth,top:-(y/ph)*zoompic.offsetHeight,ease:Tween.Circ.easeOut});
	};
};
