
const btnTema = document.getElementById("btn-tema");

if (localStorage.getItem("temaBeeCalderones") === "oscuro") {
  document.body.classList.add("oscuro");

  if (btnTema) {
    btnTema.textContent = "Modo claro";
  }
}

function alternarTema() {
  document.body.classList.toggle("oscuro");

  const esOscuro = document.body.classList.contains("oscuro");

  localStorage.setItem(
    "temaBeeCalderones",
    esOscuro ? "oscuro" : "claro"
  );

  if (btnTema) {
    btnTema.textContent = esOscuro ? "Modo claro" : "Modo oscuro";
  }
}

if (btnTema) {
  btnTema.addEventListener("click", alternarTema);
}


const btnMenu = document.getElementById("btn-menu");
const menuNav = document.querySelector("nav");

function alternarMenu() {
  if (!btnMenu || !menuNav) {
    return;
  }

  menuNav.classList.toggle("abierto");

  const estaAbierto = menuNav.classList.contains("abierto");

  btnMenu.setAttribute("aria-expanded", String(estaAbierto));
}

if (btnMenu && menuNav) {
  btnMenu.addEventListener("click", alternarMenu);
}


const spanAnio = document.getElementById("anio");

if (spanAnio) {
  spanAnio.textContent = new Date().getFullYear();
}


const btnArriba = document.getElementById("btn-arriba");

if (btnArriba) {
  function controlarBotonArriba() {
    btnArriba.hidden = window.scrollY <= 200;
  }

  window.addEventListener("scroll", controlarBotonArriba);

  btnArriba.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  controlarBotonArriba();
}


const productosBeeCalderones = [
  {
    nombre: "Miel de abeja — Galón",
    categoria: "Miel",
    precio: 2400,
    descripcion: "Presentación de gran capacidad, ideal para hogares, clientes frecuentes y establecimientos.",
    imagen: "img/galonmiel.jpg"
  },
  {
    nombre: "Miel de abeja — Medio galón",
    categoria: "Miel",
    precio: 1200,
    descripcion: "Alternativa práctica para quienes desean una buena cantidad de miel para el consumo habitual.",
    imagen: "img/medioGalon.jpg"
  },
  {
    nombre: "Miel de abeja — Botella",
    categoria: "Miel",
    precio: 800,
    descripcion: "Presentación cómoda para acompañar alimentos y endulzar bebidas.",
    imagen: "img/botellamiel.jpg"
  },
  {
    nombre: "Miel con panal artesanal",
    categoria: "Miel",
    precio: 950,
    descripcion: "Miel acompañada de trozos de panal natural.",
    imagen: "img/panal.jpeg"
  },
  {
    nombre: "Evaluación de enjambres",
    categoria: "Servicio",
    precio: 0,
    descripcion: "Evaluación de seguridad y viabilidad cuando un enjambre se encuentra en viviendas o patios.",
    imagen: "img/enjambre1.jpeg"
  },
  {
    nombre: "Rescate y reubicación de enjambres",
    categoria: "Servicio",
    precio: 0,
    descripcion: "Retiro y traslado responsable de abejas cuando las condiciones permiten realizarlo de forma segura.",
    imagen: "img/enjambre2.jpeg"
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

  return valor.toLocaleString("es-DO", {
    style: "currency",
    currency: "DOP"
  });
}

function pintarTarjetas(lista) {
  if (!contenedorCatalogo || !textoContador) {
    return;
  }

  contenedorCatalogo.innerHTML = "";

  textoContador.textContent =
    `Mostrando ${lista.length} de ${productosBeeCalderones.length} opciones`;

  if (lista.length === 0) {
    const aviso = document.createElement("p");

    aviso.textContent =
      "No encontramos resultados. Intenta con otra palabra o categoría.";

    contenedorCatalogo.appendChild(aviso);
    return;
  }

  lista.forEach((item) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const imagen = document.createElement("img");
    imagen.src = item.imagen;
    imagen.alt = `Imagen ilustrativa del apiario relacionada con ${item.nombre}`;
    imagen.loading = "lazy";
    imagen.className = "imagen-producto";

    const titulo = document.createElement("h3");
    titulo.textContent = item.nombre;

    const categoria = document.createElement("p");
    categoria.textContent = `Categoría: ${item.categoria}`;

    const precio = document.createElement("p");
    precio.textContent = `Precio: ${formatearPrecio(item.precio)}`;

    const descripcion = document.createElement("p");
    descripcion.textContent = item.descripcion;

    const parrafoEnlace = document.createElement("p");
    const enlace = document.createElement("a");

    enlace.href = "contacto.html";
    enlace.className = "boton";
    enlace.textContent = "Consultar disponibilidad";

    parrafoEnlace.appendChild(enlace);

    tarjeta.append(
      imagen,
      titulo,
      categoria,
      precio,
      descripcion,
      parrafoEnlace
    );

    contenedorCatalogo.appendChild(tarjeta);
  });
}

function filtrarCatalogo() {
  if (!inputBuscar || !selectCategoria) {
    return;
  }

  const texto = inputBuscar.value.toLowerCase().trim();
  const categoriaElegida = selectCategoria.value;

  const filtrados = productosBeeCalderones.filter((item) => {
    const coincideTexto =
      item.nombre.toLowerCase().includes(texto) ||
      item.descripcion.toLowerCase().includes(texto);

    const coincideCategoria =
      categoriaElegida === "todos" ||
      item.categoria === categoriaElegida;

    return coincideTexto && coincideCategoria;
  });

  pintarTarjetas(filtrados);
}

