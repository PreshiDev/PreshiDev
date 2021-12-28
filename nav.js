const primaryNav = document.querySelector(".primary--nav");
const mobileNav = document.querySelector(".mobile-nav-toggle")
mobileNav.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

   if (visibility === "false") {
       primaryNav.setAttribute("data-visible", true);
       mobileNav.setAttribute("aria-expanded", true);
    }else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        mobileNav.setAttribute("aria-expanded", false);
    }
    console.log(visibility);
});