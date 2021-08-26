import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { ManagerDashboardModule } from "./ManagerDashboardModule/manager-dashboard/manager-dashboard.module";
import { LoginModuleModule } from "./LoginModule/login-module/login-module.module";
import { ComponentsModuleModule } from "./components/components-module/components-module.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { AuthGuardService } from "./services/authGuard/authguard.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ManagerDashboardModule,
    LoginModuleModule,
    ComponentsModuleModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
