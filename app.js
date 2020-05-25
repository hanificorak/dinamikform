$('body').on('click', '.create-form-element-btn', function () {
    create();
}).on('click', '.view-form-btn', function () {

    let html = $(".form-body").html();

    $("#view-code-modal .code-html").val($.trim(html));

    $("#view-code-modal").modal("show");
});


function create() {
    let name = $(".inputname").val();
    let placeholder = $(".inputplaceholder").val();
    let type = $(".type").val();
    let input = "";
    let html = "";

    if(name.trim() == ""){
        alert("İnput adı alanı boş geçilemez!");
        return;
    }

    switch (type) {
        case "text":
        case "number":
        case "email":
            input = "<input type='" + type + "' class='form-control' placeholder='" + placeholder + "'/>"
            break;
        case "textarea":
            input = "<textarea class='form-control' placeholder='" + placeholder + "'></textarea>";
            break;
        case "select":
            input = "<select class='form-control'></select>";
            break;

    }

    html =
        "<div class='form-group row'>" +
        " <label class='col-form-label col-sm-3'>" + name + "</label>" +
        " <div class='col-sm-9'>" + input + "</div>" +
        "</div>";

    $(".form-body").append(html);
}
