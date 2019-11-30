import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noiconimage'
})
export class NoiconimagePipe implements PipeTransform {

  transform(image): string {
    if (image==null || image==undefined) {
      return "assets/img/no-profile-image.png";
    }else{
      return image;
    }
  }


}
