function getfile(file,callback){
	var asr=new XMLHttpRequest();
	asr.overrideMimeType("Application/json");
	asr.open('GET',file,true);
	asr.onreadystatechange=function(){
		if(asr.readyState===4 && asr.status=="200"){
			callback(asr.responseText);
		}
	}
	asr.send(null);
}
getfile("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	lang(data.languages);
})
var left=document.querySelector(".left");
function profile(e){
	var img=document.createElement("img");
	img.src=e.img;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=e.name;
	left.appendChild(h2);
	var h21=document.createElement("h3");
	h21.textContent=e.roll;
	left.appendChild(h21);
	var h22=document.createElement("h4");
	h22.textContent=e.place;
	left.appendChild(h22);
	var h23=document.createElement("h5");
	h22.textContent=e.des;
	left.appendChild(h23);
}
var right=document.querySelector(".right");
function career(e){
	var h1=document.createElement("h1");
	h1.innerHTML="RESUME BUILDING";
	right.appendChild(h1);
	var e1=document.createElement("h2");
	e1.textContent="career objective";
	right.appendChild(e1);
	var hr=document.createElement("hr");
	right.appendChild(hr);
    var p=document.createElement("p");
    p.textContent=e.info;
    right.appendChild(p);
}
   function education(e){
   	var h2=document.createElement("h2");
   	h2.innerHTML="Educational details";
   	right.appendChild(h2);
   	var ww=document.createElement("hr");
   	right.appendChild(ww);
   	var table=document.createElement("table");
   	table.border="1";
   	var tr1="<tr><td>s.no</td><td>degree</td><td>institute</td><td>per</td><td>yop</td></tr>";
   	var tr2="";
   	for(var i=0;i<e.length;i++)
   	{
   		tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td></tr>";
   	}
    table.innerHTML=tr1+tr2;
    right.appendChild(table);
   	}
   	function lang(e){
   		var ee=document.createElement("h2");
   		ee.textContent="Known languages";
   		right.appendChild(ee);
   		var tt=document.createElement("hr");
   		right.appendChild(tt);
   		var ul=document.createElement("ul");
   		right.appendChild(ul);
   		for(i=0;i<e.length;i++)
   		{
   			var li=document.createElement("li");
   			li.textContent=e[i].lang;
   		    ul.append(li);
   		}
    }

   
   

