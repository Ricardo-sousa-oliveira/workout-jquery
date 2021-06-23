$(".box_add").on("click", function(){
  var valueInput = $(".box_input").val();
  $(".box_input").val('');
  $(".list").append('<li>' + '<p>' + valueInput + '</p>' + '<button class="remove_item">X</button><button class="edit_item">Edit</button></li>');
});

var items = 0;
$(".box_remove").click(function(){
  $(document).find("li").remove();
  items = 0;
  $(".number_itens").html('Número de itens atual ' + items);

});
$(document).on("click", ".remove_item", function () {
  $(this).parent().remove()
  items--;
  $(".number_itens").html('Número de itens atual ' + items);
});

$(document).on("click", ".edit_item", function () {
  $(".edit_item").parent().removeClass( "editing" );
  $(this).parent().addClass( "editing" );
  $(".box_input").focus();
});

$(".edit_all").on("click", function () {
  var editedValue = $(".box_input").val();
  $(document).find(".editing p").html( editedValue );
  $(".editing").removeClass("editing");
  $(".box_input").val('');
});

$(document).ready(function () {
  $(".number_itens").text('Número de itens atual ' + items);
  $(".box_add").click(function () {
    items++;
    $(".number_itens").html('Número de itens atual ' + items);
  });
  $(".remove_item").click(function () {
    items--;
  });
});

var numbers = [50, 50];
var soma = 0;

function addedNumbers (numbers) {
  var soma = 0;
  for (i =0; i < numbers.length; i++) {
    soma += numbers[i]
  }
  return soma;
};

console.log(addedNumbers(numbers));
