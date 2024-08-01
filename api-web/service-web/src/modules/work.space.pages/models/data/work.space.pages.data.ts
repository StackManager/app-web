import { DataBase } from "@Commons/crud/crud.data.base";
import { Request } from 'express';
import { WebComponentStructure } from "@Components/models/interface/web.components.schema.interface";
import { ValidateRequired } from "@Commons/validator/required.validator";
import { ValidateObjectId } from "@Commons/validator/object.id.validator";
import { ValidateMaxLength } from "@Commons/validator/length.max.validator";
import { ValidateMinLength } from "@Commons/validator/length.min.validator";
import { ValidateRegex } from "@Commons/validator/regex.validator";
import { alphanumericAndSpacesRegex } from "@Commons/constants/regex";
import { generateSlug } from "@Commons/format/string";
import {Schema} from 'mongoose';

interface WorkSpacePagesComponent{
  req: Request,
  components: WebComponentStructure[] 
}

export class WorkSpacePagesData extends DataBase {

  protected nameId: string = "WorkSpacePages";
  componentId: Schema.Types.ObjectId | undefined;
  name: string = ''
  wordSpaceId: string = ''
  
  // Getter y Setter para 'name'
  getName(): string {
    return this.name;
  }

  setName(value: any): void {
    const name = 'name'
    ValidateRequired.validateOrFail({ value, name });
    ValidateMaxLength.validateOrFail({ value, maxLength: 100, name });
    ValidateMinLength.validateOrFail({ value, minLength: 3, name });
    ValidateRegex.validateOrFail({ value, regex: alphanumericAndSpacesRegex });
    this.name = value;
  }

  getSlug() {
    return generateSlug(this.name);
  }

  // Getter y Setter para 'id'
  getComponentId (): Schema.Types.ObjectId {
    return this.componentId!;
  }

  setComponentId(value: any): void {
    const name = 'componentId';
    ValidateRequired.validateOrFail({ value, name });
    ValidateObjectId.validateOrFail({ value, name });
    this.componentId =  new Schema.Types.ObjectId(value);
  }

  setWorkSpaceId(value: string): void {
    const name = 'workSpaceId';
    ValidateRequired.validateOrFail({ value, name });
    ValidateObjectId.validateOrFail({ value, name });
    this.wordSpaceId = value;
  }

}
