const hijab = document.getElementById("hijab");
const styleName = document.getElementById("styleName");
const styleDescription = document.getElementById("styleDescription");

function changeStyle(name, description) {
  styleName.textContent = "Hijab " + name;
  styleDescription.textContent = description;

  if (name === "Pashmina") {
    hijab.style.borderRadius = "50% 50% 35% 35%";
    hijab.style.transform = "rotate(0deg)";
  }

  if (name === "Segi Empat") {
    hijab.style.borderRadius = "20% 20% 40% 40%";
    hijab.style.transform = "rotate(0deg)";
  }

  if (name === "Turban") {
    hijab.style.borderRadius = "50% 50% 20% 20%";
    hijab.style.height = "145px";
    hijab.style.transform = "rotate(-2deg)";
  } else {
    hijab.style.height = "190px";
  }
}

function changeColor(color) {
  hijab.style.background = color;
}

