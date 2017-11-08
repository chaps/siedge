function raise_modal(obj){
    var img_url = obj.getAttribute("data-img");
    var text = obj.getAttribute("data-text");
    var title =  obj.getAttribute("data-title");
    var modal = $("#myModal")
    $("#modalImagesTitle").html(title);
    $("#modalImagesBodyP").html(text);
    $("#modalImagesContent").css("background-image", "url('/"+img_url+"')");
    $("#modalImagesContent").css("height", window.innerHeight);
    //$("#modalImagesContent").css("background-size", "100% 100%");
    modal.modal("show");
}