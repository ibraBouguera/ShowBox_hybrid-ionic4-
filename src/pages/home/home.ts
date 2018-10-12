import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { WebIntent } from '@ionic-native/web-intent';
import { ChannelsPage } from '../channels/channels';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories =[];

  constructor(public navCtrl: NavController,private data:DataProvider,private intent :WebIntent) {

    this.data.get_categories().subscribe((resp) => {
      console.log(resp);

      this.categories=resp;
    });
  }

  get_channels(id){
    this.navCtrl.push(ChannelsPage,{
      cat:id
    });
  }

}
