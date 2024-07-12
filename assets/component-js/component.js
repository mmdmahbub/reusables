function loadingGif(append_to_id,source,append_to_body = false){
    var append_to = '';
    if(append_to_body === true){
        var append_to = document.body;
    }else{
        if(append_to_id == ''){
            return console.log('Loading Gif Id cant be empty.');
        }
        var append_to = document.getElementById(append_to_id);
    }
    console.log(append_to_body);

    var img = document.createElement("IMG");
    append_to.style.textAlign = 'center';
    img.setAttribute('src',source);
    img.setAttribute('class','loader-image');
    img.setAttribute('width',50);
    append_to.appendChild(img);

}