function get_likes_images(){
    var urls = [];

    setupLikesImages(urls);
}

function setupLikesImages(urls){
    for (var url in urls){
        var element = fromUrlToElement(url);
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

    for (var element2 in LIKES_ELEMENTS){
        if (checkIdenticalImages(baseElement, element2)) return true;
    }
    return false;
}

function checkActualInLikes(){
    var element = document.getElementById("");

    var url = getUrlFromImageBackground(element);

    var elementImage = fromUrlToElement(url); 

    return checkActualInLikes(elementImage);
}

//checkIdenticalImages();