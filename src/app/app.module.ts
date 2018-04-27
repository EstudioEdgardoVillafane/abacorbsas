import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
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
import { BackendUsuariosComponent } from './backend-usuarios/backend-usuarios.component';
import { BackendUsuarioService } from './backend-usuario.service';
import { ContentComponent } from './content/content.component';
import { ContentService } from './content.service';
// import { EditorModule } from '@tinymce/tinymce-angular';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ReplaceLineBreaksPipe } from './replace-line-breaks.pipe';
import { ItemUsoComponent } from './item-uso/item-uso.component';
import { AdminService } from './admin.service';
import { BackendCentComponent } from './backend-cent/backend-cent.component';
import { ContactoService } from './contacto.service';
import { ThanksComponent } from './thanks/thanks.component';
import { ChangeLinePipe } from './change-line.pipe';
import { FichaComponent } from './ficha/ficha.component';
import { FichaService } from './ficha.service';

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
    ReplaceLineBreaksPipe,
    BackendUsuariosComponent,
    ContentComponent,
    CaracteristicasComponent,
    ItemUsoComponent,
    BackendCentComponent,
    ThanksComponent,
    ChangeLinePipe,
    FichaComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    // EditorModule
  ],
  providers: [ BeneficioService,BackendUsuarioService,ContentService,AdminService,ContactoService,FichaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
