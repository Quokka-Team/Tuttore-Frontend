import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noiconimage'
})
export class NoiconimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return "assets/img/no-profile-image.png";
    }
    if (images.length > 0) {
      return images[0];
    }
    return "assets/img/no-profile-image.png";
  }


}
