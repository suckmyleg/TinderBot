function main_messaging(){
    //.log(document.location.href.length > MESSAGES_CHAT_HREF.length);

    if (document.location.href.includes(MESSAGES_CHAT_HREF) && document.location.href.length > MESSAGES_CHAT_HREF.length && ACTUAL_CHAT_URL != document.location.href)
    {
        ACTUAL_CHAT_URL = document.location.href;
        start_chat_bot();
    }

    setTimeout(() => { main_messaging(); }, 500)
}

function loaded(){
    console.log("Thinder bot loaded");
}


main_messaging();