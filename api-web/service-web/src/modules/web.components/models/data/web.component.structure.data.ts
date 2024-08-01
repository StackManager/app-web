import { ValidateRequired } from "@Commons/validator/required.validator";
import { ValidateMaxLength } from "@Commons/validator/length.max.validator";
import { ValidateMinLength } from "@Commons/validator/length.min.validator";
import { ValidateRegex } from "@Commons/validator/regex.validator";
import { alphanumericAndSpacesRegex, alphanumericAndUnderscoresHyphensRegex, alphanumericEspecialRegex, htmlCharactersRegex } from "@Commons/constants/regex";
import { DataBase } from "@Commons/crud/crud.data.base";
import { generateSlug } from "@Commons/format/string";
import { ValidateObjectId } from "@Commons/validator/object.id.validator";
import { ValidateBoolean } from "@Commons/validator/boolean.validator";
import { ValidateNumber } from "@Commons/validator/number.validator";
import { ValidateIn } from "@Commons/validator/in.array.validator";
import { TypeComponents } from "../interface/web.components.schema.interface";

export class WebComponentsDataStructure extends DataBase {

  protected nameId: string = "WebComponentsStructure";
  name: string = ''; // Nombre único del componente dentro del formulario.
  label: string = ''; // Etiqueta visible para el usuario que describe el propósito del componente.
  type: string = ''; // Tipo de dato del componente (text, number, date, etc.).
  placeholder?: string = ''; // Texto de marcador de posición para indicar al usuario qué tipo de valor se espera.
  class?: string; // Clase CSS adicional para personalizar el estilo del componente.
  style?: string; // Estilos CSS en línea para aplicar estilos específicos.
  disabled?: boolean = false; // Indica si el componente está deshabilitado.
  readonly?: boolean = false; // Indica si el componente es de solo lectura.
  required?: boolean = false; // Indica si el campo es obligatorio.
  pattern?: string = ''; // Expresión regular para validar el formato del valor.
  minLength?: number = 0; // Longitud mínima permitida para el valor.
  maxLength?: number = 100; // Longitud máxima permitida para el valor.
  step?: number; // Incremento o decremento permitido para valores numéricos.
  enum?: string[]; // Lista de valores permitidos para un campo de selección.
  events?: string[]; // Lista de eventos que el componente puede emitir.
  defaultValue?: any; // Valor por defecto del componente.
  options?: { label: string; value: any }[]; // Opciones para campos de selección o listas desplegables.
  format?: string; // Formato de visualización del valor (fecha, moneda, etc.).
  locale?: string; // Locale para la localización del componente.
  messages?: { [key: string]: string }; // Mensajes de error personalizados.

  // Getter y Setter para 'name'
  getName(): string {
    return this.name;
  }

  setName(value: any): void {
    const name = "name"
    ValidateRequired.validateOrFail({ value, name });
    ValidateMaxLength.validateOrFail({ value, maxLength: 100, name });
    ValidateMinLength.validateOrFail({ value, minLength: 3, name });
    ValidateRegex.validateOrFail({ value, name, regex: alphanumericAndSpacesRegex });
    this.name = value;
  }

  // Getter y Setter para 'Label'
  getLabel(): string {
    return this.label;
  }
  
  setLabel(value: any): void {
    const name = "label"
    ValidateRequired.validateOrFail({ value, name });
    ValidateMaxLength.validateOrFail({ value, maxLength: 100, name });
    ValidateMinLength.validateOrFail({ value, minLength: 3, name });
    ValidateRegex.validateOrFail({ value, name, regex: alphanumericAndSpacesRegex });
    this.label = value;
  }

  // Getter y Setter para 'placeholder'
  getPlaceholder(): string {
    return this.placeholder!;
  }
  
  setPlaceholder(value: any): void {
    const name = "placeholder"
    if (!value) return
    ValidateMaxLength.validateOrFail({ value, maxLength: 100, name });
    ValidateMinLength.validateOrFail({ value, minLength: 3, name });
    ValidateRegex.validateOrFail({ value, name, regex: alphanumericAndSpacesRegex });
    this.placeholder = value;
  } 

// Getter y Setter para 'Disabled'
  getDisabled (){
    return this.disabled;
  }

  setDisabled(value: any): void {
    const name = 'disabled';
    if (!value) return
    ValidateBoolean.validateOrFail({ value, name });
    this.disabled = value;
  }

  // Getter y Setter para 'Readonly'
  getReadonly (){
    return this.readonly;
  }

  setReadonly(value: any): void {
    const name = 'readonly';
    if (!value) return
    ValidateBoolean.validateOrFail({ value, name });
    this.readonly = value;
  }
  
  // Getter y Setter para 'required'
  getRequired(){
    return this.required;
  }

  setRequired(value: any): void {
    const name = 'required';
    if (!value) return
    ValidateBoolean.validateOrFail({ value, name });
    this.required = value;
  }

  // Getter y Setter para 'type'
  getType(){
    return this.type;
  }
  setType(value: any): void {
    const name = "type"
    if (!value) return
    
    ValidateRegex.validateOrFail({ value, name, regex: alphanumericAndSpacesRegex });
    ValidateIn.validateOrFail({ value, name, validOptions: TypeComponents})

    this.type = value;
  } 

  // Getter y Setter para 'class'
  getClass(){
    return this.class;
  }
  setClass(value: any): void {
    const name = "class"
    if (!value) return
    ValidateMaxLength.validateOrFail({ value, maxLength: 100, name });
    ValidateMinLength.validateOrFail({ value, minLength: 3, name });
    ValidateRegex.validateOrFail({ value, name, regex: alphanumericEspecialRegex });
    this.class = value;
  } 

  // Getter y Setter para 'style'
  getStyle(){
    return this.style;
  }
  setStyle(value: any): void {
    const name = "style"
    if (!value) return
    ValidateMaxLength.validateOrFail({ value, maxLength: 250, name });
    ValidateMinLength.validateOrFail({ value, minLength: 3, name });
    ValidateRegex.validateOrFail({ value, name, regex: alphanumericEspecialRegex });
    this.style = value;
  } 

  // Getter y Setter para 'pattern'
  getPattern(){
    return this.pattern;
  }
  setPattern(value: any): void {
    const name = "pattern"
    if (!value) return
    ValidateMaxLength.validateOrFail({ value, maxLength: 100, name });
    ValidateMinLength.validateOrFail({ value, minLength: 3, name });
    ValidateRegex.validateOrFail({ value, name, regex: alphanumericEspecialRegex });
    this.pattern = value;
  } 

  // Getter y Setter para 'minLength'
  getMinLength(){
    return this.minLength;
  }

  setMinLength(value: any): void {
    const name = "minlength"
    if (!value) return
    ValidateNumber.validateOrFail({ value, name });     // Validar que sean números válidos
    this.minLength = value;
  } 

  // Getter y Setter para 'maxLength'
  getMaxLength(){
    return this.maxLength;
  }
  setMaxLength(value: any): void {
    const name = "maxlength"
    if (!value) return
    ValidateNumber.validateOrFail({ value, name });     // Validar que sean números válidos
    this.maxLength = value;
  } 
}