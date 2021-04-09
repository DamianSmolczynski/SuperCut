let menuButton = $(".menu");
let contactButton = $("address a");
menuButton.on("mouseover", function(){
    $(this).css({
            'font-size' : '3.5vw'}
    );});
menuButton.on("mouseout", function(){
    $(this).css("font-size","3.1vw");});

contactButton.on("mouseover", function(){
    $(this).css({
            'font-size' : '4vw'}
    );});

contactButton.on("mouseout", function(){
    $(this).css({
        'font-size' : '3.5vw'}
    );});