/*
* @Author: Administrator
* @Date:   2018-09-04 17:21:55
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-05 09:27:40
*/
	//lz 左箭头
	//ry 右箭头
	//list 放图的盒子
	//w 放图的盒子的宽
	//几屏
	function rotate(lz,ry,list,w,times){
	// let lz=document.querySelectorAll(".lz");
 //    let ry=document.querySelectorAll(".ry");
 //    let list=document.querySelector(".list");
 //    let w=parseInt(getComputedStyle(list,null).width)/3;
 //    let times=0;
    
    lz[0].onclick=function(){
        times++;
        if(times==3){
            times=2;
        }
        list.style.transform=`translate(-${w*times}px)`;
    }
    ry[0].onclick=function(){
        times--;
        if(times==-1){
            times=0;
        }
        list.style.transform=`translate(-${w*times}px)`;
    }
}
