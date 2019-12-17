import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "translateDate"
})
export class TranslateDatePipe implements PipeTransform {
  transform(date: number): string {
    let stringDate = new Date(date).toString();
    let n = stringDate.search("GMT");   
    return stringDate.substr(0,n);
  }
}
