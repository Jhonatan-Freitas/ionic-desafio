import { Component } from '@angular/core';
import { ConsultaPage } from '../consulta/consulta';
import { ConsultacepPage } from '../consultacep/consultacep';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = ConsultaPage;
  tab2Root = ConsultacepPage;
  constructor() {

  }
}
