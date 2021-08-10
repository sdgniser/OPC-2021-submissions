function vis() {
  var v = window.matchMedia("(max-width: 50em)")
  if(v.matches) {
    document.querySelector('.sidebar').style.width = "100%";
  }
  else{
    document.querySelector('.sidebar').style.width = "25%";

  }
  // document.querySelectorAll(".body").style.width = "75%";
  document.querySelector('.ans').style.width = "0";
  var v = window.matchMedia("(max-width: 50em)")


  // document.querySelector('.sidebar').style.overflow = "hidden";

  // document.getElementsByClassName('.body').style.marginRight = "0";
}
function closebar() {
  document.querySelector('.sidebar').style.width = "0";
  // document.querySelectorAll(".body").style.width = "100%";
  // document.querySelector(".ans").style.right= "0%";
  document.querySelector('.ans').style.width = "50px";

}
function firstclose() {
  var x = window.matchMedia("(max-width: 50em)")
  if(x.matches){
    document.querySelector('.heading').style.height = "12vh";
  }
  else{
    document.querySelector('.heading').style.height = "10vh";
  }
  // document.querySelector('.first').style.height = "0";
  document.querySelector('.first').remove();

  document.getElementById('NISER').style.top = "20%";
}





// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector(".ans").onclick = hide;
//
// });
