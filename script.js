let c=1;
let c2=0;
window.addEventListener("mouseover",(e)=>{
   // document.querySelector("body").innerHTML=null;

    c++;
    c2++;
    let div2=document.createElement("div");
    div2.setAttribute("class","cursor2");
    let div=document.createElement("div");
    div.setAttribute("class","cursor");
    div.style.top=`${e.pageY}px`;
    div.style.left=`${e.pageX}px`;
    div.style.zIndex=`${c2}`;
    div2.style.top=`${e.pageY}px`;
    div2.style.left=`${e.pageX}px`;
    div2.style.zIndex=`${c}`;
   

    document.querySelector("body").append(div,div2);
})