import { WebComponentsBase } from "../controller/web.components.base";
import { WebComponentsList } from "../models/crud/web.components.list";


export class WebComponentsListService extends WebComponentsBase {

  getSession = true;
  permissionService =  ["web_component_list"]

  async run() {

    const {id, name, page = 1, pageSize = 10, status, deleted } = this.req.query;
    const list = new WebComponentsList();
    if (id) list.filter.id(id);
    if (name) list.filter.name(name);
    if (status) list.filter.status(status);
    if (deleted) list.filter.deleted(deleted);
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