import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegistrationComponent } from '../registration/registration.component';
import { BrandComponent } from '../brand/brand.component';
import { SupplierComponent } from '../supplier/supplier.component';



const routes: Routes = [
  {
      path: 'registration',
      component: RegistrationComponent,
  },
  {
    path: '',
    component: DashboardComponent,
},
  {
    path: 'supplier',
    component: SupplierComponent,
},
{
    path: 'brand',
    component: BrandComponent,
},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }