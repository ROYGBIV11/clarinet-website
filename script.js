selectActive();

function loadHeader () {
    $(document).ready(function(){
        $("#nav").load("header.html");  
    });
}

function selectActive() {
    for (i=1; i<=3; i++) {
        if (document.getElementById("page" + i) != null) {
            var linkName = document.getElementById("link" + i).innerHTML;
            alert(linkName);
            document.getElementById("link" + i).innerHTML = "<span class=active>" + linkName + "</span>";   
        }
        alert("hi" + i);
    }
    loadHeader();
}
