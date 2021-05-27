import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public backgroundMode :BackgroundMode,public nativeStorage: NativeStorage, private plt: Platform) {
        this.initBackgroundMode();
  }
  private initBackgroundMode() {
    this.plt.ready().then(() => {
        this.backgroundMode.setDefaults({ silent: true });
        this.backgroundMode.enable();
        if (this.plt.is("android")) {
            this.backgroundMode.on('activate').subscribe(() => {
                this.backgroundMode.disableWebViewOptimizations();                
            });
        }
    })
}

}
