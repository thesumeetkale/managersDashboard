import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmployeeServiceService {
  constructor(public http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http
      .get<any>("http://localhost:3000/employees")
      .pipe(map((res: any) => res));
  }

  addEmployee(data): Observable<any> {
    return this.http
      .post<any>("http://localhost:3000/employees", data)
      .pipe(map((res: any) => res));
  }

  editEmployee(id, data): Observable<any> {
    return this.http
      .put<any>("http://localhost:3000/employees/" + id, data)
      .pipe(map((res: any) => res));
  }

  deleteEmployee(id): Observable<any> {
    return this.http
      .delete<any>("http://localhost:3000/employees/" + id)
      .pipe(map((res: any) => res));
  }
}
