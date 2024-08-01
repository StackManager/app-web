import { WebComponents } from "@Components/models/web.components.model";
import { WebComponentsBase } from "../controller/web.components.base";
import { WebComponentsData } from "../models/data/web.components.data";


export class WebComponentsCreateService extends WebComponentsBase {

  getSession = true;
  permissionService =  ["web_component_create"]

  async run() {
    const { 
      name,
      description,
      tags,
      slug
    } = this.req.body;
    
    const dataModel = new WebComponentsData();
    dataModel.setName(name);
    dataModel.setDescription(description);
    dataModel.setTags(tags);
    dataModel.setSlug(slug);
    
    // Crear un nuevo documento en la base de datos
    const doc = new WebComponents({
      name: dataModel.getName(),
      description: dataModel.getDescription(),
      slug: dataModel.getSlug(),
      tags: dataModel.getTags(),
    });
    
    // Guardar el documento en la base de datos
    await doc.save();
  
    // Convertir el documento a JSON y enviar la respuesta
    const data = doc.toJSON();
    this.res.status(201).json({ ...data });
  }
}