/*  MODO OSCURO (Funciona en las 3 páginas y se recuerda) */
const btnTema = document.getElementById("btn-tema");

// Revisar si el usuario ya había elegido modo oscuro antes
if (localStorage.getItem("temaBeeCalderones") === "oscuro") {
  document.body.classList.add("oscuro");
  if (btnTema) {
    btnTema.textContent = "Modo claro"; 
  }
}

function alternarTema() {
  document.body.classList.toggle("oscuro");
  const esOscuro = document.body.classList.contains("oscuro");

  if (esOscuro) {
    localStorage.setItem("temaBeeCalderones", "oscuro");
    btnTema.textContent = "Modo claro";
  } else {
    localStorage.setItem("temaBeeCalderones", "claro");
    btnTema.textContent = "Modo oscuro";
  }
}

if (btnTema) {
  btnTema.addEventListener("click", alternarTema);
}

/* MENÚ HAMBURGUESA Y AÑO AUTOMÁTICO EN EL FOOTER */
const btnMenu = document.getElementById("btn-menu");
const menuNav = document.querySelector("nav");

function alternarMenu() {
  menuNav.classList.toggle("abierto");
  const estaAbierto = menuNav.classList.contains("abierto");
  btnMenu.setAttribute("aria-expanded", estaAbierto);
}

if (btnMenu && menuNav) {
  btnMenu.addEventListener("click", alternarMenu);
}

// Año automático en el pie de página
const spanAnio = document.getElementById("anio");
if (spanAnio) {
  spanAnio.textContent = new Date().getFullYear();
}

/*  BOTÓN VOLVER ARRIBA */
const btnArriba = document.getElementById("btn-arriba");

if (btnArriba) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btnArriba.hidden = false;
    } else {
      btnArriba.hidden = true;
    }
  });

  btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


const productosBeeCalderones = [
  {
    nombre: "Miel de abeja — Galón",
    categoria: "Miel",
    precio: 2400,
    descripcion: "Presentación de gran capacidad, ideal para hogares, clientes frecuentes y establecimientos."
  },
  {
    nombre: "Miel de abeja — Medio galón",
    categoria: "Miel",
    precio: 1200,
    descripcion: "Alternativa práctica para quienes desean una buena cantidad de miel para el consumo habitual."
  },
  {
    nombre: "Miel de abeja — Botella",
    categoria: "Miel",
    precio: 800,
    descripcion: "Presentación cómoda y fácil de manejar para acompañar alimentos y endulzar bebidas."
  },
  {
    nombre: "Miel con panal artesanal",
    categoria: "Miel",
    precio: 950,
    descripcion: "Miel pura acompañada de trozos de panal natural recién cosechado de nuestras colmenas."
  },
  {
    nombre: "Evaluación de enjambres",
    categoria: "Servicio",
    precio: 0,
    descripcion: "Inspección de seguridad y viabilidad cuando un enjambre se instala en viviendas o patios."
  },
  {
    nombre: "Rescate y reubicación de enjambres",
    categoria: "Servicio",
    precio: 0,
    descripcion: "Retiro cuidadoso con equipo de protección y traslado responsable de las abejas a nuestro apiario."
  }
];

const contenedorCatalogo = document.getElementById("contenedor-catalogo");
const inputBuscar = document.getElementById("buscar");
const selectCategoria = document.getElementById("filtro-categoria");
const textoContador = document.getElementById("contador-catalogo");

function formatearPrecio(valor) {
  if (valor === 0) {
    return "A consultar";
  }
  return valor.toLocaleString("es-DO", { style: "currency", currency: "DOP" });
}

