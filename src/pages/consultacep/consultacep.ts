import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';


@IonicPage()
@Component({
  selector: 'page-consultacep',
  templateUrl: 'consultacep.html',
})
export class ConsultacepPage {
txtCep:string;
public resultado:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public configProvider: ConfigProvider) {
  }

  ionViewDidLoad() {

  }

  getEnderecoByCep(){
    this.configProvider.getLocationByCep(this.txtCep).subscribe(
      (data: any) => {
        this.resultado = this.resultado.concat(data);
      }, error => {
        console.log(error);
      }
    )
    
}



}
