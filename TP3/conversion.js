function convertir(){
    var input = document.getElementById("val").value
    var rapport = eval(document.getElementById("conversion").value)
    var dest = document.getElementById("res")
    dest.value = rapport*input
}

function resetRes(){
    console.log("plop")
    document.getElementById("res").value=""
}