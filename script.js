
function videobtnAnimation() {
    var videocon = document.querySelector("#video-container")
    var elevatebtn = document.querySelector("#elevate")
    videocon.addEventListener("mouseenter", function () {
        // elevatebtn.style.opacity =1
        // elevatebtn.style.scale = 1
        //  one of the method to do this 
        gsap.to(elevatebtn, {
            scale: 1,
            opacity: 1
        })
    })

    videocon.addEventListener("mouseleave", function () {
        gsap.to(elevatebtn, {
            scale: 0,
            opacity: 0
        })
    })

    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(elevatebtn, {
            left: dets.x - 50,
            top: dets.y - 50,
        })
    })
}
videobtnAnimation()

var child1 = document.getElementById('child1');

child1.addEventListener('click', function () {

    window.location.href = 'https://www.apple.com/iphone/', '_blank';
})

var child2 = document.getElementById('child2');

child2.addEventListener('click', function () {

    window.location.href = 'https://www.apple.com/mac/', '_blank';
})

var child3 = document.getElementById('child3');

child3.addEventListener('click', function () {

    window.location.href = 'https://www.apple.com/ipad/', '_blank';
})


var child4 = document.getElementById('child4');

child4.addEventListener('click', function () {

    window.location.href = 'https://www.apple.com/airpods/', '_blank';
})

var child5 = document.getElementById('child5');

child5.addEventListener('click', function () {

    window.location.href = 'https://www.apple.com/watch/', '_blank';
})

var child6 = document.getElementById('child6');

child6.addEventListener('click', function () {

    window.location.href = 'https://www.apple.com/search/airtag?sel=accessories&src=globalnav&tab=accessories&page=1', '_blank';
})

