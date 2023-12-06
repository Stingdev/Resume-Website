 const darkModeToggle = document.getElementById("darkModeToggle");
        const body = document.body;
       const isDarkMode = localStorage.getItem("darkMode") === "enabled";
       if (isDarkMode) {
          body.classList.add("dark-mode");
         darkModeToggle.checked = true;
       }
        darkModeToggle.addEventListener("change", () => {
         if (darkModeToggle.checked) {
           body.classList.add("dark-mode");
         localStorage.setItem("darkMode", "enabled");
        } else {
           body.classList.remove("dark-mode");
           localStorage.setItem("darkMode", "disabled");
         }
       });



const animationEls = document.querySelectorAll("[data-fade]");

 const observerClb = function (entries) {
   entries.forEach(entry => {
     const { isIntersecting, target } = entry;

     if (isIntersecting) {
       const fadeType = target.dataset.fade;
       target.classList.add(fadeType);

       showElsOnScrollObserver.unobserve(target);
    }
   });
 };

 const observerOpt = {
   root: null,
   threshold: 0.1,
 };

 const showElsOnScrollObserver = new IntersectionObserver(
   observerClb,
   observerOpt
 );
 animationEls.forEach(el => showElsOnScrollObserver.observe(el));



 const $header = document.querySelector('header');
  const $logo = document.querySelectorAll('.logo')[0];
 const $navBar = document.querySelectorAll('.nav-bar')[0];
 const $menu = document.querySelectorAll('.menu')[0];
 window.addEventListener('scroll', toggleHeader, false);
 function toggleHeader() {
     if (window.pageYOffset > 70 && $header.classList.contains('max-header')) {
 
         $header.classList.remove('max-header');
         $header.classList.add('min-header');
          $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
          $menu.firstElementChild.classList.remove('max-hamburguer');
          $menu.firstElementChild.classList.add('min-hamburguer');
 
     } else if (window.pageYOffset <= 70 && $header.classList.contains('min-header')) {
 
         $header.classList.remove('min-header');
         $header.classList.add('max-header');
          $navBar.classList.remove('min-nav');
          $navBar.classList.add('max-nav');
          $menu.firstElementChild.classList.remove('min-hamburguer');
          $menu.firstElementChild.classList.add('max-hamburguer');
     }
 }
 
 $menu.addEventListener('click',toggleMenu, false);
 var isOpen = false;
 function toggleMenu(){
     if(!isOpen){
         $navBar.classList.add('menu-opened');
         isOpen = true;
     } else{
         $navBar.classList.remove('menu-opened');
         isOpen = false;
     }
 }
 
 $navBar.addEventListener('click', navClick, false);
 function navClick(e){
     if (e.target.tagName == 'A'){
         toggleMenu();
     }
 }
 


      //  let topButton =getElementById("gotop")
      //   function topFunction() {
      //     document.body.scrollTop = 0;
      //     document.documentElement.scrollTop = 0;
      //   }
    //  const sec =document.querySelectorAll('section');
    //    const links =document.querySelectorAll('ul li a');

    //    console.log(sec);
    //    console.log(links);
    //     window.onscroll = () => {
    //     sec.forEach(section =>{
    //           const top = window.scrollY;
    //           const offset =section.offsetTop -150 ;
    //           const height = section.offsetHeight ;
    //          const id =section.getAttribute('id');

    //          if(top >= offset && top<offset + height) {
    //                links.forEach(Link =>{
    //                  Link.classList.remove('active');
    //                  document.querySelector(' ul li a [href*= ' + id + ']').classList.add('active');
                    
    //                })
    //           }
    //      })
      

    //    };