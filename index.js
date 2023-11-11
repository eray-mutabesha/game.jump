
const element1 =document.querySelector(".objet");
const element2 = document.querySelector(".boule");
const start=document.querySelector(".start");
const sauter=document.querySelector(".sauter");


  sauter.addEventListener("click",()=>{
    sauter.classList.toggle("btn_border");
    element1.classList.toggle("objectanimation");
    
    })

start.addEventListener("click",(e)=>{
  start.classList.toggle("btn_border");
  
  document.location.reload(false);
})

// fonction for checking if elements touch each other
function checkCollision() {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  if (
    rect1.right > rect2.left &&
    rect1.left < rect2.right &&
    rect1.bottom > rect2.top &&
    rect1.top < rect2.bottom
  ) {
    // Les éléments se touchent, effectuez les actions nécessaires
    alert("faild")
    document.location.reload(false);
  }
}
setInterval(checkCollision,100);
