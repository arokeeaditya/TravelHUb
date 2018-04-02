import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdventurePage } from './adventure';

@NgModule({
  declarations: [
    AdventurePage,
  ],
  imports: [
    IonicPageModule.forChild(AdventurePage),
  ],
})
export class AdventurePageModule {}
