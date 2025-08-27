// Declarar un objeto animal
let animal = {
    raza: "Labrador",
    tamaño: "Grande",
    color: "Marrón"
};

// Mostrar el objeto completo en consola
console.log("Objeto animal:", animal);

// Imprimir cada propiedad por separado
console.log("Raza:", animal.raza);
console.log("Tamaño:", animal.tamaño);
console.log("Color:", animal.color);

// Agregar una nueva propiedad (edad)
animal.edad = 5;
console.log("Propiedad nueva (edad):", animal.edad);

// Eliminar la propiedad raza
delete animal.raza;
console.log("Objeto animal después de eliminar raza:", animal);


// Crear objeto usuario
let usuario = {
    usuario: "Kevin",
    email: "kevin@example.com",
    rol: "Administrador"
};

// Usar destructuring
let { usuario: nombreUsuario, email, rol } = usuario;

// Mostrar en consola
console.log("Usuario:", nombreUsuario);
console.log("Email:", email);
console.log("Rol:", rol);
