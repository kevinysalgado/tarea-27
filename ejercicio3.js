// 1. Crear el objeto producto
const producto = {
    detalles: {
        nombre: "Audífonos Bluetooth",
        precio: 60,
        categoria: "Accesorios"
    },
    inventario: {
        stock: 120,
        proveedor: "TechSupplier S.A.",
        ubicacion: "ÑAlmacén A1"
    },
    historial: {
        fechaIngreso: "2025-01-15",
        ultimaVenta: "2025-08-30",
        ventasTotales: 255
    }
};


console.log("Detalles del producto:", producto.detalles);


producto.inventario.stock += 50;

producto.detalles.categoria = "Electrónica";


let { nombre, precio } = producto.detalles;
console.log("Nombre:", nombre);
console.log("Precio:", precio);


console.log("Producto actualizado:", producto);


// 2anidados
const perfilUsuario = {
  informacionPersonal: {
    nombre: "Carlos López",
    edad: 25,
    email: "carlos@gmail.com"
  },
  preferencias: {
    idioma: "español",
    notificaciones: true,
    tema: "oscuro"
  },
  estadisticasUso: {
    fechaRegistro: "2024-08-15",
    ultimoAcceso: "2025-08-20",
    numeroSesiones: 45
  }
};

// 2. Mostrar cada sección de información por separado
console.log("Información Personal:");
console.log(perfilUsuario.informacionPersonal);

console.log("Preferencias:");
console.log(perfilUsuario.preferencias);

console.log("Estadísticas de Uso:");
console.log(perfilUsuario.estadisticasUso);


perfilUsuario.preferencias.idioma = "inglés";


 
perfilUsuario.estadisticasUso.ultimoAcceso = fechaActual;

// Eliminar una preferencia innecesaria (tema)
delete perfilUsuario.preferencias.tema;


const email = perfilUsuario




//3 anidados
let libro = {
    informacion: {
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico"
    },
    disponibilidad: {
        copias: 10,
        prestados: 4,
        ubicacion: "Sección Literatura Latinoamericana"
    },
    registro: {
        fechaPublicacion: "1967-05-30",
        fechaIngreso: "2020-08-15",
        ultimaRevision: "2023-12-10"
    }
};


console.log("Autor:", libro.informacion.autor);

let disponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
console.log("Ejemplares disponibles:", disponibles);


let fechaActual = new Date().toISOString().split("T")[0]; 
libro.registro.ultimaRevision = fechaActual;
console.log("Última revisión actualizada:", libro.registro.ultimaRevision);


libro.informacion.genero = "Clásico";
console.log("Nuevo género:", libro.informacion.genero);


let { titulo } = libro.informacion;
let { ubicacion } = libro.disponibilidad;

console.log("Título extraído:", titulo);
console.log("Ubicación extraída:", ubicacion);


console.log("Objeto actualizado:", libro);

