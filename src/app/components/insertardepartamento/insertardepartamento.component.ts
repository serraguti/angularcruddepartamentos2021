import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css']
})
export class InsertardepartamentoComponent implements OnInit {

  constructor() { }

  insertarDepartamento(): void{

  }

  ngOnInit(): void {
  }

}
