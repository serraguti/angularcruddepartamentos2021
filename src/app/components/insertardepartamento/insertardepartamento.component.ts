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
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef;
  
  constructor(
    private _router: Router,
    private _service: ServiceDepartamentos
  ) { }

  insertarDepartamento(): void{
    var numero = this.cajanumero.nativeElement.value;
    var nombre = this.cajanombre.nativeElement.value;
    var localidad = this.cajalocalidad.nativeElement.value;
    var departamento = new Departamento(parseInt(numero), nombre, localidad);
    this._service.insertarDepartamento(departamento).subscribe(response => {
      this._router.navigate(["/"]);
    });
  }

  ngOnInit(): void {
  }
}
