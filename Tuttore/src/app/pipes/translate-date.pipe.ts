import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "translateDate"
})
export class TranslateDatePipe implements PipeTransform {
  transform(date: number): string {
    return new Date(date).toString();
  }
}
