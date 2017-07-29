$(document).ready(function(){

//CARGAR TAREA
  $("#agrega").click(function() {

    var input = $("#tareaInput").val();
    

    var tarea = input + "<span id = 'icono1'><i class='fa fa-check'></i></span>" +
       "<span id = 'icono2'><i class='fa fa-trash'></span>";

    if (input.length) {

      $('<li />', {html: tarea}).appendTo('#template');

      $("form").trigger("reset");

    }
});

//OCULTAR TAREA REALIZADA EN CLICK SOBRE TRASH
//Y ASIGNAR Un ID DE OCULTOS

$(document).on('click', '#icono2', function(){
  $(this).parent('li').hide();
  $(this).parent('li').attr('class', 'ocultos');
});


//TILDAR Y QUE EL ICONO QUEDE VERDE
$(document).on('click', '#icono1', function(){
  $(this).children('i').toggleClass('hecho');
});

//MOSTRAR TODAS LAS TAREAS ELIMINADAS
$('#eliminadas').click(function() {
  $('.ocultos').show();
});




});
console.log("se cargó el js");


//este funciona para dar clase pero no toggle
//$(document).on('click', '#icono1', function(){
  //$(this).children('i').css('color', 'green');
//});