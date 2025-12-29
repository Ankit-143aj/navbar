fetch("navbar.html")
.then(res => res.text())
.then(data => {
  document.getElementById("navbar").innerHTML = data;

  let currentPage = window.location.pathname.split("/").pop();
  //menu me anchor tak pahucne ke liye
  let links = document.querySelectorAll(".menu .menubar ul li a");

  if(!currentPage || currentPage == "#"){
    currentPage = "index.html";
  }

  links.forEach(link => {
    let linkPage = link.getAttribute("href");

    if(linkPage == currentPage){
      link.closest("li").classList.add("underline_current"):
    }
  })
});
