document.getElementById('join-button').addEventListener('click', function() {
    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;

    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';

    document.getElementById('username').innerText = name;

    // Añadir el usuario a la lista de miembros
    addUserToList(name);

    // Aquí podrías enviar los datos de registro a un servidor o almacenarlos localmente
});

document.getElementById('send-button').addEventListener('click', function() {
    let message = document.getElementById('message-input').value;
    let name = document.getElementById('username').innerText;

    let messageElement = document.createElement('div');
    messageElement.innerText = name + ': ' + message;

    document.getElementById('chat-messages').appendChild(messageElement);

    document.getElementById('message-input').value = '';
});

document.getElementById('settings-button').addEventListener('click', function() {
    let newName = prompt('Introduce un nuevo nombre:');
    let newImageUrl = prompt('Introduce la URL de la nueva imagen de perfil:');
    let newBannerUrl = prompt('Introduce la URL del nuevo banner:');

    document.getElementById('username').innerText = newName;
    document.getElementById('profile-banner').getElementsByTagName('img')[0].src = newImageUrl;
    document.getElementById('profile-banner').style.backgroundImage = `url(${newBannerUrl})`;

    // Actualizar el nombre en la lista de miembros
    updateUserInList(newName);
});

// Función para añadir usuario a la lista
function addUserToList(username) {
    let userList = document.getElementById('user-list');
    let userItem = document.createElement('li');
    userItem.innerText = username;
    userItem.id = 'user-' + username; // Añadir un ID único para cada usuario
    userList.appendChild(userItem);
}

// Función para actualizar el nombre del usuario en la lista
function updateUserInList(newUsername) {
    let oldUsername = document.getElementById('username').innerText;
    let userItem = document.getElementById('user-' + oldUsername);
    if (userItem) {
        userItem.innerText = newUsername;
        userItem.id = 'user-' + newUsername; // Actualizar el ID único
    }
}

// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("profile-img");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// To also open the banner, you can duplicate the above functionality for the banner or use the same method.
var profileBanner = document.getElementById("profile-banner");
profileBanner.onclick = function(event) {
    if (event.target.tagName === "IMG") {
        modal.style.display = "block";
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    }
}
