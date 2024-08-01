import mongoose from 'mongoose';
import { SCHEMAWORKSPACECOMPONENTS, WorkSpaceComponentsDoc } from './interface/work.space.components.schema.interface';
import { WorkSpaceComponentsMiddleware } from './middleware/work.space.components.middleware';
import paginate from 'mongoose-paginate-v2';


// Define the workSpace schema
const workSpaceSchema = new mongoose.Schema<WorkSpaceComponentsDoc>({
  workSpaceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  componentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
  },
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

WorkSpaceComponentsMiddleware.validate(workSpaceSchema);
workSpaceSchema.plugin(paginate);
const WorkSpaceComponents = global.dbtc.model<WorkSpaceComponentsDoc, mongoose.PaginateModel<WorkSpaceComponentsDoc>>(SCHEMAWORKSPACECOMPONENTS, workSpaceSchema);
export { WorkSpaceComponents };