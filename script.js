const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}))


const PythonBar = document.querySelector('.bar-Python')
const JavaBar = document.querySelector('.bar-Java')
const JavaScriptBar = document.querySelector('.bar-JavaScript')
const CSSBar = document.querySelector('.bar-CSS')
const HTMLBar = document.querySelector('.bar-HTML')
const CBar = document.querySelector('.bar-C')

var t1 = new TimelineLite()

t1.fromTo(PythonBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(95% - 6px)', ease: Power4.easeOut})
    .fromTo(JavaBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(80% - 6px)', ease: Power4.easeOut})
    .fromTo(JavaScriptBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
    .fromTo(CSSBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(95% - 6px)', ease: Power4.easeOut})
    .fromTo(HTMLBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(95% - 6px)', ease: Power4.easeOut})
    .fromTo(CBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(80% - 6px)', ease: Power4.easeOut})


const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(contoller)

const showRequiredCategory = event => {
    const getId = event.id;
    const links = document.querySelectorAll('.work-category button');

    for (let i = 0; i < links.length; i++) {
        if (links[i].classList.contains('active')) {
            links[i].classList.remove('active');
        }
    }

    event.classList.add('active');

    const getCategory = document.querySelector(`.category-${getId}`);
    const categories = document.querySelectorAll('div[class^="category-"]');
    for (let i = 0; i < categories.length; i++) {
        categories[i].classList.remove('showCategory');
        categories[i].classList.add('hideCategory');
    }

    getCategory.classList.remove('hideCategory');
    getCategory.classList.add('showCategory');

    // Show the text box for Game Project when the button is clicked
    if (getId === 'code') {
        const codingProjectDetails = document.getElementById('codingProjectDetails');
        codingProjectDetails.classList.remove('hideCategory');
        codingProjectDetails.classList.add('showCategory');
    }
};

function showModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Function to close the modal and overlay
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

let myName;
let myEmail;
let myMessage;

document.getElementById("mySubmit").onclick = function () {
    myName = document.getElementById("myName").value;
    myEmail = document.getElementById("myEmail").value;
    myMessage = document.getElementById("myMessage").value;

    console.log('Full Name:', myName);
    console.log('Email:', myEmail);
    console.log('Message:', myMessage); 

    showModal();
};






