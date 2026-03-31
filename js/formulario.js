function clickMenu(){
    
    let mobileMenuBtn = document.querySelector(".click-call");
    let menuMobile = document.querySelector(".menu-mobile");

    mobileMenuBtn.addEventListener('click' , function(){
    
      menuMobile.classList.toggle("active");
});
}


function perfilPopUp(){
    let perfil = document.querySelector(".perfil");
    let exitBtn = document.querySelector("#exit-btn");
    let popUpNutricinista = document.querySelector(".popup-nutricionista");

    perfil.addEventListener('click' , function(){
        

        popUpNutricinista.style.display = 'flex';

    });
    exitBtn.addEventListener('click' , function(){
        

        popUpNutricinista.style.display = 'none';

    });
}


perfilPopUp();
clickMenu();