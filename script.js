loadHeader();

function loadHeader () {
    $(document).ready(function(){
        $("#nav").load("https://raw.githubusercontent.com/ROYGBIV11/clarinet-website/main/header.html?token=AS74IANMD3B6VSPGNDALQHTAIAIDM");  
    });
    selectActive();
}

function selectActive() {
    for (i=1; i<=3; i++) {
        if (document.getElementById("page" + i) != null) {
            var linkName = document.getElementById("link" + i).innerHTML;
            alert(linkName);
//            document.getElementById("link" + i).innerHTML = "<span class=active>" + linkName + "</span>";   
        }
        alert("hi" + i);
    }
}