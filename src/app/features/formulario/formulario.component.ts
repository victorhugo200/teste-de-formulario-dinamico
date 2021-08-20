import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalidadeInterface, ModalidadeProps } from 'src/app/shared/models/modalidade';
import { ModalidadeService } from 'src/app/shared/service/modalidade.service';

@Component({
  selector: 'vh-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
   
  modalidade:  ModalidadeProps[] = [];
  formulario: FormGroup;
  constructor(private modalidadeService: ModalidadeService, private fb: FormBuilder) { 
   
  }

  ngOnInit() {
    this.formulario = this.fb.group({})
     this.modalidadeService.obterModalidade().subscribe(response => {
      this.modalidade = this.mapperResponse(response);
      console.log(this.modalidade);
      this.modalidade.forEach((item) => {
        this.setControlsInForm(`${item.control}`);
       });
     });
   
    
     
   
  }


  setControlsInForm(name: string){
    const mockValor = {name: 'VALOR MOCKADO'}
    this.formulario.setControl(`${name}`,  new FormControl(mockValor));
  }

  mapperResponse(arr: ModalidadeProps[]) {
    return arr.map((item, index) => {
        return {
          id: item.id,
          name: item.name,
          subGroups: item.subGroups,
          control: `control${index}`
        }
    })
  }

  save() {
    console.log({VALOR: this.formulario.getRawValue()});
  }

}
