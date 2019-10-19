import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nobackground'
})
export class NobackgroundPipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return "assets/img/background-profile.png";
    }
    if (images.length > 0) {
      return images[0];
    }
    return "assets/img/background-profile.png";
  }

}
