import { PopulateMongose } from "@Commons/mongose/populate.mongose";


export class WebComponentsPopulate extends PopulateMongose{

  fields(select = ''){
    return 'name status deleted ' + select
  }

}