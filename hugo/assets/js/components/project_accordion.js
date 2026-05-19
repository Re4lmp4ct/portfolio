const accordions = document.querySelectorAll(".project-accordion-item");
for (const accordion of accordions)
{
    const header = accordion.children[0];
    const collapsible = accordion.children[1];
    collapsible.style.maxHeight = "0px";

    const iconOpen = header.querySelector("#icon-open");
    const iconClose = header.querySelector("#icon-close");
    iconOpen.style.display = "block";
    iconClose.style.display = "none";

    header.addEventListener("click", (e) => {
        if (collapsible.style.maxHeight !== "0px")
        {
            header.classList.remove("opened");
            iconOpen.style.display = "block";
            iconClose.style.display = "none";
            collapsible.style.maxHeight = "0px";
        }
        else
        {
            header.classList.add("opened");
            iconOpen.style.display = "none";
            iconClose.style.display = "block";
            collapsible.style.maxHeight = collapsible.scrollHeight + "px";
        }
    });
}