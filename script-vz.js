let name = prompt ("Ingresa tu nombre");

function question1 (type) {
  const  formucontainer = document.querySelector("#formu");
  const formucontainer1a = document.querySelector("#form1");
  const formucontainer2a = document.querySelector("#form2")
  formucontainer.style.display = "none";
  formucontainer1a.style.display = "block";
  switch (type) {
    case "Peru":
      const form1a = document.querySelector("#form1");
      form1a.style.display = "block";
      console.log("Peru")
      break;
    case "Venezuela":
      const form2b = document.querySelector("#form2");
      form2b.style.display = "block";
      console.log ("Venezuela")
      break;
    default:
      break;
  }
}

const avila = (option) => {
  switch(option) {

    case "a.Caracas":
      alert ("Respuesta correcta")
      break;

    case "b.Tucupita":
      alert ("Respuesta incorrecta")
      break;

    case "c.San Cristobal":
      alert ("Respuesta incorrecta")
      break;
  }
}

const CuevaDelGuacharo = (option) => {
  switch(option) {

    case "a.Trujillo":
      alert ("Respuesta incorrecta")
      break;

    case "b.Barinas":
      alert ("Respuesta incorrecta")
      break;

    case "c.Monagas":
      alert ("Respuesta correcta")
      break;
  }
}

const MonumentoMantoDeMaria = (option) => {
  switch(option) {

    case "a.Bolivar":
      alert ("Respuesta incorrecta")
      break;

    case "b.Lara":
      alert ("Respuesta correcta")
      break;

    case "c.Delta Amacuro":
      alert ("Respuesta incorrecta")
      break;
  }
}
