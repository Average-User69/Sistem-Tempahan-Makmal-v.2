//
//General variables
//

//Snap to
function snapTo(selectedDiv){
    var URL =  window.location.pathname;
    var URL2 = URL.substring(0, URL.lastIndexOf("/")+1);  
    var divToSnap = "";

    //snapToType
    var div1 = document.getElementById("navItem1");
    var div2 = document.getElementById("navItem2");
    var div3 = document.getElementById("navItem3");

    if (selectedDiv == div1){
        divToSnap = "test1.html";
    }
    else if(selectedDiv == div2){
        divToSnap = "gallery.html";
    }
    else{
        divToSnap = "jadual.html";
    }

    URL2 += divToSnap;
    console.log(URL2);
    window.open(URL2, "_self");
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

function displayImg(imgSelected){
    //General variable
    var galleryFocus = document.getElementById("galleryFocus");
    var galleryFocusCom = getComputedStyle(galleryFocus);
    var imageFocus = document.getElementById("imageFocus");
    var imageFocusCom = getComputedStyle(imageFocus);

    //Row1
    var img1Row1 = document.getElementById("image1-1");
    var img2Row1 = document.getElementById("image2-1");
    var img3Row1 = document.getElementById("image3-1");

    //Row 2
    var img1Row2 = document.getElementById("image1-2");
    var img2Row2 = document.getElementById("image2-2");
    var img3Row2 = document.getElementById("image3-2");
    //Img Row Array
    var imgArray = [];
    imgArray += (img1Row1, img2Row1, img3Row1, img1Row2, img2Row2, img3Row2);

    if(galleryFocusCom.display == "none"){//Gallery is opened
        galleryFocus.style.display = "block";
        galleryFocus.style.height = "110vh";
        galleryFocus.style.width = "100%";
        galleryFocus.style.marginTop = "0%";
        for (i=0; i< imgArray.length; i++){
            if (imgArray[i]){//User selected an image
                imageFocus.style.backgroundImage = "url(imgFolder/idola.jpg)";
                imageFocus.style.backgroundRepeat = "no-repeat";
                imageFocus.style.backgroundSize = "cover";
            }
        }
    }
    else{
        galleryFocus.style.height = "0%";//Gallery is closed
        galleryFocus.style.width = "0%";
        galleryFocus.style.display = "none";
    }
}
