import mongoose from 'mongoose';
import { SCHEMAWORKSPACEPAGES, WebPageDataStructure, WorkSpacePagesDoc } from './interface/work.space.pages.schema.interface';
import { WorkSpacePagesMiddleware } from './middleware/work.space.pages.middleware';
import paginate from 'mongoose-paginate-v2';

const webPageDataStructureSchema = new mongoose.Schema<WebPageDataStructure>({
  componentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  position: {
    type: Number
  },
});
 
// Define the workSpace schema
const workSpaceSchema = new mongoose.Schema<WorkSpacePagesDoc>({
  workSpaceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
  },
  page: [webPageDataStructureSchema],
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

workSpaceSchema.index({ workSpaceId: 1, slug: 1 }, { unique: true });
WorkSpacePagesMiddleware.validate(workSpaceSchema);
workSpaceSchema.plugin(paginate);
const WorkSpacePages = global.dbtc.model<WorkSpacePagesDoc, mongoose.PaginateModel<WorkSpacePagesDoc>>(SCHEMAWORKSPACEPAGES, workSpaceSchema);
export { WorkSpacePages };