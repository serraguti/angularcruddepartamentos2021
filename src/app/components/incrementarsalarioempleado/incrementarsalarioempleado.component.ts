import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-incrementarsalarioempleado',
  templateUrl: './incrementarsalarioempleado.component.html',
  styleUrls: ['./incrementarsalarioempleado.component.css']
})
export class IncrementarsalarioempleadoComponent implements OnInit {
  public empleado!: Empleado;
  @ViewChild("cajaincremento") cajaincremento!: ElementRef;

  constructor(
    private _service: ServiceEmpleados,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  getEmpleado(idempleado: string): void{
    this._service.getDetallesEmpleado(idempleado).subscribe(response => {
      this.empleado = response;
    });
  }

  incrementarSalario(): void{
    var incremento = this.cajaincremento.nativeElement.value;
    var id = this.empleado.idEmpleado.toString();
    this._service.incrementarSalarioEmpleado(id, incremento).subscribe(response => {
      this.getEmpleado(id);
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var idempleado = params['idempleado'];
      this.getEmpleado(idempleado);
    });
  }
}
