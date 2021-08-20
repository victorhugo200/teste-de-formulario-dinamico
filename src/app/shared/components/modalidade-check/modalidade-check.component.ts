import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalidadeProps, SubGroup } from '../../models/modalidade';

@Component({
  selector: 'vh-modalidade-check',
  templateUrl: './modalidade-check.component.html',
  styleUrls: ['./modalidade-check.component.scss']
})
export class ModalidadeCheckComponent implements OnInit {

   @Input() data: ModalidadeProps;
   @Input() form: FormGroup;
   @Input() nameControl: string;
   @Input() value: string;
   
   groups: SubGroup[] = [];
  constructor() { }

  ngOnInit() {
 
    this.mapper();

    if (this.groups.length) {
      this.groups.forEach(item => {
        this.setControlsInForm(item.group);

      });
    }

    this.form.get(this.nameControl).valueChanges.subscribe(resp => {
      if (resp) {
        this.groups.forEach(item => {
          this.form.get(`${item.group}`).setValue(item.name);
        });
      } else {
        this.groups.forEach(item => {
          this.form.get(`${item.group}`).setValue('');
        });
      }
   });

   
   
  
  }

  setControlsInForm(name: string){
    this.form.setControl(`${name}`,  new FormControl(`${name}`));
  }
  mapper(){
    this.groups = this.data.subGroups.map(({id, name, items}, index) => {
      return {
        id, 
        name,
        items,
        group: `group${id}`
      }
    });
  }

  getValue() {
    this.groups.forEach(item => {
      const { group }  = item;
      const valor = {
        group: this.form.get(`${item.group}`).value
      };
    
      this.form.get(this.nameControl).setValue({valor});

    });
  }

}
