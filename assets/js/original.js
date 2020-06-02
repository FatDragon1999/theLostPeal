var imgSrcArr = [
        'img\\close.png',
'img\\close.png',
'img\\menu1text.png',
'img\\少数民族\\北方.jpg',
'img\\少数民族\\南方.jpg',
'img\\少数民族\\藏族.jpg',
'img\\少数民族\\西北.jpg',
'img\\语言\\有危险-鄂温克族.jpg',
'img\\语言\\活力-壮族.jpg',
'img\\语言\\濒危-赫哲族.jpg',
'img\\非遗\\北方——蒙古族呼麦.jpg',
'img\\非遗\\南方——粤剧.jpg',
'img\\非遗\\藏族——藏医.jpg',
'img\\非遗\\西北——木卡姆艺术.jpg',
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