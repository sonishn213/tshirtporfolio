$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});

let imgHolder = document.getElementById("img-holder");
let cards = "";
for (i = 1; i <= 32; i++) {
  cards =
    cards +
    `<div class="card card-hover h-100">
   <div class="card-body">
     <a href="index.html">
       <img
         class="card-img-top"
         src="img/${i}.jpg"
         alt="Card image cap"
       />
       
     </a>
   </div>
 </div>`;
}

imgHolder.innerHTML = cards;
