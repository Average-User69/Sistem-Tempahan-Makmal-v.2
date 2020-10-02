//
//General variables
//

//Snap to
function snapTo(selectedDiv){
    var URL = "file:///D:/Presentation%20sistem%20tempahan%20makmal%20komputer/sistemTempahan2/test1.html" ;
    var divToSnap = "";

    //snapToType
    var div1 = document.getElementById("navItem1");
    var div2 = document.getElementById("navItem2");
    var div3 = document.getElementById("navItem3");

    if (selectedDiv == div1){
        divToSnap = "#headerItem1";
    }
    else if(selectedDiv == div2){
        divToSnap = "#bodyItem1         ";
    }
    else{
        divToSnap = "#footerItem1";
    }
    URL += divToSnap;
    console.log(URL);
    window.open(URL, "_self");
}

//openNewWindow (Open upon clicking the title)
function openWindow(divInstance){
    var URL = document.getElementsByTagName("Script");
    var URL2= URL[URL.length -1].src;
    var website = "";    
    URL = String(URL2).replace(/test1.js/g, "");

    /*  THIS IS A MRE RELIABLE WAY TO ELIMINATE STRING BUT I CN BE BOTHETRED WITH REGEX
    var placeHolder;
    var URL2;
    var lengthURL = URL2.length;
    URL2 = URL[URL.length -1].src;
    var elim = /a/;
    console.log(test2);
    //Removing test1.js from source
    while (lengthURL--){
        placeHolder = URL2[lengthURL];
        if (placeHolder && placeHolder.match(elim)){
            console.log("True:" +placeHolder);
            break
        }
        else{
            console.log("False:" +placeHolder);
        }
    }*/

    //Body Contents
    var titleTextHeader = document.getElementById("titleTextHeader");
    var titleTextBody = document.getElementById("titleTextBody");
    var titleTextFooter = document.getElementById("titleTextFooter");

    if (divInstance == titleTextHeader){
        website = "order.html";
        URL += website;
        window.open(URL, "_self");
    }
    else if(divInstance == titleTextBody){
        website = "gallery.html";
        URL += website;
        window.open(URL, "_self");
    }
    else{
        website = "jadual.html";
        URL += website;
        window.open(URL, "_self");
        
    }
}

//Burger Button Menu Toggle
function toggleMenu(){
    var focusCover = document.getElementById("focusCover");
    var focusCoverCom = getComputedStyle(focusCover);
    
    if (focusCoverCom.display == "none"){
        focusCover.style.display = "block";
    }
    else{
        focusCover.style.display = "none";
    }
}

