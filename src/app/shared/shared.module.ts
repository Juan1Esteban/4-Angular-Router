import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductComponent } from '../shared/components/product/product.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { ImgComponent } from '../shared/components/img/img.component';


@NgModule({
  declarations: [
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    ProductComponent,
    ProductsComponent,
    ImgComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    ProductComponent,
    ProductsComponent,
    ImgComponent
  ]
})
export class SharedModule { }
