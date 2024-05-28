// loader

setTimeout(() => {
    document.querySelector(".logo").style.display = "none";
}, 3000);

setTimeout(() => {
    document.querySelector(".addouter").style.display = "flex";
    document.getElementById("container").style.filter = `blur(10px)`
    document.getElementById("body").style.overflow = `hidden`
}, 5000);



document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".addouter").style.display = "none"
    document.getElementById("container").style.filter = `blur(0px)`
    document.getElementById("body").style.overflow = `auto`
})


// loader gsap

gsap.from("#h1",{
    x:-500,
    duration:1,
    delay:0.5
})
gsap.from("#logoimg",{
    y:-500,
    duration:1,
    delay:1
})

window.onload = (event) =>{
let data = new XMLHttpRequest();

data.open("GET","http://fakestoreapi.com/products",true);

data.onload = function(){
    let parsedata = JSON.parse(this.response);

    if(data.status == 200 ){
        for(let i=0 ; i<parsedata.length; i++){
            document.getElementById("container").innerHTML += `
            <div class="card">
    <img src="${parsedata[i].image}" height="150px" width="auto" alt="">
    <h5>${parsedata[i].title}</h5>
    <p>${parsedata[i].description}</p>
    <button>View More</button>`
        }
    }
    else{
        console.log("stop");
    }
}

data.send();
}