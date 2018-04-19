import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductosComponent } from '../productos/productos.component';
import { DetalleProductosComponent } from '../detalle-productos/detalle-productos.component';
import { BeneficiosComponent } from '../beneficios/beneficios.component';
import { DetalleBeneficiosComponent } from '../detalle-beneficios/detalle-beneficios.component';
import { ComoLlegarComponent } from '../como-llegar/como-llegar.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { HagDistComponent } from '../hag-dist/hag-dist.component';
import { AdminComponent } from '../admin/admin.component';
import { BackendUsuariosComponent } from '../backend-usuarios/backend-usuarios.component'
import { ContentComponent } from '../content/content.component';
import { CaracteristicasComponent } from '../caracteristicas/caracteristicas.component';
import { ItemUsoComponent } from '../item-uso/item-uso.component';
import { BackendCentComponent } from '../backend-cent/backend-cent.component';
import { ThanksComponent } from '../thanks/thanks.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'detalle-productos/:prodId', component: DetalleProductosComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'detalle-beneficios/:benefId', component: DetalleBeneficiosComponent },
  { path: 'como-llegar', component: ComoLlegarComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'hag-dist', component: HagDistComponent },
  { path: 'beneficio/:id', component: BeneficiosComponent },
  { path: 'uso', component: CaracteristicasComponent },
  { path: 'uso/:nombre', component: ItemUsoComponent },
  { path: 'enviado', component: ThanksComponent},
  { path: 'admin/online',
    component: BackendCentComponent,
    children:[
      { path: 'usos', component: ContentComponent },
      { path: 'usuarios', component: BackendUsuariosComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { 
}
