
 var imgSrcArr = [
        'img',

    ];

    var imgWrap = [];

    function preloadImg(arr) {
        for(var i =0; i< arr.length ;i++) {
            imgWrap[i] = new Image();
            imgWrap[i].src = arr[i];
        }
    }

    preloadImg(imgSrcArr);



function startsearch(){
			
	var incomeinform = document.getElementById("inputmymenu").value;
	switch(incomeinform){
		case "":case null:case " ":break;
		case "easteregg": alert("here");break;
		default:
			window.location.href="https://baike.baidu.com/item/" + incomeinform;
	}
}
	
		
function navtomain(){
	window.location.href="main.html";
}

function func(id){						
	document.getElementById(id).style.display="block";
	//document.getElementById(id).style.transform="scaleX(1.05)";
	//document.getElementById(id).style.transform="scale(1.05)";		
}
function func1(id){
	document.getElementById(id).style.display="none";
	//document.getElementById(id).style.transform="scaleX(1.0)";
	//document.getElementById(id).style.transform="scale(1.0) ";				
}

//document.getElementById("banner").height = 0.7 * ((document.documentElement.scrollHeight >document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight).toString();
//document.getElementById("banner").height = window.getComputedStyle("cirtizen").getPropertyValue('height');

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
	
	//element = document.getElementById(id);
	//element.classList.remove("mydefault");
	//element.offsetWidth = element.offsetWidth;
	//element.classList.add("myfirst");
	
	var elm = document.getElementById(id);
	newone = elm.cloneNode(true);
	elm.parentNode.replaceChild(newone, elm);
	
	
	currentitem.onclick=function(){
		//alert("here");
		window.location.href=linkto;
		//console.log(linkto);
		
	}
	//console.log(currentitem.onclick);
	
	document.getElementById(coverid).onclick=function(){
		//alert("here2");
		window.location.href=linkto;
	}
	//console.log(document.getElementById(coverid).onclick);
	//currentitem.style.animation="myfirst";
}