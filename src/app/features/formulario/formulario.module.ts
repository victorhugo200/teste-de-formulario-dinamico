import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatIconModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { FormularioComponent } from './formulario.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FormularioModule { }
