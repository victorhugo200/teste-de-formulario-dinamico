import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './features/formulario/formulario.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: '',
    redirectTo: 'formulario',
    pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
