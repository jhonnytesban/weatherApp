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

export interface EstacionData {
  bateria:         number;
  dia:             number;
  dirViento:       number;
  dirVientoVelMax: number;
  et0:             number;
  fecha:           Date;
  fechaUtlMod:     Date;
  horMinHumMax:    string;
  horMinHumMin:    string;
  horMinTempMax:   string;
  horMinTempMin:   string;
  horMinVelMax:    string;
  humedadMax:      number;
  humedadMedia:    number;
  humedadMin:      number;
  precipitacion:   number;
  radiacion:       number;
  tempMax:         number;
  tempMedia:       number;
  tempMin:         number;
  velViento:       number;
  velVientoMax:    number;
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
