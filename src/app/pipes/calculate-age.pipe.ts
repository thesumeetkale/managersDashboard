import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "calculateAge",
})
export class CalculateAgePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let todaysDate = new Date();
    let age = todaysDate.getFullYear() - Number(value.split("-")[0]);

    if (age >= 0) {
      return age;
    } else {
      return "Incorrect Value";
    }
    return null;
  }
}
