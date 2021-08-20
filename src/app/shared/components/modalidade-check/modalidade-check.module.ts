import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalidadeCheckComponent } from './modalidade-check.component';
import { MatCheckboxModule } from '@angular/material';
import { SubModalidadeModule } from '../sub-modalidade/sub-modalidade.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ModalidadeCheckComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    SubModalidadeModule,
    ReactiveFormsModule
  ],
  exports: [ModalidadeCheckComponent],
  schemas: []
})
export class ModalidadeCheckModule { }
