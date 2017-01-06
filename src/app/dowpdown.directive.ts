import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[rbDowpdown]'
})
export class DowpdownDirective {
private isOpen = false;
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }

  @HostListener('click') open(){
    this.isOpen = !this.isOpen;
  }
  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }

}
