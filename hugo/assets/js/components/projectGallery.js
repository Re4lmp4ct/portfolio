const galleryItems = document.querySelectorAll(".project-gallery__container__item");
const previewItems = document.querySelectorAll(".project-gallery__preview-container__item");
let activeItemIndex = 0;
UpdateGallery();

for (let i = 0; i < previewItems.length; i++)
{
    const previewItem = previewItems[i];
    previewItem.addEventListener("click", (e) => {
       activeItemIndex = i;
       UpdateGallery();
    });
}

const nextButton = document.querySelector(".project-gallery__button-next");
const previousButton = document.querySelector(".project-gallery__button-previous");
if (galleryItems.length > 1)
{
    nextButton.addEventListener("click", (e) => {
        activeItemIndex = (((activeItemIndex + 1) % galleryItems.length) + galleryItems.length) % galleryItems.length;
        UpdateGallery();
    });
    previousButton.addEventListener("click", (e) => {
        activeItemIndex = (((activeItemIndex - 1) % galleryItems.length) + galleryItems.length) % galleryItems.length;
        UpdateGallery();
    });
}
else
{
    nextButton.style.display = "none";
    previousButton.style.display = "none";
}

function UpdateGallery()
{
    for (let i = 0; i < galleryItems.length; i++)
    {
        const galleryItem = galleryItems[i];
        const previewItem = previewItems[i];

        if (i === activeItemIndex)
        {
            galleryItem.style.display = "block";
            previewItem.classList.add("current");

            previewItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        else
        {
            galleryItem.style.display = "none";
            previewItem.classList.remove("current");
        }
    }
}