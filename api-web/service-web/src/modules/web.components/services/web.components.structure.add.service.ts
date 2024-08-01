import { NotAuthorizedError } from "@Commons/errors/factory/authorized.error";
import { WebComponentsBase } from "../controller/web.components.base";
import { WebComponentsRead } from "../models/crud/web.components.read";
import { WebComponentsDataStructure } from "../models/data/web.component.structure.data";


export class WebComponentsStructureAddService extends WebComponentsBase {

  getSession = true;
  permissionService =  ["web_component_structure_add"]
  read: WebComponentsRead = new WebComponentsRead();

  async run() {
    //Get the id params
    const {id} = this.req.params;
    //Get the instance with read
    const doc = await this.read.getById(id);

    const { 
      name,
      label,
      type,
      placeholder,
      class_,
      style,
      disabled,
      readonly,
      required,
      pattern,
      minLength,
      maxLength
    } = this.req.body;
    
    const dataModel = new WebComponentsDataStructure();
    dataModel.setName(name);
    dataModel.setLabel(label)
    dataModel.setType(type)
    dataModel.setPlaceholder(placeholder),
    dataModel.setClass(class_)
    dataModel.setStyle(style)
    dataModel.setDisabled(disabled)
    dataModel.setReadonly(readonly)
    dataModel.setRequired(required)
    dataModel.setPattern(pattern)
    dataModel.setMinLength(minLength)
    dataModel.setMaxLength(maxLength)

    // Crear un nuevo subdocumento en la base de datos
    doc.components.push({
      name: dataModel.getName(),
      label: dataModel.getLabel(),
      type: dataModel.getType(),
      placeholder: dataModel.getPlaceholder(),
      class: dataModel.getClass(),
      style: dataModel.getStyle(),
      disabled: dataModel.getDisabled(),
      readonly: dataModel.getReadonly(),
      required: dataModel.getRequired(),
      pattern: dataModel.getPattern(),
      minLength: dataModel.getMinLength(),
      maxLength: dataModel.getMaxLength(),
    })

    //Save and validate the changes
    await doc.save();
    // Response 
    this.res.status(200).json({ name: doc.name, component: doc.components });
  }
}