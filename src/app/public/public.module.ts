import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { AboutComponent } from './about/about.component';
import { AboutService } from './about/about.service';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  providers:[AboutService],
  exports: [
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ]
})
export class PublicModule { }
