$(".box_add").on("click", function(){
  var valueInput = $(".box_input").val();
  $(".box_input").val('');
  $(".list").append('<li>' + '<p>' + valueInput + '</p>' + '<button class="remove_item">X</button><button class="edit_item">Edit</button></li>');
});

$(".box_remove").click(function(){
  $(document).find("li").remove();
});

$(document).on("click", ".remove_item", function () {
  $(this).parent().remove()
});

$(document).on("click", ".edit_item", function () {
  $(this).parent().addClass( "editing" );
  $(".box_input").focus();
});

$(".edit_all").on("click", function () {
  var editedValue = $(".box_input").val();
  $(document).find(".editing p").html( editedValue );
  $(".editing").removeClass("editing");
  $(".box_input").val('');
});