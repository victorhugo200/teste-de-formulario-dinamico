import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vh-sub-modalidade',
  templateUrl: './sub-modalidade.component.html',
  styleUrls: ['./sub-modalidade.component.scss']
})
export class SubModalidadeComponent implements OnInit {
  @Input() name: string;
  @Input() formSubGroup: FormGroup;
  @Input() control: string;
  @Input() value: string;
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
