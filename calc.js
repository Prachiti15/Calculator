    function enter(c) {
        document.getElementById("screen").innerHTML += c
    }

    function clearAll() {
        document.getElementById("screen").innerHTML = ''
    }

    function calculateAll() {
        var screen = document.getElementById("screen").innerHTML
        document.getElementById("screen").innerHTML = eval(screen)
    }

    function reverse() {
        var screen = document.getElementById("screen").innerHTML
        document.getElementById("screen").innerHTML = eval(screen) * -1
    }