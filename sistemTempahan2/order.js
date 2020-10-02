//
//General variables
//

//Snap to
function snapTo(selectedDiv){
    var URL = "file:///D:/Presentation%20sistem%20tempahan%20makmal%20komputer/sistemTempahan2/test1.html";
    var URL2 = "file:///D:/Presentation%20sistem%20tempahan%20makmal%20komputer/sistemTempahan2/gallery.html";
    var URL3 = "file:///D:/Presentation%20sistem%20tempahan%20makmal%20komputer/sistemTempahan2/jadual.html";
    var divToSnap = "";

    //snapToType
    var div1 = document.getElementById("navItem1");
    var div2 = document.getElementById("navItem2");
    var div3 = document.getElementById("navItem3");

    if (selectedDiv == div1){
        divToSnap = "#headerItem1";
    }
    else if(selectedDiv == div2){
        divToSnap = "#bodyItem1";
    }
    else{
        divToSnap = "#contentContainer";
    }
    if (selectedDiv == div3){
        URL = URL3;
    }
    URL += divToSnap;
    console.log(URL);
    window.open(URL, "_self");
}

//openNewWindow (Open upon clicking the title)
function openWindow(divInstance){
    var URL = "file:///D:/Presentation%20sistem%20tempahan%20makmal%20komputer/sistemTempahan2/";
    var website = "";

    //Body Contents
    var titleTextHeader = document.getElementById("titleTextHeader");
    var titleTextBody = document.getElementById("titleTextBody");
    var titleTextFooter = document.getElementById("titleTextFooter");

    if (divInstance == titleTextHeader){
        website = "gallery.html";
        URL += website;
        window.open(URL, "_self");
    }
    else if(divInstance == titleTextBody){
        website = "jadual.html";
        URL += website;
        window.open(URL, "_self");
    }
    else{
        website = "contact.html";
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

/*
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
                imageFocus.style.backgroundColor = "#EDF5E1";
                imageFocus.style.zIndex= "10";
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
*/

//Cost Estimation
//SKRIP INI TIDAK BERFUNGSI TETAPI SAYA TERLALU MENGANTUK UNTU MEMBAIKINYA
function costEstimate(){
    //General Variables
    var outputMessage = document.createTextNode("");

    var OutputInstance = document.getElementById("costOutput");
    var orderDuration = document.getElementById("oderDuration").value;

    //Err message
    var Err1 = "Please input a valid int";

    //Script
    if (parseInt(orderDuration)){
        var orderDurationInt = parseInt(orderDuration);
        var outputValue = orderDurationInt * 50;
        outputMessage += outputValue;
        OutputInstance.appendChild(outputMessage);
    }
}

var costEstimateRun = setInterval(costEstimate, 250);