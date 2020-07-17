$(document).ready(function() {

    let p = $(".pan1");
    let d = $(".pan2");
    let r = $("#resize");

    let curr_width = p.width()
    let unlock = false;

    $('#code_textarea1').keyup(function() {
        let val = $('#code_textarea1').val();//Получаем данные из input
        $('#code_textarea1_result').html(val);//Вставляем значение в тег с классом txt
    });

    $('#code_clear').click(function () {
        $('#code_textarea1_result').html('')

    })

    $(".dropdown-trigger").dropdown();

    $(document).mousemove(function(e) {
        let change = curr_width + (e.clientX - curr_width);

        if(unlock) {
            if(change > 299) {
                $("#debug").text(e.clientX + " resize");
                p.css("width", change);
                d.css("margin-left", change);
            }
            else {
                p.css("width", 300);
                d.css("margin-left", 300);
            }
        }
    });

    r.mousedown(function(e) {
        curr_width = p.width();
        unlock = true;
        r.css("background-color", "rgba(0, 0, 0, 0.3)");
    });

    $(document).mousedown(function(e) {
        if(unlock) {
            e.preventDefault();
        }
    });

    $(document).mouseup(function(e) {
        unlock = false;
        $("#debug").text("");
        r.css("background-color", "rgba(0, 0, 0, 0.2)");
    });
});