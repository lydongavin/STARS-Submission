window.addEventListener('scroll', scrollEvent);

function scrollEvent(evt) {
    const target = document.querySelectorAll('.scroll');
    console.log(target[0].getBoundingClientRect().top);
    if(window.pageYOffset > 1200) return;
    for(var i = 0; i < target.length; i++) {
        var pos = window.pageYOffset * target[i].dataset.rate;
        if(target[i].dataset.direction == 'v') {
            target[i].style.transform = "translate3d(0px," + pos + "px, 0px)";
        } else {
            target[i].style.transform = "translate3d(" + pos + "px," + window.pageYOffset + "px,0px)";
        }
    }
}
//<div class="scroll" data-rate='0.8' data-direction='v'>
//<img src="https://placekitten.com/200/360" class="scroll" data-rate='0.8' data-direction='v'>