const accordions = document.querySelectorAll(".project-accordion-item");
for (const accordion of accordions)
{
    const header = accordion.children[0];
    const content = accordion.children[1];

    const iconOpen = header.querySelector("#icon-open");
    const iconClose = header.querySelector("#icon-close");
    iconOpen.style.display = "block";
    iconClose.style.display = "none";

    header.addEventListener("click", (e) => {
        if (content.style.maxHeight)
        {
            header.classList.remove("opened");
            iconOpen.style.display = "block";
            iconClose.style.display = "none";
            content.style.maxHeight = null;
        }
        else
        {
            header.classList.add("opened");
            iconOpen.style.display = "none";
            iconClose.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}