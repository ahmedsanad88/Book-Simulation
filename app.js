const next = document.getElementById('next');
const prev = document.getElementById('prev');
const pages = document.querySelectorAll('.pagesContainer');

// Handling the next event to arrange and flip the page.
next.addEventListener('click', () => {
    let counter = 0;
    let newIndex = checkLastElement('nextPage');
    if(newIndex === 0) {
        pages[0].classList.add('nextPage');
        // Adding the wave to the front face of the pages when going forwards.
        pages[0].lastElementChild.classList.add('wave');
        setTimeout(() => {
            pages[0].style.zIndex = counter;
        }, 1000)
    }else {
        // console.log("newIndex got it here", newIndex);
        counter++;
        pages[newIndex].classList.add('nextPage');
        pages[newIndex].lastElementChild.classList.add('wave');
        setTimeout(() => {
            pages[newIndex].style.zIndex = counter;
        }, 1000)        
    }
});

// Handling the previous click to flip the page back and arrange them back.
prev.addEventListener('click', () => {
    let newIndex = checkLastElement('nextPage');
    if(newIndex === 0) return;
    pages[newIndex - 1].classList.remove('nextPage');
    pages[newIndex - 1].lastElementChild.classList.remove('wave');
    // add the wave the backface of the pages when going back.
    let nodes = pages[newIndex - 1].children;
    nodes[1].classList.add('waveBack');

    setTimeout(() => {
        pages[newIndex - 1].style.zIndex = 9 - newIndex;
    }, 500);
    setTimeout(() => {
        nodes[1].classList.remove('waveBack');
    }, 1000);
});


// Function will provide the index for current active page.
const checkLastElement = (clsName) => {
    let index = 0;
    pages.forEach((page) => {
        // index++;
        if(page.classList.contains(clsName)) {
            index = [...pages].indexOf(page) + 1;
        }
    });
    return index;
}