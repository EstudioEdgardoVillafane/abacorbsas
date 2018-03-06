import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductosComponent } from '../productos/productos.component';
import { DetalleProductosComponent } from '../detalle-productos/detalle-productos.component';
import { BeneficiosComponent } from '../beneficios/beneficios.component';
import { DetalleBeneficiosComponent } from '../detalle-beneficios/detalle-beneficios.component';
import { ComoLlegarComponent } from '../como-llegar/como-llegar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'detalle-productos/:prodId', component: DetalleProductosComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'detalle-beneficios/:id', component: DetalleBeneficiosComponent },
  { path: 'como-llegar/', component: ComoLlegarComponent }
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
export class AppRoutingModule { }
