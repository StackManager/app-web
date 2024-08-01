import { Schema } from 'mongoose';
import { WorkSpacePagesDoc } from '../interface/work.space.pages.schema.interface';
import { MyValidate } from './work.space.pages.middleware.validate';


export class WorkSpacePagesMiddleware {

  static validate(schema: Schema<WorkSpacePagesDoc>): void {

    schema.pre('validate', async function(next) {

      //const myValidate = new MyValidate()
      //if (this.isNew || this.isModified('slug')){
        //await myValidate.workSpaceNoRepeatSlug(this.slug, this.workSpaceId)
      //} 

      next();
    });

  }
}