if (
  contenedorCatalogo &&
  inputBuscar &&
  selectCategoria &&
  textoContador
) {
  pintarTarjetas(productosBeeCalderones);

  inputBuscar.addEventListener("input", filtrarCatalogo);
  selectCategoria.addEventListener("change", filtrarCatalogo);
}


const formContacto = document.getElementById("form-contacto");

if (formContacto) {
  const campoNombre = document.getElementById("nombre");
  const campoCorreo = document.getElementById("correo");
  const campoTelefono = document.getElementById("telefono");
  const campoCantidad = document.getElementById("cantidad");

  const casillasPedido =
    document.querySelectorAll('input[name="pedido"]');

  const cajaExito = document.getElementById("mensaje-exito");

  const errorNombre = document.getElementById("error-nombre");
  const errorCorreo = document.getElementById("error-correo");
  const errorTelefono = document.getElementById("error-telefono");
  const errorPedido = document.getElementById("error-pedido");
  const errorCantidad = document.getElementById("error-cantidad");

  function mostrarError(campo, elementoError, mensaje) {
    elementoError.textContent = mensaje;

    if (campo) {
      campo.classList.add("invalido");
    }
  }

  function limpiarError(campo, elementoError) {
    elementoError.textContent = "";

    if (campo) {
      campo.classList.remove("invalido");
    }
  }

  function validarNombre() {
    const nombre = campoNombre.value.trim();

    if (nombre.length < 3) {
      mostrarError(
        campoNombre,
        errorNombre,
        "Escribe tu nombre completo (mínimo 3 caracteres)."
      );
      return false;
    }

    limpiarError(campoNombre, errorNombre);
    return true;
  }

  function validarCorreo() {
    const correo = campoCorreo.value.trim();

    if (!correo || !campoCorreo.validity.valid) {
      mostrarError(
        campoCorreo,
        errorCorreo,
        "Escribe un correo electrónico válido."
      );
      return false;
    }

    limpiarError(campoCorreo, errorCorreo);
    return true;
  }

  function validarTelefono() {
    const soloNumeros = campoTelefono.value.replace(/\D/g, "");

    const telefonoValido = /^(809|829|849)\d{7}$/.test(soloNumeros);

    if (!telefonoValido) {
      mostrarError(
        campoTelefono,
        errorTelefono,
        "El teléfono debe tener 10 dígitos y comenzar con 809, 829 o 849."
      );
      return false;
    }

    limpiarError(campoTelefono, errorTelefono);
    return true;
  }

  function obtenerSeleccionados() {
    return Array.from(casillasPedido)
      .filter((casilla) => casilla.checked)
      .map((casilla) => casilla.value);
  }

  function validarPedido() {
    const seleccionados = obtenerSeleccionados();

    if (seleccionados.length === 0) {
      errorPedido.textContent =
        "Selecciona al menos un producto o servicio.";
      return false;
    }

    errorPedido.textContent = "";
    return true;
  }

  function validarCantidad() {
    const cantidadTexto = campoCantidad.value.trim();
    const cantidad = Number(cantidadTexto);

    if (
      cantidadTexto === "" ||
      !Number.isInteger(cantidad) ||
      cantidad < 1 ||
      cantidad > 50
    ) {
      mostrarError(
        campoCantidad,
        errorCantidad,
        "La cantidad debe ser un número entero entre 1 y 50."
      );
      return false;
    }

    limpiarError(campoCantidad, errorCantidad);
    return true;
  }

  campoNombre.addEventListener("input", validarNombre);
  campoCorreo.addEventListener("input", validarCorreo);
  campoTelefono.addEventListener("input", validarTelefono);
  campoCantidad.addEventListener("input", validarCantidad);

  casillasPedido.forEach((casilla) => {
    casilla.addEventListener("change", validarPedido);
  });

  formContacto.addEventListener("submit", (event) => {
    event.preventDefault();

    if (cajaExito) {
      cajaExito.hidden = true;
      cajaExito.textContent = "";
    }

    const nombreValido = validarNombre();
    const correoValido = validarCorreo();
    const telefonoValido = validarTelefono();
    const pedidoValido = validarPedido();
    const cantidadValida = validarCantidad();

    const todoValido =
      nombreValido &&
      correoValido &&
      telefonoValido &&
      pedidoValido &&
      cantidadValida;

    if (!todoValido) {
      const primerCampoInvalido =
        formContacto.querySelector(".invalido");

      if (primerCampoInvalido) {
        primerCampoInvalido.focus();
      }

      return;
    }

    const nombre = campoNombre.value.trim();
    const telefono = campoTelefono.value.trim();
    const seleccionados = obtenerSeleccionados();
    const cantidad = Number(campoCantidad.value);

    if (cajaExito) {
      cajaExito.hidden = false;

      cajaExito.textContent =
        `¡Solicitud validada correctamente, ${nombre}! ` +
        `Productos o servicios: ${seleccionados.join(", ")}. ` +
        `Cantidad indicada: ${cantidad}. ` +
        `Teléfono: ${telefono}. ` +
        `Esta es una demostración académica; los datos no se han enviado.`;
    }

    formContacto.reset();

    [
      [campoNombre, errorNombre],
      [campoCorreo, errorCorreo],
      [campoTelefono, errorTelefono],
      [campoCantidad, errorCantidad]
    ].forEach(([campo, error]) => {
      limpiarError(campo, error);
    });

    errorPedido.textContent = "";
  });
}
