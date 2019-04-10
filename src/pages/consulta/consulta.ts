import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';

@IonicPage()
@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
  
  providers: [
    ConfigProvider
] 
})
export class ConsultaPage {
  txtEstado:string;
  txtCidade:string;
  txtRua:string;
  public itens :any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public configProvider: ConfigProvider) {
  }

  ionViewDidLoad() {
    
  }
  getEndereco(){
    this.configProvider.getLocation(this.txtEstado.toUpperCase(),this.txtCidade, this.txtRua).subscribe(
      data=>{
        this.itens = data;
      }, error=>{
        console.log(error);
      }
    )
}
}
