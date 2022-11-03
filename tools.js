function save_data_local(data, id){
    localStorage.setItem("TinderBot_"+id, JSON.stringify(data));
}

function get_data(id){
    return JSON.parse(localStorage.getItem("TinderBot_"+id));
}

function remove_data(id){
    localStorage.removeItem("TinderBot_"+id);
}

function in_inbox(){
    return document.location.href.includes(MESSAGES_CHAT_HREF);
}

function is_chatting(){
    return (in_inbox() && document.location.href.length > MESSAGES_CHAT_HREF.length && ACTUAL_CHAT_URL != document.location.href);
}
