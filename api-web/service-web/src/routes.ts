import { WorkSpaceMainRoutes } from "@Components/routes/main.routes";
import { WebComponentMainRoutes } from "@WorkSpaceComponents/routes/main.routes";
import { WebPageMainRoutes } from "@WorkSpacePages/routes/main.routes";
import { Router } from "express";

export const routes: Router[] = [
  WorkSpaceMainRoutes,
  WebComponentMainRoutes,
  WebPageMainRoutes
];