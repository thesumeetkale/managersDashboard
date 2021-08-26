import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuardService as AuthGuard } from "./services/authGuard/authguard.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import(`./LoginModule/login-module/login-module.module`).then(
        (m) => m.LoginModuleModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import(`./LoginModule/login-module/login-module.module`).then(
        (m) => m.LoginModuleModule
      ),
  },
  {
    path: "employeeList",
    loadChildren: () =>
      import(
        `./ManagerDashboardModule/manager-dashboard/manager-dashboard.module`
      ).then((m) => m.ManagerDashboardModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
