import { Schema } from 'mongoose';
import { WorkSpaceComponentsDoc } from '../interface/work.space.components.schema.interface';
import { MyValidate } from './work.space.components.middleware.validate';


export class WorkSpaceComponentsMiddleware {

  static validate(schema: Schema<WorkSpaceComponentsDoc>): void {

    schema.pre('validate', async function(next) {

      //const myValidate = new MyValidate()
      //if (this.isNew || this.isModified('slug')){
        //await myValidate.workSpaceNoRepeatSlug(this.slug, this.workSpaceId)
      //} 

      next();
    });

  }
}
