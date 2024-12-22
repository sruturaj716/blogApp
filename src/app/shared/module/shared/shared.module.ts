import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [FooterComponent,CommonModule]
})
export class SharedModule { }
