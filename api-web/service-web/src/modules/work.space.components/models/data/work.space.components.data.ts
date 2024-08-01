import { DataBase } from "@Commons/crud/crud.data.base";
import { WebComponentStructure } from "@Components/models/interface/web.components.schema.interface";
import { ValidateRequired } from "@Commons/validator/required.validator";
import { ValidateMaxLength } from "@Commons/validator/length.max.validator";
import { ValidateMinLength } from "@Commons/validator/length.min.validator";
import { ValidateRegex } from "@Commons/validator/regex.validator";
import { GenericError } from "@Commons/errors/factory/generic.error";
import { MODELERRORTEXTTYPE } from "@Commons/errors/error.types";
import { ValidateObjectId } from "@Commons/validator/object.id.validator";


interface WorkSpaceComponentsComponent{
  data: any,
  components: WebComponentStructure[] 
}

export class WorkSpaceComponentsData extends DataBase {

  protected nameId: string = "WorkSpaceComponents";
  component: any = {};
  wordSpaceId: string = ''
  componentId: string = ''


  // Getter y Setter para 'name'
  getComponentId(): string {
    return this.componentId;
  }

  setComponentId(value: string): void {
    const name = 'componentId';
    ValidateRequired.validateOrFail({ value, name });
    ValidateObjectId.validateOrFail({ value, name });
    this.componentId = value;
  }

  setWorkSpaceId(value: string): void {
    const name = 'workSpaceId';
    ValidateRequired.validateOrFail({ value, name });
    ValidateObjectId.validateOrFail({ value, name });
    this.wordSpaceId = value;
  }

  // Getter y Setter para 'name'
  getComponent(): string {
    return this.component;
  }

  setComponent = ({data, components}: WorkSpaceComponentsComponent) => {
  
    const store: any = {}
    for (const component of components) {
      const value = data[component.name] || '';
      const name = component.name;
      

      if (component.required) ValidateRequired.validateOrFail({ value, name })
      if (component.pattern) {
        let regex
        try {
          regex = new RegExp(component.pattern);
        } catch (error) {
          const errorMessage = `Invalid regex pattern provided for component: ${name}`;
          throw new GenericError([
            {
              message: errorMessage,
              field: "pattern",
              detail: "Invalid regex pattern",
              code: MODELERRORTEXTTYPE.is_invalid,
            },
          ]);
        }
        ValidateRegex.validateOrFail({ value, name, regex });
      }
      
      if (component.minLength) ValidateMinLength.validateOrFail({ value, name, minLength: component.minLength })
      if (component.maxLength) ValidateMaxLength.validateOrFail({ value, name, maxLength: component.maxLength })

      store[name] = value;
    }
    this.component = store
  };


}
