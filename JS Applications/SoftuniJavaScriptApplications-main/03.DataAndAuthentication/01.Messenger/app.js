function attachEvents() {
    const sumbitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const nameLabel = document.getElementsByName('author')[0];
    const messageLabel = document.getElementsByName('content')[0];
    const textArea = document.getElementById('messages');
    const url = 'http://localhost:3030/jsonstore/messenger';


    //debugger;
    const nameValue = nameLabel.value;
    const messageValue = messageLabel.value;
    sumbitBtn.addEventListener('click', postComment);
    refreshBtn.addEventListener('click', refreshComments)

    async function postComment(){
        //debugger;
        const body = {
            author: nameLabel.value,
            content: messageLabel.value
        }
    
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
    
            },
            body: JSON.stringify(body)
        });
    
    }

    async function refreshComments(){
        const response = await fetch(url);
        const body = await response.json();
        debugger;

        let buff = '';


        Object.entries(body).forEach(message => {
            let messageObj = message[1];
            let messageAuthor = messageObj.author;
            let messageText = messageObj.content;
            buff += `${messageAuthor}: ${messageText}\n`;
        })

        textArea.textContent = buff;
    }
}



attachEvents();