var timer = document.getElementById('counter-time');
var div = document.getElementById('number-div');
var containerdiv = document.getElementById('container');

    var counter = 10;
    setTimeout(function(){
        timer.innerText = counter--;
        setTimeout(function(){
            timer.innerText = counter--;
            setTimeout(function(){
                timer.innerText = counter--;
                setTimeout(function(){
                    timer.innerText = counter--;
                    setTimeout(function(){
                        timer.innerText = counter--;
                        setTimeout(function(){
                            timer.innerText = counter--;
                            setTimeout(function(){
                                timer.innerText = counter--;
                                setTimeout(function(){
                                    timer.innerText = counter--;
                                    setTimeout(function(){
                                        timer.innerText = counter--;
                                        setTimeout(function(){
                                            timer.innerText = counter--;
                                            setTimeout(function(){
                                                timer.innerText = "";
                                                div.style.fontSize = "650%";
                                                div.style.boxShadow = "none";
                                                timer.style.color = "magenta";
                                                div.style.backdropFilter = "none"
                                                div.style.border = "none"
                                                div.style.background = "transparent";
                                                containerdiv.style.backgroundImage = "url('/newyear.jpg')"
                                                containerdiv.style.backgroundPosition = "cover";                                                
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)

