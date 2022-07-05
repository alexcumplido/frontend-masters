const ball = document.querySelector(".ball");
popmotion.animate({
    from: "0px",
    to: "100px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate (update) {
        ball.style.left = update;
    }
});

//# sourceMappingURL=index.9b4362e6.js.map
