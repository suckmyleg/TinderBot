class Chat{
    load_local_data(){
        this.saved_data = get_data(this.local_storage_id);

        if (this.saved_data == undefined) {
            this.saved_data = {
                "messages":[],
                "interests":[],
                "gender":0
            };
            console.log("Created new chat data");
        }
        else{
            console.log("Loaded data");
        }
        console.log(this.saved_data);
    }
    
    save_local_data(){
        console.log("Saving data");

        save_data_local(this.saved_data, this.local_storage_id) 
    }

    constructor(){
        this.default_url = "https://tinder.com/app/messages/";
        this.full_url = window.location.href;
        this.profile_id = this.full_url.replace(this.default_url, "");
        this.id = "SC.chat_"+this.profile_id;
        this.local_storage_id = "chat_"+this.id;
        this.element = document.getElementById(this.id);

        this.load_local_data();
    }

    get_messages_on_screen(){
        var elements = this.chat_element.getElementsByClassName("div");
        
        var messages = [];

        for (var element in elements){
            message = {"date":0, "content":0, "user":0};

            console.log(element);

            messages.push(message);
        }

        return messages;
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