(function() {
    document.getElementById("firstButton").click();
    document.getElementById("firstProject").click();
})();
function openSkill(evt, skillName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openProject(evt, skillName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentProject");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksProject");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openInNewTab(e){
}