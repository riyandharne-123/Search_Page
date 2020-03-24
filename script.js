$(document).ready(function(){
    // Get value on button click and redirect to search result page
    $("#submit_query").click(function(){
        var str = $("#question_search").val();
        window.location.href = "http://www.google.com/search?q="+str;
    });
});
