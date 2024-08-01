import { Schema, Document } from "mongoose";

export const SCHEMAWORKSPACEPAGES = 'work.space.pages'

export interface WebPageDataStructure {
  componentId: Schema.Types.ObjectId; 
  position: number; 
}

// that are requried to create a new User
export interface WorkSpacePageAttrs {
  workSpaceId: Schema.Types.ObjectId;
  name: string; //Id unico
  slug: string; //Id unico
  page: [WebPageDataStructure]; //Almacena todos los componentes para confirmar la pagina
  lastUpdateDate: Date; // Fecha de la última actualización de la imagen
  deleted: boolean; // Indica si la imagen ha sido eliminada
  status: boolean; // Indica si la imagen ha sido eliminada
}

export interface WorkSpacePagesDoc extends WorkSpacePageAttrs, Document{}  

