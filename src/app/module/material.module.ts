import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

const modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatListModule,
  MatCardModule,
  MatMenuModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})

export class MaterialModule {}
