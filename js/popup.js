   let like = Array.from(document.querySelectorAll(".like"))
            like.forEach((x) => {
                x.addEventListener("click", (event) => {
                    if (event.target.style.color != "red") {
                        event.target.style.color = "red"
                    } else { event.target.style.color = "#AAB8C2" }
                })
            })

 // Get all modals 
var modals = document.getElementsByClassName('modal');
 // Get all buttons that should opens the modal
 var btns = document.getElementsByName("myBtn");

 // Get the <span> element that closes the modals
var spans=document.getElementsByClassName("close");
 
 // When the user clicks the button, open the modals
 for(var i = 0; i < btns.length; i++) {
   (function(i) {
     var btn = btns[i];
     
     btn.onclick = function() {

       modals[i].style.display = "block";
     }
   })(i);
 }
 
 //spans close
 for(var i = 0; i < spans.length; i++) {
   (function(i) {
     var span = spans[i];
     // you should user addEventListener("click", function() {}); here
     span.onclick = function() {
       modals[i].style.display = "none";
     }
   })(i);
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modals[i]) {
     modals[i].style.display = "none";
   }
 }


