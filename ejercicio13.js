function crearInputs() {
    for (let i = 0; i < 101; i++) {
      
      let input = document.createElement("input");
      input.type = "checkbox";
      input.id = "input"
      input.className = "checkbox";

      let randomValue = Math.floor(Math.random() * 100);

      let label = document.createElement("label");
      label.textContent = randomValue;

      document.body.appendChild(input);
      document.body.appendChild(label);

    }
  }

  function marcar(){
    document.getElementById("input").checked = true;
  } 

  function desmarcar() {
    document.getElementById("input").checked = false;
  }

  crearInputs();

  document.getElementById("marcar").addEventListener("click", function(){
    marcar();
  })

  document.getElementById("desmarcar").addEventListener("click", function(){
    desmarcar();
  })