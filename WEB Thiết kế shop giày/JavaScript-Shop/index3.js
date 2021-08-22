function changeImg(obj) {
    var path = obj.src
    var img = document.getElementById("main-Img")
    img.src = path
}

function init() {
    var images = document.querySelectorAll("div.thumb img")
    for (var i = 0; i < images.length; i++)
        images[i].onclick = function() {
            var path = this.src
            var img = document.getElementById("main-Img")
            img.src = path
        }

    var buttons = document.querySelectorAll("#Product-Sample.SampleProduct a")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            var infoSneaker = this.getAttribute("rel")
            var img = document.getElementById("main-Img")
            img.src = `images/img-GiayJodan/ ${infoSneaker}`
        }
    }
}

