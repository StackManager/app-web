import { WorkSpacePagesBase } from "../controller/work.space.pages.base";
import { WorkSpacePagesList } from "../models/crud/work.space.pages.list";


export class WorkSpacePagesListService extends WorkSpacePagesBase {

  getSession = true;
  permissionService =  ["work_space_page_list"]

  async run() {

    const {id, name, page = 1, pageSize = 10, status, deleted } = this.req.query;
    const list = new WorkSpacePagesList();
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