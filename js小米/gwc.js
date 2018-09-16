/*
* @Author: Administrator
* @Date:   2018-09-04 20:59:18
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-04 21:28:28
*/
    // let sho=document.querySelectorAll(".bar-shop");
    // let sid=document.querySelectorAll(".side");
    // // console.log(sid);
    //     lis.onmouseover=function(){
    //         sid.style.height=100+"px";
    //     }
   	// 	lis.onmouseout=function(){
    //         sid.style.height=0;
    //     }
  
 	//1.获取元素
    let sho=document.querySelectorAll(".bar-shop");
    let sid=document.querySelectorAll(".side");
    // console.log(son);
    //2遍历每一个li
    for(let i=0;i<sho.length;i++){
        //3.当鼠标移入每个li时的操作
        lis[i].onmouseover=function(){
            for(let j=0;j<sid.length;j++){
                //4.其余子元素消失
                sid[j].style.display="none";
            }
            //5.当前子元素出现
            sid[i].style.display="block";
        }
    }
  
