let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let li = document.createElement("li");
    let inp = document.querySelector("input");
    li.innerText = inp.value;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    let ul = document.querySelector("ul");
    
    ul.appendChild(li);
    li.appendChild(dltbtn);
        
    inp.value = "";

    dltbtn.addEventListener("click",function(){
        let par = this.parentElement;
        par.remove();
    })
})
let ul = document.querySelector("ul");

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let items = event.target.parentElement;
        items.remove();
        
    }
})



// let dltbtns = document.querySelectorAll("li button");
// for(dltbt of dltbtns){
    
//     dltbt.addEventListener("click",function(){
//         let pr = this.parentElement;
//         pr.remove();
//     })

// }