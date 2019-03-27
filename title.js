if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = [ "F", "Fo", "For", "Foru", "Forum", "ForumT", "ForumTe", "ForumTea", "ForumTeam", "ForumTea", "ForumTe", "ForumT", "Forum", "Foru", "For", "Fo", "F"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
