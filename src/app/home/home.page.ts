import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private impulsse: InAppBrowser ) {}


  Enviar(){



    const browser = this.impulsse.create('http://localhost/enviopost/pago.php');
    browser.executeScript({code: "(function() { alert(234);   var url = 'http://localhost/enviopost/pago.php';var data = {pago: '150',nombre:'erik'};fetch(url, {  method: 'POST',   body: JSON.stringify(data),   headers:{ 'Content-Type': 'application/json'  }}).then(res => res.json()).catch(error => console.error('Error:', error)).then(response => console.log('Success:', response));  })()"});
  }

}
