import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  constructor(public http: HttpClient, public router: Router) {}

  registerUser(data: any): Observable<any> {
    return this.http
      .post<any>("http://localhost:3000/users", data)
      .pipe(map((res: any) => res));
  }

  userLogin(email: any): Observable<any> {
    return this.http
      .get<any>("http://localhost:3000/users?email=" + email)
      .pipe(map((res: any) => res));
  }

  routeTopage() {
    this.router.navigate(["employeelist"]);
  }
}
