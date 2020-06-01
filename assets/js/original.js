
var imgWrap = new Image();
imgWrap.src = 'img';

function startsearch(){	
	var incomeinform = document.getElementById("inputmymenu").value;
	switch(incomeinform){
		case "":case null:case " ":break;
		case "easteregg": alert("cw lyl wjh 2020");break;
		default:
			window.location.href="https://baike.baidu.com/item/" + incomeinform;
	}
}
	
		
function navtomain(){
	document.getElementById("banner").src="main.html";
}

function func(id){						
	document.getElementById(id).style.display="block";		
}
function func1(id){
	document.getElementById(id).style.display="none";				
}


function changedisplay(id,coverid,lastid,input,linkto){		
	var currentitem = document.getElementById(id);
	document.getElementById(lastid).background=currentitem.src;
	
	document.getElementById("navid1").style.display="none";
	document.getElementById("navid2").style.display="none";
	document.getElementById("navid3").style.display="none";
	document.getElementById("menu1id").src="img/menu.png";
	document.getElementById("menu2id").src="img/menu.png";
	document.getElementById("menu3id").src="img/menu.png";
	
	currentitem.src=input;		
	
	var elm = document.getElementById(id);
	newone = elm.cloneNode(true);
	elm.parentNode.replaceChild(newone, elm);
	
	currentitem.onclick=function(){
		banner.src=linkto;	
	}
	
	document.getElementById(coverid).onclick=function(){
		banner.src=linkto;
	}

}