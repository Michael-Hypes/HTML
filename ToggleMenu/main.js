let toggleNavStatus = false;

let toggleNav = function(){
  let getsidebar = document.querySelector(".nav-side");
  let getsidebarUl = document.querySelector(".nav-side ul");
  let getsidebarTitle = document.querySelector(".nav-side span");
  let getsidebarLinks = document.querySelectorAll(".nav-side a");/*gets all of this type*/

  if(toggleNavStatus === false){
    getsidebarUl.style.visibility = "visible";
    getsidebar.style.width = "350px";
    getsidebarTitle.style.opacity = "0.5";

    let arrayLength = getsidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getsidebarLinks[i].style.opacity = 1;
    }

    toggleNavStatus = true;
  }

  else if(toggleNavStatus === true){
    getsidebarUl.style.visibility = "hidden";
    getsidebar.style.width = "50px";
    getsidebarTitle.style.opacity = "0";

    let arrayLength = getsidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getsidebarLinks[i].style.opacity = 0;
    }

    toggleNavStatus = false;
  }
}
