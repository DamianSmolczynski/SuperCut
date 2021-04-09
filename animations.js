let menuButton = $(".menu");
let contactButton = $("address a");
menuButton.on("mouseover", function(){
    $(this).css({
            "animation-name" : "navButtons", "animation-duration": "0.5s", "animation-fill-mode": "forwards",
            "animation-timing-function": "ease" }
    );});
menuButton.on("mouseout", function(){
    $(this).css({
        "animation-name" : "navButtonsReturn", "animation-duration": "0.5s", "animation-timing-function": "ease" });});

contactButton.on("mouseover", function(){
    $(this).css({
            'font-size' : '4vw'}
    );});

contactButton.on("mouseout", function(){
    $(this).css({
        'font-size' : '3.5vw'}
    );});