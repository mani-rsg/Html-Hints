document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = onScroll;
});



function onScroll() {
    let scrollbarLocation = window.pageYOffset;
    let scrollLink = document.getElementsByClassName('scroll');
    for (let link of scrollLink) {
        let section = document.querySelector(link.hash);
        let sectionOffset = section.getBoundingClientRect().top + scrollbarLocation - 20;
        if (sectionOffset <= scrollbarLocation) {
            document.querySelector('.active').classList.remove('active');
            link.classList.add("active");
        }
    }

}