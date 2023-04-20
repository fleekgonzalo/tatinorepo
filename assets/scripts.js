function toggleContent(id, button) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
      element.style.display = "block";
      button.innerHTML = "Leer menos";
    } else {
      element.style.display = "none";
      button.innerHTML = "Leer más";
    }
  }
  
  