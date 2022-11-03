function main_messaging(){
    //.log(document.location.href.length > MESSAGES_CHAT_HREF.length);

    if (is_chatting())
    {
        ACTUAL_CHAT_URL = document.location.href;
        start_chat_bot();
    }

    setTimeout(() => { main_messaging(); }, 500);
}

function loaded(){
    console.log("Tinder bot loaded");
}

window.onload = function (){
    setTimeout(() =>
    {
        loaded();
        get_likes_images();
        main_messaging();
    }, 7000);
}