import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCommandePage } from './add-commande';

@NgModule({
  declarations: [
    AddCommandePage,
  ],
  imports: [
    IonicPageModule.forChild(AddCommandePage),
  ],
})
export class AddCommandePageModule {}
