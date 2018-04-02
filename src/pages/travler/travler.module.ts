import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravlerPage } from './travler';

@NgModule({
  declarations: [
    TravlerPage,
  ],
  imports: [
    IonicPageModule.forChild(TravlerPage),
  ],
})
export class TravlerPageModule {}
