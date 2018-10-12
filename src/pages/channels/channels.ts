import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { WebIntent } from '@ionic-native/web-intent';

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channels =[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private data:DataProvider,private intent :WebIntent) {
    this.data.get_channels(navParams.get('cat')).subscribe((resp) => {
      this.channels=resp;
    });
  }

  stream(name,file,url,user,pass) {
    console.log(url+user+pass+file);

    const options = {
      action: this.intent.ACTION_VIEW,
      package: 'com.mxtech.videoplayer.ad',
      url:url+user+pass+file,
      type:'application/x-mpegURL',
      extras: {
        'title':name,
        'secure_uri': true
      }
    };
    this.intent.startActivity(options).then(function(){

    }, function(err){
      alert(err);

    });
  }

}
