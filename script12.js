$(document).ready(function () {

    $("input").on("keyup", function () {
        
        let value = $(this).val().toLowerCase();
        $("table tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        }) 
    })
})