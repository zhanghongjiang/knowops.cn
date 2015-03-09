(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('select').material_select();
    $("input[type='checkbox']").click(function(){
        var buytotal=0;
        var renttotal=0;
        $("input[type='checkbox']:checked").each(function () {      
     		buytotal+=parseInt($(this).attr("value"));
     		renttotal+=parseInt($(this).attr("rent"));
        });         
        var year = parseFloat($(":selected").attr("value"));             
        $("#buytotal").html(buytotal); 
        $("#renttotal").html(year*renttotal);  

    })
    $("#year").change(function(){
       var year = parseFloat($(":selected").attr("value")); 
       var renttotal = parseInt($("#renttotal").text());
        $("#renttotal").html(year*renttotal);  

    })

  }); // end of document ready
})(jQuery); // end of jQuery name space