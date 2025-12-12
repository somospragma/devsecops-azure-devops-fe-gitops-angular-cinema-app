import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatsComponent } from './seats/seats.component';
import { FoodsComponent } from './foods/foods.component';

export const routes: Routes = [
    { path: 'seats', component: SeatsComponent },
    { path: 'foods', component: FoodsComponent },
    { path: '', redirectTo: 'seats', pathMatch: 'full' },
    { path: '**', redirectTo: 'seats' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }