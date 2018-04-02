import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HillstationPage } from './hillstation';

@NgModule({
  declarations: [
    HillstationPage,
  ],
  imports: [
    IonicPageModule.forChild(HillstationPage),
  ],
})
export class HillstationPageModule {}
