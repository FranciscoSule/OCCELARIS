document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "543426396023";
  
    let cliente = document.querySelector("#cliente").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    let empleado = document.querySelector("#empleado").value;
    let servicio = document.querySelector("#servicio").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          
          *%0A%0A
          *Nombre y Apellido 👤*%0A
          ${cliente}%0A
          *Producto*%0A
          ${empleado}%0A
          *Color*%0A
          ${fecha}%0A
          *Tamaño*%0A
          ${hora}%0A
          *💰 que se desea realizar*%0A
          ${servicio}`;
  
    if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu pedido, ${cliente}`;
  
    window.open(url);
  });