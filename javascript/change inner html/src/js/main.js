function changeTitle()
{
   document.getElementById("title").innerHTML = "Nieuwe Title";
}
function changeParagraaf()
{
   let paragraafs= document.getElementsByTagName("p");
   for (let i = 0; i < paragraafs.length; i++) {
    paragraafs[i].innerHTML ="Nieuwe inhoud" + i;
    
   }
    
}

function changeImage(src)
{
  var image= document.getElementById("carImage");
  image.src ="src/imgs/"+src;
  if(src =="3-2-car-free-download-png.png")
  {
    image.alt = "red car";
  }
  else
  {
    image.alt = "black car";
  }
}