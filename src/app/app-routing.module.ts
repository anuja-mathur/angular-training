import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerWithSubjectComponent } from './countdown-timer-with-subject/countdown-timer-with-subject.component';
import { StudentsRecordComponent } from './students-record/students-record.component';
import { DynamicBlocksComponent } from './dynamic-blocks/dynamic-blocks.component';

const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsDetailComponent },
  { path: 'countdown-timer', component: CountdownTimerComponent },
  { path: 'countdown-timer-with-subject', component: CountdownTimerWithSubjectComponent },
  { path: 'students-record', component: StudentsRecordComponent },
  { path: 'dynamic-blocks', component: DynamicBlocksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
