//页面加载
$(function(){
    //购物车
    $(".bar-shop").mouseenter(function(){
        $(".side").clearQueue().slideDown();
    })
    $(".bar-shop").mouseleave(function(){
        $(".side").clearQueue().slideUp();
    })

    //家电
    let parent=$(".home-box .hot .tv");
    let son=$(".home-box .rht .right")
    console.log(son, parent);
    parent.mouseenter(function(){
        let i=$(this).index();
        son.css("display","none");
        son.eq(i).css("display","block");
    })

    //轮播图侧栏
    let parents=$(".tag li");
    let sons=$(".tag li .sol");
    console.log(parents, sons);
    parents.mouseenter(function(){
        let i=$(this).index();
        sons.css("display","none");
        sons.eq(i).css("display","block");
    })
    parents.mouseleave(function(){
        // let i=$(this).index;
        sons.css("display","none");

    })


    //轮播图
    let imgBox=$(".banner .imgs img");
    let dots=$(".dots .dotBox");
    let zBtn=$(".banner .leftBtn");
    let yBtn=$(".banner .rightBtn");
    let bBox=$(".banner");
    let now=0;
    // console.log(zBtn, bBox,);
    //初始化
    imgBox.first().css("z-index",10);
    dots.eq(0).addClass(".active");
    
    //点击切换
    zBtn.click(function () {
        moveL();
    })
    yBtn.click(function () {
        move();
    })

    let t=setInterval(move,1000);

    function move(){
        now++;
        if(now==dots.length){
            now=0;
        }
        imgBox.css("z-index",5).eq(now).css("z-index",10);
        dots.removeClass("active").eq(now).addClass("active");
    }
    function moveL(){
        now--;
        if(now==-1){
            now=4;
        }
        imgBox.css("z-index",5).eq(now).css("z-index",10);
        dots.removeClass("active").eq(now).addClass("active");
    }
    bBox.mouseover(function () {
        clearInterval(t);
    })
    bBox.mouseout(function () {
        t=setInterval(move,1000);
    })

    //小米闪购
    let left=$(".evade .left");
    let right=$(".evade .right");
    let pic=$(".evade .shopping-pic .lm");
    let times=0;
    let w=pic.width()/3;
    console.log(left, right, pic,w);
    right.click(function () {
        times++;
        if(times==3){
            times=2;
        }
        pic.animate({left:-w*times},"slow");
    })
    left.click(function () {
        times--;
        if(times==-1){
            times=0;
        }
        pic.animate({left:-w*times},"slow");
    })

    //为你推荐
    let lefts=$(".recommend .left");
    let rights=$(".recommend .right");
    let pics=$(".recommend ul .boxAll");
    let tim=0;
    let ws=pics.width()/3;
    console.log(lefts, rights, pics,ws);
    rights.click(function () {
        tim++;
        if(tim==3){
            tim=2;
        }
        pics.animate({left:-w*tim},"slow");
    })
    lefts.click(function () {
        tim--;
        if(tim==-1){
            tim=0;
        }
        pics.animate({left:-w*tim},"slow");
    })

    //倒计时
    let sj=document.querySelectorAll(".evade .zuo .count .num");
    // console.log(sj);
    setInterval(setDate,1000);
    function setDate(){
        let arr=fn();
        sj.forEach((v,index)=>{
            v.innerHTML=arr[index];
        })
    }
    function fn() {
        let arr = [];
        let now = new Date();
        let future = new Date(2018,8,16);
        let time = Math.floor((future.getTime() - now.getTime()) / 1000);
        console.log(time);
        let hour = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60));
        arr.push(hour);
        let m = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / (60));
        arr.push(m);
        let s = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % (60));
        arr.push(s);
        return arr;
    }

    //置顶
    // let backs=$(".back .return");
    // console.log(backs);



})

window.onload=function () {
    //置顶
    let back=document.querySelector(".back .return");
    console.log(back,top);
    back.onclick=function(){
        animate(document.body,{scrollTop:0},500);
        animate(document.documentElement,{scrollTop:0},500);
    }
    window.onscroll=function(){
        let gd=document.body.scrollTop||document.documentElement.scrollTop;
        if(gd>1000){
            back.style.display="block";
        }else{
            back.style.display="none";
        }
    }
}











