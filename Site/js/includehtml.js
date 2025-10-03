// JavaScript Document




/*$.ajax({
  url: "common_page/top.html",
  cache: false
}).done(function( html ) {
  $("#header_wrapper").append(html);
});
*/


$(document).ready(function(){ 

$.get("include/top.html",function(data){ //初始將a.html include div#iframe
$("#header").html(data);
});

$.get("include/se_left.html",function(data){ //初始將a.html include div#iframe
$("#se_left").html(data);
});
$.get("include/pro_left.html",function(data){ //初始將a.html include div#iframe
$("#pro_left").html(data);
});

$.get("include/footer.html",function(data){ //初始將a.html include div#iframe
$("#footer").html(data);
});
});