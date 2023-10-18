function nav () {
    let x = document.getElementById("navigationscreen");
    let hamburger1 = document.getElementById("hamburger1");
    let hamburger2 = document.getElementById("hamburger2");
    let hamburger3 = document.getElementById("hamburger3");
    if (x.classList.contains("show")) {
      x.classList.remove("show");
      hamburger1.classList.remove("toggle");
      hamburger2.classList.remove("toggle");
      hamburger3.classList.remove("toggle");

    } else {
      x.classList.add("show");
      hamburger1.classList.add("toggle");
      hamburger2.classList.add("toggle");
      hamburger3.classList.add("toggle") ;   
  }
}
