import { Injectable } from "@angular/core";
import { Global } from "../global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient){}

    updateDepartamento(departamento: Departamento): Observable<any>{
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;
        return this._http.put(url, json, {headers: header});
    }

    insertarDepartamento(departamento: Departamento): Observable<any> {
        //DEBEMOS CONVERTIR EL OBJETO A JSON
        var json = JSON.stringify(departamento);
        //DEBEMOS INDICAR QUE TIPO DE OBJETO VAMOS A ENVIAR
        //POR DEFECTO, LOS SERVICIOS ESTAN ESTIPULADOS PARA JSON
        //PERO NO TODOS.
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;
        return this._http.post(url, json, {headers: header});
    }

    getDepartamentos(): Observable<any>{
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;
        return this._http.get(url);
    }
}