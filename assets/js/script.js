$(async function () {
    document.querySelector(".movies").innerHTML = "<div class='col-md-12 fs-3  text-white'>Loading...</div>"
    let req = await fetch("https://api.b7web.com.br/cinema/");
    let json = await req.json();
    console.log(json);
    creatBlog(json); 

})

function creatBlog(list) {
    let html = ""; 
    for (let i in list) {
        html+= `<div class="col-md-4 p3 movie"><img src = '${list[i].avatar}'/><h5 class="my-3 text-white text-center">${list[i].titulo}</h5></div>`
    }
    document.querySelector(".movies").innerHTML = html;
}