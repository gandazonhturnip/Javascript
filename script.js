var tombol = document.querySelector(".container-tombol");
var layar = document.querySelector("#layer");

tombol.addEventListener("click", function(e){
    
    var tombolClick = e.target;
    var nilaiTombol = tombolClick.innerText;

    if(nilaiTombol == "C"){
        layer.value = "";
    } 
    else if(nilaiTombol == "<"){
        layer.value = layer.value.slice(0,-1);
    }
    else if(nilaiTombol == "="){
        layer.value = eval(layer.value)
    } else{
        layer.value = layer.value + nilaiTombol;
    }

});