function pintarTarjetas(lista) {
  contenedorCatalogo.innerHTML = "";

  textoContador.textContent = `Mostrando ${lista.length} de ${productosBeeCalderones.length} opciones`;

  if (lista.length === 0) {
    const aviso = document.createElement("p");
    aviso.textContent = "No encontramos productos con esa búsqueda. Intenta con otra palabra.";
    contenedorCatalogo.append(aviso);
    return;
  }

  lista.forEach((item) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
      <h3>${item.nombre}</h3>
      <p><strong>Categoría:</strong> ${item.categoria}</p>
      <p><strong>Precio:</strong> <span class="precio">${formatearPrecio(item.precio)}</span></p>
      <p>${item.descripcion}</p>
      <p><a href="contacto.html" class="boton">Consultar disponibilidad</a></p>
    `;
    contenedorCatalogo.append(tarjeta);
  });
}

function filtrarCatalogo() {
  const texto = inputBuscar.value.toLowerCase().trim();
  const categoriaElegida = selectCategoria.value;

  const filtrados = productosBeeCalderones.filter((item) => {
    const coincideTexto =
      item.nombre.toLowerCase().includes(texto) ||
      item.descripcion.toLowerCase().includes(texto);
    const coincideCategoria =
      categoriaElegida === "todos" || item.categoria === categoriaElegida;

    return coincideTexto && coincideCategoria;
  });

  pintarTarjetas(filtrados);
}

if (contenedorCatalogo && inputBuscar && selectCategoria) {
  pintarTarjetas(productosBeeCalderones);
  inputBuscar.addEventListener("input", filtrarCatalogo);
  selectCategoria.addEventListener("change", filtrarCatalogo);
}

/* VALIDACIÓN DEL FORMULARIO (Solo en contacto.html) */
const formContacto = document.getElementById("form-contacto");

if (formContacto) {
  const campoNombre = document.getElementById("nombre");
  const campoCorreo = document.getElementById("correo");
  const campoTelefono = document.getElementById("telefono");
  const campoCantidad = document.getElementById("cantidad");
  const casillasPedido = document.querySelectorAll('input[name="pedido"]');
  const cajaExito = document.getElementById("mensaje-exito");

  const errorNombre = document.getElementById("error-nombre");
  const errorCorreo = document.getElementById("error-correo");
  const errorTelefono = document.getElementById("error-telefono");
  const errorPedido = document.getElementById("error-pedido");
  const errorCantidad = document.getElementById("error-cantidad");

  // Limpiar el error cuando el usuario escribe
  campoNombre.addEventListener("input", () => {
    errorNombre.textContent = "";
    campoNombre.classList.remove("invalido");
  });

  campoCorreo.addEventListener("input", () => {
    errorCorreo.textContent = "";
    campoCorreo.classList.remove("invalido");
  });

  campoTelefono.addEventListener("input", () => {
    errorTelefono.textContent = "";
    campoTelefono.classList.remove("invalido");
  });

  formContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    let hayErrores = false;

    // Regla 1: Nombre mínimo 3 letras
    const nombreValor = campoNombre.value.trim();
    if (nombreValor.length < 3) {
      errorNombre.textContent = "Escribe tu nombre completo (mínimo 3 letras).";
      campoNombre.classList.add("invalido");
      hayErrores = true;
    }

    // Regla 2: Correo válido con @ y punto
    const correoValor = campoCorreo.value.trim();
    if (!correoValor.includes("@") || !correoValor.includes(".")) {
      errorCorreo.textContent = "Escribe un correo válido (ejemplo: tu@correo.com).";
      campoCorreo.classList.add("invalido");
      hayErrores = true;
    }

    // Regla 3: Teléfono dominicano (809, 829 u 849 + 7 números = 10 dígitos)
    const soloNumeros = campoTelefono.value.replace(/\D/g, "");
    const prefijoValido =
      soloNumeros.startsWith("809") ||
      soloNumeros.startsWith("829") ||
      soloNumeros.startsWith("849");

    if (soloNumeros.length !== 10 || !prefijoValido) {
      errorTelefono.textContent = "Ingresa un teléfono dominicano válido de 10 dígitos (809, 829 u 849).";
      campoTelefono.classList.add("invalido");
      hayErrores = true;
    }

    // Regla 4: Al menos un producto o servicio marcado en el checklist
    const seleccionados = [];
    for (const casilla of casillasPedido) {
      if (casilla.checked) {
        seleccionados.push(casilla.value);
      }
    }

    if (seleccionados.length === 0) {
      errorPedido.textContent = "Marca con un cotejo al menos un producto o servicio.";
      hayErrores = true;
    } else {
      errorPedido.textContent = "";
    }

    // Regla 5: Cantidad entre 1 y 50
    const cantidadValor = Number(campoCantidad.value);
    if (cantidadValor < 1 || cantidadValor > 50) {
      errorCantidad.textContent = "La cantidad debe estar entre 1 y 50 unidades.";
      campoCantidad.classList.add("invalido");
      hayErrores = true;
    } else {
      errorCantidad.textContent = "";
    }

    // Si todo está correcto, mostrar mensaje de éxito en la página
    if (!hayErrores) {
      cajaExito.hidden = false;
      cajaExito.textContent = `¡Gracias, ${nombreValor}! Recibimos tu solicitud de: ${seleccionados.join(", ")} (${cantidadValor} unidad/es). Te contactaremos pronto al ${campoTelefono.value}.`;
      formContacto.reset();
    }
  });
}