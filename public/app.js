$(document).ready(function() {

    let p = $(".pan1");
    let d = $(".pan2");
    let r = $("#resize");
    const $code_textarea =  $('#code_textarea1')
    const $code_textarea_result = $('#code_textarea1_result')
    let globalHash = window.location.hash
    let globalRes = localStorage.getItem(globalHash)
    $code_textarea.val(globalRes)
    $code_textarea_result.html(globalRes)

    let curr_width = p.width()
    let unlock = false;

    $code_textarea.keyup(function() {
        let val = $code_textarea.val();//Получаем данные из input
        let hash = window.location.hash
        if (hash === '') {
            hash = 'general'
        }
        localStorage.setItem(hash.toString(), val.toString())

        $code_textarea_result.html(val);//Вставляем значение в тег с классом txt
    });

    $('#code_clear').click(function () {
        $code_textarea_result.html('')

    })

    $('.lang_change').click(function () {
        let res;
        let language = $(this).html()

        if (language === 'JavaScript') {
            res = localStorage.getItem('#javascript')
        }
        if (language === 'PHP') {
            res = localStorage.getItem('#php')
        }
        if (language === 'Python') {
            res = localStorage.getItem('#python')
        }
        console.log(language)
        console.log(res)
        $code_textarea.val(res)
        $code_textarea_result.html(res)
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