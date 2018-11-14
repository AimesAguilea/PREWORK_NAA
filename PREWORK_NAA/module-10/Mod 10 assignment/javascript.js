document.getElementById ("button1").addEventListener("click", function(){
    document.getElementById ("box").style.height = "250px";
});

document.getElementById ("button2").addEventListener("click", function(){
    document.getElementById ("box").style.backgroundColor = "blue"
});

document.getElementById ("button4").addEventListener("click", function(){
    document.getElementById ("box").style.backgroundColor = "orange";
    document.getElementById ("box").style.height = "150px";
});

$(document).ready(function(){
    $("button3").click(function(){
        $("#button3").fadeOut(3000);
    });
});