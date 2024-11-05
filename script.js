id = "subcribe"

var submitButton = "Subscribe";
console.log(subcribeButton === "Subscribe");



$('#subscribe').click(function() {
    var clickedId = this.id;
    checkAnswer(clickedId, 'subscribe');
});

function checkAnswer(clickedId, correctId) {
    if (clickedId === correctId) {
        alert("Thank you for applying!");
    }
}