import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(
    private _service: ServiceDepartamentos,
    private _route: ActivatedRoute
    ) { }

  eliminarDepartamento(iddepartamento: number): void{
    this._service.deleteDepartamento(iddepartamento.toString()).subscribe(response => {
      this.cargarDepartamentos();
    });
  }

  cargarDepartamentos(): void{
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    });
  }

  ngOnInit(): void {
    //PARA RECIBIR PARAMETROS, ES UN CODIGO AISLADO
    //Y ASINCRONO
    this._route.params.subscribe((params: Params) => {
      //AQUI CUANDO UN PARAMETRO CAMBIE EN UNA RUTA
      if (params['iddepartamento'] != null) {
        var id = parseInt(params['iddepartamento']);
        this.eliminarDepartamento(id);
      }
    });
    this.cargarDepartamentos();
  }
}
