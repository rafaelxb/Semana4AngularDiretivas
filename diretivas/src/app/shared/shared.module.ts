import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedDirective } from './directives/red.directive';
import { BlueDirective } from './directives/blue.directive';
import { PhonePipe } from './pipes/phone.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RedDirective,
    BlueDirective,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PhonePipe
  ]
})
export class SharedModule { }
