agregarImg();
function agregarImg() {
    var imagenes = [
        "assets/img/portafolio/cabin.png",
        "assets/img/portafolio/cake.png",
        "assets/img/portafolio/circus.png",
        "assets/img/portafolio/game.png",
        "assets/img/portafolio/safe.png",
        "assets/img/portafolio/submarine.png"
    ];
    for (var i = 0; i < imagenes.length; i++) {
    	var padre = document.getElementsByClassName('box-portafolio')[0];
        var tag_img = document.createElement('img');
        tag_img.setAttribute('src', imagenes[i]);
        tag_img.alt = 'imagen '+i;
        padre.appendChild(tag_img);
    }
}