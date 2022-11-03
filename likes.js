function get_likes_images(){
    
}


function blur_image(){

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

    return checkActualInLikes(element);
}

//checkIdenticalImages();