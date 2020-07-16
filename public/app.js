$(document).ready(function() {
    const p = $(".pan1");
    const d = $(".pan2");
    const r = $("#resize");


    let curr_width = p.width()
    console.log(curr_width)
    let unlock = false;

    $(document).mousemove(function(e) {
        let change = Number(curr_width + e.clientX);

        //console.log(change)
        if(unlock) {
            if(change > 199) {
                $("#debug").text(e.clientX + " resize");
                p.css("width", change);
                //d.css("margin-left", e.clientX);
            }
            else {
                //p.css("width", 200);
                //d.css("margin-left", 200);
            }
        }
    });

    r.mousedown(function(e) {
        //curr_width = p.width();
        unlock = true;
        r.css("background-color", "rgba(0, 0, 0, 0.2)");
    });

    $(document).mousedown(function(e) {
        if(unlock) {
            e.preventDefault();
        }
    });

    $(document).mouseup(function(e) {
        unlock = false;
        $("#debug").text("");
        r.css("background-color", "rgba(0, 0, 0, 0.1)");
    });
});