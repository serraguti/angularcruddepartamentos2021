import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { InsertardepartamentoComponent } from "./components/insertardepartamento/insertardepartamento.component";
import { EditardepartamentoComponent } from "./components/editardepartamento/editardepartamento.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "insertar", component: InsertardepartamentoComponent},
    {path: "editar/:numero/:nombre/:localidad", component: EditardepartamentoComponent}
]

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);

