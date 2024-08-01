import { Schema } from 'mongoose';
import { WebComponentsDoc } from '../interface/web.components.schema.interface';
import { MyValidate } from './web.components.middleware.validate';


export class WebComponentsMiddleware {

  static validate(schema: Schema<WebComponentsDoc>): void {

    schema.pre('validate', async function(next) {

      //const myValidate = new MyValidate()
      //if (this.isNew || this.isModified('slug')){
        //await myValidate.workSpaceNoRepeatSlug(this.slug, this.workSpaceId)
      //} 

      next();
    });

  }
}
