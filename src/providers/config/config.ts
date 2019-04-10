import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ConfigProvider {
  constructor(public http: HttpClient) {
  }
  getLocation(uf:string,localidade:string, logradouro:string ):any{
    return this.http.get("https://viacep.com.br/ws/"+ uf + "/"+localidade+"/"+logradouro+"/json/");
}

}
