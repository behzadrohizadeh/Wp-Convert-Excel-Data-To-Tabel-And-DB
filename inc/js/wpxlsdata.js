


jQuery(document).ready(function($) {

var pss = 1; 
var updated= 0 ; 
var added= 0 ; 
			


		if ($("#startimport").length > 0  ) 
		{

			var s=parseInt($(".meter").attr("data-s"));  
			var p = parseInt($(".meter").attr("data-p"));  
			var path= $(".meter").attr("data-path");  
			var id_wpxlsdata= $(".meter").attr("data-id");  
            doimport(pss,p,s,path,id_wpxlsdata)
            $(".meter span").css({width:"5%"}); 

			

		
		}


		function doimport(s,p,sf,path,id_wpxlsdata) 

		{
          
           var data = {action: 'wpxlsdata_import',s:s,p:p,path:path,id_wpxlsdata:id_wpxlsdata};
           $.post(the_in_url.in_url, data, function(response)
           {

             var res=$.parseJSON(response);
           	if (res.status==200) 
           	{

           		added+=parseInt(res.in);
                updated+=parseInt(res.up);
           	}
            pss++;
           	if (pss <= p) 
           	{
              doimport(pss,p,sf,path,id_wpxlsdata)
            $(".meter span").css({width:(pss*sf)+"%"}); 

           	}

           	else 
           	{
           		
           		 $("#added").text($("#added").text()+" ="+added);
                 $("#updated").text($("#updated").text()+" ="+updated);
                 $(".meter").hide(400); 
                 $("#messageimport").show(400); 
                 $("#warning").hide(400)
           	}






           	//console.log(sf)
           });

		}	


$("#exportdata").click(function (){

  var type_file= $('input[name="typefile"]:checked').val();
  var s=parseInt($(".meter").attr("data-s"));  
  var id_wpxlsdata= $(".meter").attr("data-id");
  $(".meter span").css({width:"10%"}); 
 $(".meter").show(400);
  exportdata(s,type_file,id_wpxlsdata);
    


    })


function exportdata(s,type_file,id_wpxlsdata) 

{

var data = {action: 'wpxlsdata_export',s:pss,type_file:type_file,id_wpxlsdata:id_wpxlsdata};
    $.post(the_in_url.in_url, data, function(response)
    {
     var res=$.parseJSON(response);
     var pp=(pss/s)*100;
     $(".meter span").css({width:pp+"%"}); 
     $("#linkexports").append("<p><a href='"+res.url+"' target='_blank'>"+res.filename+"</a></p>")

    pss++;

    if (pss <= s) 
      {
        exportdata(s,type_file,id_wpxlsdata);
      }

     
     	else 
           	{
           		
           	 $("#linkexports").show(400);	 
            $(".meter").hide(400); 
              
           	}


    });


}

$(".valwpxlsdata").click(function () {
  
  $(this).hide() ; 
 $(".none").hide() ; 
  var id_row = $(this).attr("data-id"); 
  $("#"+id_row).show() ; 


});

$(".input-edit").focusout(function() {
	    var id_row = $(this).attr("id"); 
    $(this).hide() ;
   $("."+id_row).show() ; 

});
$(".input-edit").change(function (){

	var val = $(this).val() ; 
    var id_wpxlsdata = $(this).attr("data-db"); 
    var data_col = $(this).attr("data-col"); 
    var data_row = $(this).attr("data-row"); 
    var id_row = $(this).attr("id"); 


    var data = {action: 'edit_data_row',val:val,data_col:data_col,id_wpxlsdata:id_wpxlsdata,data_row:data_row};
    $.post(the_in_url.in_url, data, function(response)
    {
     var res=$.parseJSON(response);

    });

    $(this).hide() ;
   $("."+id_row).text(val) ; 
   $("."+id_row).show() ; 




});

});