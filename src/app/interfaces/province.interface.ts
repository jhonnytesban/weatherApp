export interface Estacion {
  provincia:      Provincia;
  codigoEstacion: string;
  nombre:         string;
  bajoplastico:   boolean;
  activa:         boolean;
  visible:        boolean;
  longitud:       string;
  latitud:        string;
  altitud:        number;
  xutm:           number;
  yutm:           number;
  huso:           number;
}

export interface Provincia {
  id:     number;
  nombre: String;
}

export enum Nombre {
  Almería = "Almería",
  Cádiz = "Cádiz",
  Córdoba = "Córdoba",
  Granada = "Granada",
  Huelva = "Huelva",
  Jaén = "Jaén",
  Málaga = "Málaga",
  Sevilla = "Sevilla",
}
