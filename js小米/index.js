/*
* @Author: ZX
* @Date:   2018-08-29 14:38:44
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-03 23:13:15
*/
window.onload=function(){
	let lis=document.getElementsByClassName("father");
	let lis1=document.getElementsByClassName("father1");
	let lis2=document.getElementsByClassName("father2");
	let lis3=document.getElementsByClassName("father3");
	let son=document.getElementsByClassName("son");
	let son1=document.getElementsByClassName("son1");
	let son2=document.getElementsByClassName("son2");
	let son3=document.getElementsByClassName("son3");
	
	let find=document.getElementsByClassName("find-list");
	// console.log(son);
	let lis4=document.getElementsByClassName("topic-list");


	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function () {
	        son[i].style.display="block"; 
	    }
	    lis[i].onmouseout=function (){
	        son[i].style.display="none";
	    }
	}
	for(let i=0;i<lis1.length;i++){
		lis1[i].onmouseover=function () {
	        son1[i].style.display="block"; 
	    }
	    lis1[i].onmouseout=function (){
	        son1[i].style.display="none";
	    }
	}
	for(let i=0;i<lis1.length;i++){
		lis2[i].onmouseover=function () {
	        son2[i].style.display="block"; 
	    }
	    lis2[i].onmouseout=function (){
	        son2[i].style.display="none";
	    }
	}
	for(let i=0;i<lis1.length;i++){
		lis3[i].onmouseover=function () {
	        son3[i].style.display="block"; 
	    }
	    lis3[i].onmouseout=function (){
	        son3[i].style.display="none";
	    }
	}
	for(let i=0;i<find.length;i++){
		find[i].onmouseover=function () {
	       lis4[i].style.display="block"; 
	    }
	    find[i].onmouseout=function (){
	        lis4[i].style.display="none";
	    }
	}
	


	// 2.透明度轮播图
    let imgs=document.querySelectorAll(".images");
    let dots=document.querySelectorAll(".dotBox");
    let banner=document.querySelectorAll(".banner")[0];
    let leftBtn=document.querySelectorAll(".leftBtn")[0];
    let rightBtn=document.querySelectorAll(".rightBtn")[0];
    // console.log(imgs,dots,banner);
    //定义初始值
    imgs[0].style.opacity=1;
    dots[0].classList.add("active");
    let num=0;

    // 移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function () {
            for(let j=0;j<dots.length;j++){
                imgs[j].style.opacity=0;
                dots[j].classList.remove("active");
            }
            imgs[i].style.opacity=1;
            dots[i].classList.add("active");
            num=i;
        }
    }
    //自动轮播
    let t;
    function move() {
        num++;
        if(num==5){
            num=0;
        }
        for(let j=0;j<dots.length;j++){
            dots[j].classList.remove("active");
            imgs[j].style.opacity=0;
        }
        imgs[num].style.opacity=1;
        dots[num].classList.add("active");
    }
    //左箭头
    function moveL() {
        num--;
        if(num<0){
            num=4;
        }
        for(let j=0;j<dots.length;j++){
            dots[j].classList.remove("active");
            imgs[j].style.opacity=0;
        }
        imgs[num].style.opacity=1;
        dots[num].classList.add("active");
    }
    leftBtn.onclick=function (){
    	moveL();
    }
    rightBtn.onclick=function (){
    	move();
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,2000);
    }



	let lunbo1=document.querySelectorAll(".lunbo1");
    let point1=document.querySelectorAll(".touch1");
    let leftbtn1=document.querySelectorAll(".leftbtn1")[0];
    let rightbtn1=document.querySelectorAll(".rightbtn1")[0];
    let widths1=parseInt(getComputedStyle(lunbo1[0],null).width);
    console.log(lunbo1,point1,leftbtn1,rightbtn1,widths1);

    
    contentBn(lunbo1,point1,leftbtn1,rightbtn1,widths1,"active1");
  

    let lunbo2=document.querySelectorAll(".lunbo2");
    let point2=document.querySelectorAll(".touch2");
    let leftbtn2=document.querySelectorAll(".leftbtn2")[0];
    let rightbtn2=document.querySelectorAll(".rightbtn2")[0];
    let widths2=parseInt(getComputedStyle(lunbo2[0],null).width);
    console.log(lunbo2,point2,leftbtn2,rightbtn2,widths2);

    
    contentBn(lunbo2,point2,leftbtn2,rightbtn2,widths2,"active1");


    let lunbo3=document.querySelectorAll(".lunbo3");
    let point3=document.querySelectorAll(".touch3");
    let leftbtn3=document.querySelectorAll(".leftbtn3")[0];
    let rightbtn3=document.querySelectorAll(".rightbtn3")[0];
    let widths3=parseInt(getComputedStyle(lunbo3[0],null).width);
    console.log(lunbo3,point3,leftbtn3,rightbtn3,widths3);

    
    contentBn(lunbo3,point3,leftbtn3,rightbtn3,widths3,"active1");



    let lunbo4=document.querySelectorAll(".lunbo4");
    let point4=document.querySelectorAll(".touch4");
    let leftbtn4=document.querySelectorAll(".leftbtn4")[0];
    let rightbtn4=document.querySelectorAll(".rightbtn4")[0];
    let widths4=parseInt(getComputedStyle(lunbo4[0],null).width);
    console.log(lunbo4,point4,leftbtn4,rightbtn4,widths4);

    
    contentBn(lunbo4,point4,leftbtn4,rightbtn4,widths4,"active1");


}









