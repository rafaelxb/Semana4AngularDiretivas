import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedDirective } from './directives/red.directive';
import { BlueDirective } from './directives/blue.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RedDirective,
    BlueDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
