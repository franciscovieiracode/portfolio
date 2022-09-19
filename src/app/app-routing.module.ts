import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'teste', component:TesteComponent},
  {path:'**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
