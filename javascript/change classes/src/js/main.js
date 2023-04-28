document.addEventListener("DOMContentLoaded",function()
{
    const colorBox = document.getElementById("colorBox");
    const classButton = document.getElementById("classButton");
    const styleButton = document.getElementById("styleButton");

    classButton.addEventListener("click",function(){
        colorBox.classList.toggle("box-blue");
    });
    
    styleButton.addEventListener("click",function(){
        const currentcolor = colorBox.style.backgroundColor;

        if(currentcolor =="red" || currentcolor == ""){
            colorBox.style.backgroundColor ="green";
        }
        else{
            colorBox.style.backgroundColor ="red";
        }
    });
});