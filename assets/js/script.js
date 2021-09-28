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
  constructor(nombre_propietario, telefono_propietario, direccion_propietario, tipo) {
    super(nombre_propietario, telefono_propietario, direccion_propietario);
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }
}

class Mascota extends Animal {
  constructor(nombre_propietario, telefono_propietario, direccion_propietario, tipo_animal, nombre_mascota, enfermedad) {
    super(nombre_propietario, telefono_propietario, direccion_propietario, tipo_animal);
    this._nombre_mascota = nombre_mascota;
    this._enfermedad = enfermedad;
  }

  get nombre_mascota() {
    return this._nombre_mascota;
  }

  set nombre_mascota(nuevoNombre_mascota) {
    this._nombre_mascota = nuevoNombre_mascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nueva_Enfermedad) {
    this._enfermedad = nueva_Enfermedad;
  }
}

const button = document.getElementById("button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const nombre = propNombre.value;
  const telefono = propTelefono.value;
  const direccion = propDireccion.value;
  const tipo = propTipoMascota.value;
  const nombre_mascota = propnombre_mascota.value;
  const enfermedad = propEnfermedadMascota.value;

  const mascota = new Mascota(nombre, telefono, direccion, tipo, nombre_mascota, enfermedad);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
  <ul>
    <li>${mascota.datosPropietario()}</li>
    <li>El tipo de animal es: ${mascota.tipo}, mientras que el nombre de las mascota es: ${mascota.nombre_mascota} y la enfermedad es: ${mascota.enfermedad}</li>
  </ul>
  `

});

const propNombre = document.getElementById("propietario");
const propTelefono = document.getElementById("telefono");
const propDireccion = document.getElementById("direccion");

const propTipoMascota = document.getElementById("tipo");

const propnombre_mascota = document.getElementById("nombre_mascota");
const propEnfermedadMascota = document.getElementById("enfermedad");
