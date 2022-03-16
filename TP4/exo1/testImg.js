function manageImage(imgNode){
    var theImg = imgNode.getElementsByTagName("img")[0];
    var theDesc = imgNode.querySelector("p");
    theImg.addEventListener('mouseenter', ()=>{
        theDesc.style.display='unset';
    })
    theImg.addEventListener('mouseleave', ()=>{
        theDesc.style.display='none';
    })
}

for(const item of document.getElementsByClassName("image")){
    manageImage(item);
}