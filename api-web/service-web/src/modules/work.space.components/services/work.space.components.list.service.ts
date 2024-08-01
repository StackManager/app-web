import { WorkSpaceComponentsBase } from "../controller/work.space.components.base";
import { WorkSpaceComponentsList } from "../models/crud/work.space.components.list";


export class WorkSpaceComponentsListService extends WorkSpaceComponentsBase {

  getSession = true;
  permissionService =  ["work_space_component_list"]

  async run() {

    const {id, name, page = 1, pageSize = 10, status, deleted } = this.req.query;
    const list = new WorkSpaceComponentsList();
    if (id) list.filter.id(id);
    if (name) list.filter.name(name);
    if (status) list.filter.status(status);
    if (deleted) list.filter.deleted(deleted);
    list.filter.workSpaceId(this.session.workSpaceId);
    const result = await list.paginate({
      page, 
      limit: pageSize
    });

    this.res.status(200).json({
      elements: result.docs,
      total: result.totalDocs
    });
  }
}