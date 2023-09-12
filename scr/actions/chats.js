const API_BASE_URL = "https://southamerica-east1-codai-development.cloudfunctions.net/codai"


function getAuthToken(user) {
    
    
    if (user) {
        const idToken = user.accessToken;
        return idToken;
    }
    
    return null;
}



export async function getChatsByUserId(user) {

    const authToken = getAuthToken(user);

    if (!authToken) {
        return null;
    }


    const response = await fetch(`${API_BASE_URL}/chats/user/${user.uid}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return response.json();
}


// export async function getChatById(idChat, user) {
//     const authToken = await getAuthToken(user);


//     if (!authToken) {
//         return null;
//     }

//     const response = await fetch(`${API_BASE_URL}/chats/${idChat}`, {
//         headers: {
//             'Authorization': `Bearer ${authToken}`,
//         },
//     });

//     return response.json();
// }

export async function patchChatTitle(idChat, title, user) {
    const authToken = await getAuthToken(user);
    const userId = user.uid;


    if (!authToken) {

        return null;
    }

    console.log('authToken', authToken)

    const response = await fetch(`${API_BASE_URL}/chats/title/${idChat}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            title,
            userId,
        }),
    });

    return response.json();
}


export async function deleteChat(chatId, user) {
    const authToken = await getAuthToken(user);


    if (!authToken) {

        return null;
    }

    const response = await fetch(`${API_BASE_URL}/chats/${chatId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    })

    return response;
}