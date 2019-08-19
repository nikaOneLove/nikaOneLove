import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ]
})
export class MaterialModule {
}
