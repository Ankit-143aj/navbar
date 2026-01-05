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
      link.closest("li").classList.add("underline_current");
    }

    if (window.innerWidth <= 576){
      const Menu  =  document.querySelector(".menu");
      const Menubar = document.querySelector(".menu .menubar ul");
      const Mobilebar = document.querySelector(".menu .mobilebar");

          if(Mobilebar && !Mobilebar.querySelector(".hamburger")){
            const dv = document.createElement("div");
            dv.className = "hamburger";
            dv.setAttribute("aria-label","Toggle menu");
            dv.setAttribute("tabindex","0");
            dv.innerHTML = "<span></span>";
            Mobilebar.appendChild(dv);
    
    
            dv.addEventListner("click",function(e){
              e.stopPropagation();
              Menu.classList.toggle("mobile-open");
            });
      }
    }
  })
});
