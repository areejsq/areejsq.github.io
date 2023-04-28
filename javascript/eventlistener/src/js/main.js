document.getElementById('clickableDiv').addEventListener('click',function()
{
    alert("div is aangeklikt");
});

document.getElementById('clickableP').addEventListener('click',function(){
    alert("paragraaf is aangeklikt");
});
document.getElementById('hoverableDiv').addEventListener('mouseover',function(){
    alert("Muis is over de Div");
});
document.getElementById('hoverableDiv').addEventListener('mouseout',function(){
    alert("Muis heeft de div verlaten");
});

document.getElementById('textInput').addEventListener('keydown',function(){
    console.log("Toets ingedrukt");
});
document.getElementById('textInput').addEventListener('keyup',function(){
    console.log("Toets losgelaten");
});