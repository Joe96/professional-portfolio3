$(document).ready(function() {
    $("#subject").on('change', function(){
        $(".data").hide();
        $("#" + $(this).val()).fadeIn(700);
    }).change();
});