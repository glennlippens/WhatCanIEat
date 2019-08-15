import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EdamanComponent } from './components/edaman/edaman.component';
import { EdamanApiDataService } from './services/edaman-api-data.service';
import { IngredientenComponent } from './Components/ingredienten/ingredienten.component';
import { IndexComponent } from './Components/index/Index.component';
import { KlantenComponent } from './Components/klanten/klanten.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ProductComponent } from './components/product/product.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReceptenComponent } from './components/recepten/recepten.component';
import { authService } from './services/auth.service';
import { RestrictedComponent } from './components/restricted/restricted.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Ingredienten', component: IngredientComponent },
  { path: 'recepten', component: ReceptenComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'product', component: ProductComponent },
  { path: 'klanten', component: KlantenComponent },
  { path: 'ingredient', component: IngredientenComponent },
  { path: 'restricted', component: RestrictedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EdamanComponent,
    IngredientenComponent,
    KlantenComponent,
    IndexComponent,
    RegisterComponent,
    ProductComponent,
    IngredientComponent,
    LoginComponent,
    ProfileComponent,
    ContactComponent,
    ReceptenComponent,
    RestrictedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [EdamanApiDataService, authService],
  bootstrap: [AppComponent]
})
export class AppModule { }
