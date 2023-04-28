const container = document.getElementById('container');
const button = document.getElementById('Mybutton');

container.addEventListener("click",function(){
    alert("container is clicked");
});
button.addEventListener("click",function(event){
    alert("button is clicked");
    //voorkomt event bubbling
event.stopPropagation();  //prevent container alert to show if i click on button but i must write function(event) up
});
