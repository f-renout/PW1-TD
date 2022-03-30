function convertir(){
    var input = $("#val").val()
    var rapport = eval($("#conversion").val());
    var res = rapport*input;
    var dest = $("#res")
    dest.val(res)
}

function resetRes(){
    $("#res").text("")
}

$(document).ready(function (){
    $("#val").change(resetRes)
    $("#conversion").change(resetRes)
    $("#convertButton").click(convertir)
});
