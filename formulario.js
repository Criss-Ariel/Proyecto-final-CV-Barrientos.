function validacionDatosObligatorios() {                                /*Función para validar campos obligatorios*/
  let nom = document.forms["comentarios"]["nombre"].value;		/*Validar que se ingrese el nombre*/
  if (nom == "") {
    alert("Ingrese su Nombre.");
    return false;
  }


  let ape = document.forms["comentarios"]["apellido"].value;		/*Validar que se ingrese el apellido*/
  if (ape == "") {
    alert("Ingrese su Apellido.");
    return false;
  }

let e = document.forms["comentarios"]["email"].value;			/*Validar que se ingrese el email*/
  if (e == "") {
    alert("Ingrese su E-mail.");
    return false;
}


  let men = document.forms["comentarios"]["mensaje"].value;		/*Validar que se ingrese el comentario*/
  if (men == "") {
    alert("Ingrese su Mensaje.");
    return false;
  }
}