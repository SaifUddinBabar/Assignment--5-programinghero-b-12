function getElement(id)
{
   return document.getElementById(id)
}



// btn hover effect 
const btns = document.querySelectorAll(".btn2");

for (const btn of btns) {

  btn.addEventListener("mouseenter", function () {
    btn.style.backgroundColor = "gray"; 
    btn.style.transition = "background-color 0.3s ease"; 
  });

  btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "#16a34a";
  });
}





