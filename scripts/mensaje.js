document.addEventListener("DOMContentLoaded", function () {
  const hora = new Date().getHours();
  let saludo = "Hola";

  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  const mensaje = encodeURIComponent(
    `${saludo}, me comunico desde su página web. Deseo obtener más información sobre los cursos y carreras que ofrecen.`
  );

  const enlace = document.querySelector(".whatsapp-btn");
  enlace.href = `https://wa.me/59171418791?text=${mensaje}`;
});
