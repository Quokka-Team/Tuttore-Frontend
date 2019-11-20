import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "translateDate"
})
export class TranslateDatePipe implements PipeTransform {
  transform(date: number): string {
    // let dateString = new Date(date);
    // return (
    //   dateString.getHours().toString() +
    //   ":" +
    //   dateString.getMinutes().toString() +
    //   " - " +
    //   dateString.getMonth().toString() +
    //   " " +
    //   dateString.getDay().toString()
    // );
    return new Date(date).toString();
  }
}
