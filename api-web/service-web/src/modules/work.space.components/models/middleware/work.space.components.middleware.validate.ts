import { Schema } from 'mongoose';
import { MODELERRORTEXTTYPE } from "@Commons/errors/error.types";
import { GenericError } from "@Commons/errors/factory/generic.error";
import { WorkSpaceComponentsRead } from '../crud/work.space.components.read';


export class MyValidate{
  read: WorkSpaceComponentsRead = new WorkSpaceComponentsRead();



}