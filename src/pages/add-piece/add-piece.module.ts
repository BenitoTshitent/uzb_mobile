import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPiecePage } from './add-piece';

@NgModule({
  declarations: [
    AddPiecePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPiecePage),
  ],
})
export class AddPiecePageModule {}
