  function Scroll(){
    var top = document.getElementById('nav');
    var ypos = window.pageYOffset;

    if(ypos > 20) {
      top.style.display = "none";
    } 
    else {
      top.style.display = "inline-block";
    }
  }

  window.addEventListener("scroll", Scroll);
