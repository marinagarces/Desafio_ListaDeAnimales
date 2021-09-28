class Propietario {
  constructor(nombre, telefono, direccion) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
  }

  datosPropietario(){
  return `El nombre del dueño es: ${this.nombre}, su número telefónico es: ${this.telefono} y el domicilio es: ${this.direccion}`
  }
}

class Animal extends Propietario {
  constructor(nombreProp, telefonoProp, direccionProp, tipo) {
    super(nombreProp, telefonoProp, direccionProp);
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }
}

class Mascota extends Animal {
  constructor(nombreProp, telefonoProp, direccionProp, tipoAnimal, nombreMascota, enfermedad) {
    super(nombreProp, telefonoProp, direccionProp, tipoAnimal);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}

const button = document.getElementById("button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const nombre = propNombre.value;
  const telefono = propTelefono.value;
  const direccion = propDireccion.value;
  const tipo = propTipoMascota.value;
  const nombreMascota = propNombreMascota.value;
  const enfermedad = propEnfermedadMascota.value;

  const mascota = new Mascota(nombre, telefono, direccion, tipo, nombreMascota, enfermedad);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
  <ul>
    <li>${mascota.datosPropietario()}</li>
    <li>El tipo de animal es: ${mascota.tipo}, mientras que el nombre de las mascota es: ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedad}</li>
  </ul>
  `

});

const propNombre = document.getElementById("propietario");
const propTelefono = document.getElementById("telefono");
const propDireccion = document.getElementById("direccion");

const propTipoMascota = document.getElementById("tipo");

const propNombreMascota = document.getElementById("nombreMascota");
const propEnfermedadMascota = document.getElementById("enfermedad");
