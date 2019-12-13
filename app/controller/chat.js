
module.exports = {
    OnNewMessage: function(sender_id, receiver_id, text, image, video) {
        console.log("You received a new message", text);
    },
    OnEditMessage: function() {
        console.log("You Edited a Message");
    }
}