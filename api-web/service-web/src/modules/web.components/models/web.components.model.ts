import mongoose from 'mongoose';
import { SCHEMAWebComponents, TypeComponents, WebComponentsDoc, WebComponentStructure } from './interface/web.components.schema.interface';
import { WebComponentsMiddleware } from './middleware/web.components.middleware';
import paginate from 'mongoose-paginate-v2';

const webComponentsSchema = new mongoose.Schema<WebComponentStructure>({
  name: {
    type: String,
    required: true, // Ensure a name is always provided
  },
  label: {
    type: String,
    required: true, // Ensure a label is always provided
  },
  type: {
    type: String,
    enum: TypeComponents,
    required: true, // Ensure a type is always provided
  },
  placeholder: String,
  class: String,
  style: String,
  disabled: Boolean,
  readonly: Boolean,
  required: Boolean,
  pattern: String,
  minLength: Number,
  maxLength: Number,
  step: Number,
  enum: [String], // Array of allowed values for select components
  events: [String], // Array of event names
  defaultValue: mongoose.SchemaTypes.Mixed, // Allow any data type for default value
  options: [{
    label: String,
    value: mongoose.SchemaTypes.Mixed, // Allow any data type for option values
  }],
  format: String,
  locale: String,
  messages: mongoose.SchemaTypes.Mixed, // Allow any structure for custom messages
});


// Define the workSpace schema
const workSpaceSchema = new mongoose.Schema<WebComponentsDoc>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  slug: {
    type: String,
    unique: true
  },
  tags: [
    {
      type: String,
      default:[]
    }
  ],
  components: [webComponentsSchema],
  lastUpdateDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
});

WebComponentsMiddleware.validate(workSpaceSchema);
workSpaceSchema.plugin(paginate);
const WebComponents = global.dbtc.model<WebComponentsDoc, mongoose.PaginateModel<WebComponentsDoc>>(SCHEMAWebComponents, workSpaceSchema);
export { WebComponents };