let toggle = document.querySelector(".toggle-menu");
let links = document.querySelector(".link");
let link = document.querySelectorAll(".link a");


// Add Black Color To The Header When Scrolling
window.addEventListener('scroll',() => {

    if(document.documentElement.scrollTop > 0) {
        document.querySelector(".header").style.backgroundColor = "black"
    } else {
        document.querySelector(".header").style.cssText = ""
    }
});

// Mobile Header Menu
toggle.addEventListener('click',() => {
    toggle.classList.toggle("active");
    links.classList.toggle("open");
});

// Select Links
let scrollSomeWhere = function (element) {
    
    element.forEach(ele => {

        ele.addEventListener('click', function (e) {
            
            e.preventDefault();// disabling links
            
            document.querySelector(e.target.dataset.section).scrollIntoView({
                
                behavior: "smooth"

            });

        });

    });

};

scrollSomeWhere(link);

// Scroll To Book Section
let bookSection = document.querySelector(".the-book");
document.querySelector(".first").onclick = (e) => {
    e.preventDefault();
    window.scrollTo({
        left: 0,
        top: bookSection.offsetTop,
        behavior: "smooth"
    });
};

// scrolling inside Book Section
let sideNav = document.querySelectorAll(".side-nav .navs a");
scrollSomeWhere(sideNav);

sideNav.onclick = function(e) {
    console.log(e)
    e.style.backgroundColor = "balck";
}

console.log(window.location.pathname)
forEach(element => {
    element.classList.add("active");
});
