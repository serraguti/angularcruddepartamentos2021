import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {
  public departamento!: Departamento;

  constructor(
    private _route: ActivatedRoute
  ) { }

  updateDepartamento(): void {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var numero = parseInt(params['numero']);
      this.departamento = new Departamento
        (numero, params['nombre'], params['localidad']);
    });
  }
}
