function clone_card() {
    let originalCard = document.querySelector('.card');
    let clonedCard = originalCard.cloneNode(true);

    document.body.appendChild(clonedCard);
}


function change_image(getElementById) {
    let photos = document.getElementsByClassName("profile-pic");
    console.log(photos.length);
    for (let i = 0; i < photos.length; i++) {
        photos[i].src = "https://cdn.intra.42.fr/users/70527f1f775c37b0aa026b07036701b4/lde-mich.jpg";
    }
}

function change_text(getElementById) {
    document.getElementById("myName").textContent = "lde-mich";
    let names = document.getElementsByClassName("name-class");
    for (let i = 0; i < names.length; i++) {
        names[i].textContent = "lde-mich";
    }
}

