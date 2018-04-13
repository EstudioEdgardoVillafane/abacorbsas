import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from  './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { ComoLlegarComponent } from './como-llegar/como-llegar.component';
import { DetalleBeneficiosComponent } from './detalle-beneficios/detalle-beneficios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { HagDistComponent } from './hag-dist/hag-dist.component';
import { BeneficioService } from './beneficio.service';
import { NavBackendComponent } from './nav-backend/nav-backend.component';
import { AdminComponent } from './admin/admin.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ReplaceLineBreaksPipe } from './replace-line-breaks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    DetalleProductosComponent,
    BeneficiosComponent,
    ComoLlegarComponent,
    DetalleBeneficiosComponent,
    ContactoComponent,
    ProductosComponent,
    HagDistComponent,
    NavBackendComponent,
    AdminComponent,
    CaracteristicasComponent,
    ReplaceLineBreaksPipe
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ BeneficioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
