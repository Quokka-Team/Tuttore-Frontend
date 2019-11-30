import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any): string {
    if (image==null || image==undefined) {
      return "assets/img/no-profile-icon.png";
    }else{
      return image;
    }
  }

}
