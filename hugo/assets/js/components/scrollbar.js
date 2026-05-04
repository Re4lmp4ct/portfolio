const scrollbar = document.querySelector(".simplebar-horizontal");
const scrollbarContainer = document.querySelector(".project-gallery__simplebar-container");

CheckVisibility();

document.querySelector('[data-simplebar]').addEventListener('scroll', CheckVisibility);
window.addEventListener('resize', CheckVisibility);

function CheckVisibility()
{
    if (scrollbar.style.visibility === "hidden")
    {
        scrollbarContainer.style.paddingBottom = "16px";
    }
    else
    {
        scrollbarContainer.style.paddingBottom = "30px";
    }
}