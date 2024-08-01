import { Schema, Document } from "mongoose";

export const SCHEMAWORKSPACECOMPONENTS = 'work.space.components'


// that are requried to create a new User
export interface WorkSpaceComponentsAttrs {
  workSpaceId: Schema.Types.ObjectId; // El espacio de trabajo  donde esta subscrito el rol
  componentId: Schema.Types.ObjectId;
  data: any;
  lastUpdateDate: Date; // Fecha de la última actualización de la imagen
  deleted: boolean; // Indica si la imagen ha sido eliminada
  status: boolean; // Indica si la imagen ha sido eliminada
}


export interface WorkSpaceComponentsDoc extends WorkSpaceComponentsAttrs, Document{}  

