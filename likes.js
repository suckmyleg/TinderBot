function get_likes_images(){
    // We get the images from people who matched us

    var urls = [];

    // Search for the image elements and we get the url
    var elements = document.getElementsByTagName("*");
    for (var i in elements){
        var element = elements[i];
        var style = element.style.backgroundImage;
        if (imageUrl.includes(IMAGES_BACKGROUND_COMMON)){
            console.log(imageUrl);

            urls.push(imageUrl);
        }
        else{
            console.log(element);
        }
    }

    setupLikesImages(urls);
}

function mainLikes(){
    get_likes_images();
    var identical = checkActualInLikes();
    
    if (identical != false){
        // If the current image being displayed in tinder is from someone who matched us
        // this code will be trigered

    }
}

function setupLikesImages(urls){
    for (var i in urls){
        var element = fromUrlToElement(urls[i]);
        if (!LIKES_ELEMENTS.includes(element)) LIKES_ELEMENTS.push(element);
    }
}

function getUrlFromImageBackground(element){
    return "";
}

function blurElement(element){
    element.style.filter = 'blur(3px)';
}

function fromUrlToElement(url){
    var a = new Image();
    a.src = url;
    return a;
}

function checkIdenticalImages(baseElement, element2){
    if (baseElement === getBase64Image(element2)) return true;
    return false;
}

function checkImageInLikes(element){
    var baseElement = getBase64Image(element);

    for (var i in LIKES_ELEMENTS){
        if (checkIdenticalImages(baseElement, LIKES_ELEMENTS[i])) return true;
    }
    return false;
}

function checkActualInLikes(){
    var element = document.getElementById("");

    var url = getUrlFromImageBackground(element);

    var elementImage = fromUrlToElement(url); 

    return checkImageInLikes(elementImage);
}

//checkIdenticalImages();
console.log("Loaded likes");