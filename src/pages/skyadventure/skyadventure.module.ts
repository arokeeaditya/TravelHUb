import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkyadventurePage } from './skyadventure';

@NgModule({
  declarations: [
    SkyadventurePage,
  ],
  imports: [
    IonicPageModule.forChild(SkyadventurePage),
  ],
})
export class SkyadventurePageModule {}
