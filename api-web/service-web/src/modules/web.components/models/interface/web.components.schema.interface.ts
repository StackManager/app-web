import { Schema, Document } from "mongoose";

export const SCHEMAWebComponents = 'web.page.components'

export const TypeComponents = ['text', 'number', 'date', 'select']

export interface WebComponentStructure {
  name: string; // Nombre único del componente dentro del formulario.
  label: string; // Etiqueta visible para el usuario que describe el propósito del componente.
  type: string; // Tipo de dato del componente (text, number, date, etc.).
  placeholder?: string; // Texto de marcador de posición para indicar al usuario qué tipo de valor se espera.
  class?: string; // Clase CSS adicional para personalizar el estilo del componente.
  style?: string; // Estilos CSS en línea para aplicar estilos específicos.
  disabled?: boolean; // Indica si el componente está deshabilitado.
  readonly?: boolean; // Indica si el componente es de solo lectura.
  required?: boolean; // Indica si el campo es obligatorio.
  pattern?: string; // Expresión regular para validar el formato del valor.
  minLength?: number; // Longitud mínima permitida para el valor.
  maxLength?: number; // Longitud máxima permitida para el valor.
  step?: number; // Incremento o decremento permitido para valores numéricos.
  enum?: string[]; // Lista de valores permitidos para un campo de selección.
  events?: string[]; // Lista de eventos que el componente puede emitir.
  defaultValue?: any; // Valor por defecto del componente.
  options?: { label: string; value: any }[]; // Opciones para campos de selección o listas desplegables.
  format?: string; // Formato de visualización del valor (fecha, moneda, etc.).
  locale?: string; // Locale para la localización del componente.
  messages?: { [key: string]: string }; // Mensajes de error personalizados.
}


// that are requried to create a new User
export interface WebComponentsAttrs {
  name: string;  // Nombre de la imagen
  description?: string; // Descripción opcional de la imagen
  components: WebComponentStructure[];
  slug?: string;  // Slug opcional para identificar la imagen de manera única
  tags?: string[]; // Etiquetas opcionales para categorizar o buscar imágenes
  version?: number; // Versión opcional de la imagen, útil para el control de cambios
  lastUpdateDate: Date; // Fecha de la última actualización de la imagen
  deleted: boolean; // Indica si la imagen ha sido eliminada
  status: boolean; // Indica si la imagen ha sido eliminada
}

export interface WebComponentsDoc extends WebComponentsAttrs, Document{}  

