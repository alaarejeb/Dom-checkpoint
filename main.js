function ajouter(event) {
    var h=event.target.parentNode.querySelector("h2");
    var sum=event.target.parentNode.querySelector("h3");
    var result=event.target.parentNode.querySelector(".prix").innerHTML;
    h.innerHTML=Number(h.innerHTML)+1
    t=Number(result)*Number(h.innerHTML)
    sum.innerHTML=t
    total() 
}
function sub(event) {
    var h=event.target.parentNode.querySelector("h2");
    var sum=event.target.parentNode.querySelector("h3");
    var result=event.target.parentNode.querySelector(".prix").innerHTML;
    if (h.innerHTML>1) {
        h.innerHTML=Number(h.innerHTML)-1
        t=Number(result)*Number(h.innerHTML)
        sum.innerHTML=t
    } else {
        h.parentNode.remove()
    } 
    total()         
}
function remove(event) {
    var btn=event.target.parentNode.parentNode;
    console.log(btn)
    btn.remove()
    total()
}
function total(){
    var result=document.getElementsByClassName("totalprix");
    var resulttotal=document.getElementById("maxtotal")
    var sum=0; 
    for (let i = 0; i < result.length; i++) {
        var a=Number(result[i].innerHTML)
        sum=sum+a
    }
    resulttotal.innerHTML=sum
}
total()
function like(event){
    heart = event.target.parentNode.querySelector('.heart')
    if(heart.style.backgroundColor=== 'red'){
      heart.style.backgroundColor = 'gray';
  }else{
      heart.style.backgroundColor = 'red';
  }
}
