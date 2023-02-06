// $('.セレクタ名').on('click', function(event) {
//   イベント発生時に行われる処理
// });
$('#tab-contents .tab[id != "tab1"]').hide();

$(function() {
  $('#tab-menu a').on('click',function(event){
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();  
  event.preventDefault();
  });
});

