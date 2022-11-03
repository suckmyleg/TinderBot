const MESSAGES_CHAT_HREF = "https://tinder.com/app/messages/";
var ACTUAL_CHAT_URL = "";

class Chat{
    load_local_data(){
        this.saved_data = {
            "messages":[],
            "interests":[],
            "gender":0
        };
    }
    
    save_local_data(){
        console.log("Saving data");
    }

    constructor(){
        this.default_url = "https://tinder.com/app/messages/";
        this.full_url = window.location.href;
        this.profile_id = this.full_url.replace(this.default_url, "");
        this.chat_id = "SC.chat_"+this.profile_id;
        this.chat_element = document.getElementById(this.chat_id);

        this.load_local_data();
    }

    get_messages_on_screen(){
        return [];
    }

    get_new_messages(){
        var messages_on_screen = this.get_messages_on_screen();

        var new_messages = [];

        for (var i = 0; i < messages_on_screen.length; i++)
        {
            var message = messages_on_screen[i];
            if(this.saved_data.messages.includes(message)){
                new_messages.push(message);
            }
        }

        for (var i = 0; i < new_messages.length; i++)
        {
            this.saved_data.messages.push(new_messages[i]);
        }

        this.save_local_data();

        return new_messages;
    }

    run(){
        console.log("Run");
        var new_messages = this.get_new_messages();
    }
}

function start_chat_bot(){
    var chat = new Chat();

    chatting(chat);
}

function chatting(chat){
    if(window.location.href == chat.full_url)
    {
        chat.run();
        setTimeout(() => {
            chatting(chat);
        }, 500);
    }
    else
    {
        console.log("Stopped viewing chat " + chat.profile_id);
        ACTUAL_CHAT_URL = "";
    }
    
}









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