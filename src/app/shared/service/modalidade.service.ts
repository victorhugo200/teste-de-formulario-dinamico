import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  ModalidadeProps } from '../models/modalidade';
const API = 'http://localhost:3000/modalidades';
@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  constructor(private httpClient: HttpClient) { }

   obterModalidade() {
   return this.httpClient.get<ModalidadeProps[]>(API);
  }
}
