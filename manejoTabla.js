$(function() {

  $("#btnAgregar").click(function() {
    $("#tbodyDatos").append("<tr id='tr"+$("#txtCodigo").val()+"'><td>"+$("#txtCodigo").val()+"</td><td>"+$("#txtNombre").val()+
    "</td><td>"+$("#txtApellido").val()+"</td><td>"+$("#txtEdad").val()+"</td><td><input type='button' id='"+$("#txtCodigo").val()+"' class='Eliminar' value='Eliminar'></td></tr>");
  });

  $(document).on('click', '.Eliminar', function() {
    var del = $(this).attr("id");
      $('#tr' + del + '').remove();
    });
});