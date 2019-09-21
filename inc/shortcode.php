<?php


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
  add_shortcode('wpxlsdata', 'wpxlsdata_shortcode_wpxlsdata');
   function wpxlsdata_shortcode_wpxlsdata($atts, $content = null) 

    {
      
     $html="";
     $id_wpxlsdata= intval($atts["iddb"] );
     global $wpdb;

     switch ($atts["type"]) {
     	case 'tabel':

		    $table=$wpdb->prefix."wpxlsdata_meta";
		    $table2=$wpdb->prefix."wpxlsdata";
		    $wpxlsdata_meta=$wpdb->get_results("SELECT * FROM $table WHERE id_wpxlsdata=".$id_wpxlsdata);
		    $wpxlsdata=$wpdb->get_results("SELECT * FROM $table2 WHERE id_wpxlsdata=".$id_wpxlsdata);
            $table_name=$wpdb->prefix.$wpxlsdata[0]->xlsname;
            $xlsrows=$wpdb->get_results("SELECT * FROM $table_name ".$querystate." LIMIT 0,100");

  $html.=' <table  class="table">
      
      <thead>
        <tr>
          
          <th>'.__("Row" ,"wpxlsdata").'</th>';
          
          foreach ($wpxlsdata_meta as $key => $value) {  
           $html.=' <th>'.$value->meta_value .'</th>';
           } 
          
    $html.='</tr>
      </thead>
    
      <tbody>';
       
          $ir= 1 ;
          foreach ($xlsrows as  $value) {

           $html.='<tr>
            
            <td>'.$ir.'</td>';

           


             foreach ($wpxlsdata_meta as $k => $val) {  
              $kk=$val->dbcolumn;
              $html.='<td >'.$value->$kk.'</td>';
               
           

              }
      
          $html.='</tr>';


          $ir++; } 

     $html.='</tbody>
    </table>';


     		break;
     	
     	default:
     	$html='';	
     	break;
     }


     return $html; 
    }
