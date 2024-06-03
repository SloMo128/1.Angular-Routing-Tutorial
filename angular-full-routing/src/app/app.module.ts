import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component'
import { ContactComponent } from './contact.component'
import { ProductComponent } from './product-component/product.component';
import { ErrorComponent } from './product-component/error.component';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ContactComponent, ProductComponent, ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
