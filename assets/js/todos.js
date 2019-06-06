// Check off specific todo by clicking
$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

// Click on the X to delete todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type = 'text']").keypress(function(){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
  }
  });