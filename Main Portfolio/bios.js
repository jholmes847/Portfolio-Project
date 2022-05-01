$(document).ready(function() {
    // on click on  setting button
    $(".button").click(function() {
        var val = $(this).attr('id');
        if (val == 1) {
            $("ul").hide();
            $(this).attr('id', '0');
        } else {
            $("ul").show();
            $(this).attr('id', '1');
        }

    });

   
    $("ul, .button").mouseup(function() {
        return false;
    });

   
    $(document).mouseup(function() {
        $("ul").hide();
        $(".button").attr('id', '0');
    });
});