$('#telefone').mask('00 - 000000009');
$('#telefone').blur(function(event) {
   if($(this).val().length == 15){ // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
      $('#telefone').mask('00 - 000000009');
   } else {
      $('#telefone').mask('00 - 000000009');
   }
});