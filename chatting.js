
function start_chat_bot(){
    var chat = new Chat();

    if (chat.element == null) setTimeout( () => {start_chat_bot();}, 2000);

    console.log("Started checking chat with id:"+chat.id);

    chatting(chat);
}

function chatting(chat){
    if(window.location.href == chat.full_url)
    {
        chat.run();
        setTimeout(() => {chatting(chat);}, 2000);
    }
    else
    {
        console.log("Stopped viewing chat " + chat.profile_id);
        ACTUAL_CHAT_URL = "";
    }
    
}



