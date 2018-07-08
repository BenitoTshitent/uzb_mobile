import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TacceuilPage } from './tacceuil';

@NgModule({
  declarations: [
    TacceuilPage,
  ],
  imports: [
    IonicPageModule.forChild(TacceuilPage),
  ],
})
export class TacceuilPageModule {}
