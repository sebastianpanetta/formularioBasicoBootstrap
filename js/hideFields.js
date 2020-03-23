$("#provincia_select").change(function () {
  if ($(this).val() == "") {
    $('#localidad').hide();
    $('#localidad_select').removeAttr('required');
    $('#localidad_select').removeAttr('data-error');
  } else {
    $('#localidad').show();
    $('#localidad_select').attr('required', '');
    $('#localidad_select').attr('data-error', 'This field is required.');

    $("#localidad_select").empty();
    var texto = "Elija una localidad";
    var valor = ""
    var o = new Option(texto, valor);
    $(o).html(texto);
    $("#localidad_select").append(o);

    switch ($(this).val()) {
      case "CABA":
        var texto = "Localidad CABA ejemplo 1";
        var valor = "localidadCaba1"
        var o = new Option(texto, valor);
        $(o).html(texto);
        $("#localidad_select").append(o);
        var texto = "Localidad CABA ejemplo 2";
        var valor = "localidadCaba2"
        var o = new Option(texto, valor);
        $(o).html(texto);
        $("#localidad_select").append(o);
        var texto = "Localidad CABA ejemplo 3";
        var valor = "localidadCaba3"
        var o = new Option(texto, valor);
        $(o).html(texto);
        $("#localidad_select").append(o);
        break;
      case "Buenos Aires":
        var texto = "Localidad Buenos Aires ejemplo 1";
        var valor = "localidadBsAs1"
        var o = new Option(texto, valor);
        $(o).html(texto);
        $("#localidad_select").append(o);
        var texto = "Localidad Buenos Aires ejemplo 2";
        var valor = "localidadBsAs2"
        var o = new Option(texto, valor);
        $(o).html(texto);
        $("#localidad_select").append(o);
        var texto = "Localidad Buenos Aires ejemplo 3";
        var valor = "localidadBsAs3"
        var o = new Option(texto, valor);
        $(o).html(texto);
        $("#localidad_select").append(o);
        break;
    }
  }
});
$("#provincia_select").trigger("change");
