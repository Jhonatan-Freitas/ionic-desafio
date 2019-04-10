import { Component } from '@angular/core';
import { ConsultaPage } from '../consulta/consulta';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = ConsultaPage;

  constructor() {

  }
}
