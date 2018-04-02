import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeblogPage } from './homeblog';

@NgModule({
  declarations: [
    HomeblogPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeblogPage),
  ],
})
export class HomeblogPageModule {}
