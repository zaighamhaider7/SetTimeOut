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