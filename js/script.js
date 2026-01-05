  fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  
    let currentPage = window.location.pathname.split("/").pop();
    //menu me anchor tak pahucne ke liye
    if(!currentPage || currentPage == "#"){
      currentPage = "index.html";
    }

    let links = document.querySelectorAll(".menu .menubar ul li a");
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
            
                    dv.addEventListener("click",function(e){
                      e.stopPropagation();
                      Menu.classList.toggle("mobile-open");
                    });
       }
      
      // sabse pehle --> menu items nikalna padega
      const menuList = document.querySelectorAll(".menu .menubar ul li");
      menuList.forEach(li => {
        // second step --> woh menu items filter karna jisme submenu ho
        const submenuExists = li.querySelectorAll(".submenu");
        if(submenuExists.length>0){
          li.classList.add("has-submenu");
          //third step--> identify karna jis menu item pr click hua ho
          if(!li.querySelector(".submenu-toggle")){
            const toggle = document.createElement("button");
            toggle.className = "submenu-toggle";
            toggle.setAttribute("aria-expanded","false");
            toggle.innerHHTML = '<span style="display:inline-block; transform:rotate(90deg);">&#9656</span>';

            //dummy li add in the end of the list
            const firstLink = li.querySelector("a");
            firstLink.after(toggle);

            //fourth Step ==> close already open/close all window
            li.addEventListener("click", function(ev)){
              ev.stopPropagation();
              menuList.forEach(s_li => {
                const s_submenuExists = s_li.querySelector(".submenu");
                if(s_submenuExists && s_li !== li){
                  console.log(s_submenuExists);
                  console.log(s_li);
                  s_li.classList.remove("open-submenu");
                }
              });
              //fifth step ==> submenu display karna jo menu item click hua ho
              const isOpen = li.classList.toggle("open-submenu");
              toggle.setAttribute("aria-expanded",isOpen? "true" : "false");
            });
            
          }
        }
      });
    }
  });
});
