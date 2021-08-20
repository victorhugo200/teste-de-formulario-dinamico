import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubModalidadeComponent } from './sub-modalidade.component';
import { MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubModalidadeComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  exports: [SubModalidadeComponent]
})
export class SubModalidadeModule { }
