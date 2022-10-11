const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
    "linear-gradient(to right top, #f80100, #1f1e22)",
    "linear-gradient(to right top, #fe694b, #3c5982)",
    "linear-gradient(to right top, #fad64e, #2c2b26)",
    "linear-gradient(to right top, #6b443b, #6b443b)",
    "linear-gradient(to right top, #f20e1b, #0475ff)",
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
             width: coords.width,
             top: coords.top,
             left: coords.left
    };
    if(entry.isIntersecting){
        bubble.style.setProperty('left', `${directions.left}px`);
        bubble.style.setProperty('top', `${directions.top}px`);
        bubble.style.setProperty('width', `${directions.width}px`);
        bubble.style.setProperty('height', `${directions.height}px`);
        bubble.style.background = gradients [gradientIndex];
    }
  });
}

sections.forEach(section => {
    observer.observe(section);
}); 