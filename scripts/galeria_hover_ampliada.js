document.addEventListener("DOMContentLoaded", function () {
  let puedeMostrar = true;

  function mostrarAmpliada(elemento) {
    if (!puedeMostrar) return;

    puedeMostrar = false;
    setTimeout(() => {
      puedeMostrar = true;
    }, 700);

    const modal = document.getElementById("hoverAmpliada");
    const img = document.getElementById("imgAmpliada");
    if (!modal || !img) return;

    img.src = elemento.src;
    modal.classList.add("mostrar");

    modal.onclick = () => ocultarAmpliada();
  }

  function ocultarAmpliada() {
    const modal = document.getElementById("hoverAmpliada");
    if (!modal) return;

    modal.classList.remove("mostrar");

    setTimeout(() => {
      const img = document.getElementById("imgAmpliada");
      if (img) img.src = "";
    }, 300);
  }

  window.addEventListener("scroll", ocultarAmpliada);

  const hoverModal = document.getElementById("hoverAmpliada");
  if (hoverModal) {
    hoverModal.addEventListener("mousemove", function (e) {
      const rect = hoverModal.getBoundingClientRect();
      const buffer = 150;

      if (
        e.clientX < rect.left + buffer ||
        e.clientX > rect.right - buffer ||
        e.clientY < rect.top + buffer ||
        e.clientY > rect.bottom - buffer
      ) {
        ocultarAmpliada();
      }
    });
  }

  window.mostrarAmpliada = mostrarAmpliada;
});
