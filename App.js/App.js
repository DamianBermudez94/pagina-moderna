/*window.addEventListener("load", function () {
  // Animacion del menu
  let btnMenu = document.querySelector("#btn-menu");
  let menu = document.querySelector(".container");
  let containerMenu = document.querySelector(".menu");
  let activador = true;

  btnMenu.addEventListener("click", function () {
    document.querySelector("#btn-menu i").classList.toggle("fa-times");
    if (activador) {
      menu.style.left = "0";
      menu.style.transition = "0.6s";
      activador = false;
    } else {
      activador = false;
      menu.style.left = "-100%";
      menu.style.transition = "0.6s";
      activador = true;
    }
  });

  // Intercalar la clase Active

  let enlaces = document.querySelectorAll(".list li a");

  enlaces.forEach((element) => {
    element.addEventListener("click", (event) => {
      enlaces.forEach((link) => {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });

  // Efecto Scroll

  // Variable = prevScrollPos

  // window = accedemos a toda la ventana del navegador
  //pageYOffset = devuelve el valor en pixeles del scroll
  let goTop = document.querySelector(".go-top");
  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    let currenScrolPos = window.pageYOffset;
    // Mostrar y ocultar menu
    if (prevScrollPos > currenScrolPos) {
      containerMenu.style.top = "0";
      containerMenu.style.transition = "0.5s";
    } else {
      containerMenu.style.top = "-60px";
      containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrolPos;

    // Mostrar y ocultar estilos del menu

    let arriba = window.pageYOffset;

    if (arriba <= 600) {
      containerMenu.style.borderBottom = "none";
      containerMenu.style.boxShadow = "none";
      goTop.style.right = "-100%";
    } else {
      containerMenu.style.borderBottom = "3px solid #ff2e63";
      containerMenu.style.boxShadow = "5px 0 25px rgb(0 ,0 ,0 , 0.6)";
      goTop.style.right = "0";
      goTop.style.transition = "0.6s";
    }
  };

  // Boton de arriba y abajo

  goTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  let verAbajo = document.querySelector("#abajo");
  verAbajo.addEventListener("click", () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
  });

  // Boton de Mas informacion

  let masInformacion = document.querySelector("#mas-informacion");
  masInformacion.addEventListener("click", () => {
    document.body.scrollTop = 3800;
    document.documentElement.scrollTop = 3800;
  });
});*/
