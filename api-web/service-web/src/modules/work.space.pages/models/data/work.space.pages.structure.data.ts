import { DataBase } from "@Commons/data/data.base";
import { ValidateNumber } from "@Commons/validator/number.validator";
import { ValidateObjectId } from "@Commons/validator/object.id.validator";
import { ValidateRequired } from "@Commons/validator/required.validator";
import {Schema} from 'mongoose';


export class WebPagesDataStructure extends DataBase {

  protected nameId: string = "WebComponentsStructure";
  position: number = 0; // Etiqueta visible para el usuario que describe el propósito del componente.
  componentId: Schema.Types.ObjectId | undefined

  // Getter y Setter para 'id'
  getComponentId (): Schema.Types.ObjectId {
    return this.componentId!;
  }

  setComponentId(value: any): void {
    const name = 'componentId';
    ValidateRequired.validateOrFail({ value, name });
    ValidateObjectId.validateOrFail({ value, name });
    this.componentId =  value
  }

  setPosition(value: any): void {
    const name = "position"
    ValidateNumber.validateOrFail({ value, name });     // Validar que sean números válidos
    this.position = value;
  } 

  getPosition(){
    return this.position;
  }

}