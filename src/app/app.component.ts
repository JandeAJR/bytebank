import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'bytebank';

  // Injetar no construtor da classe o serviço TransferenciaService
  constructor(private service: TransferenciaService) {}

  /*
  transferir($event) {
    console.log($event);
    this.service.adicionar($event);
  }

  transferir($event) {
    console.log($event);

    // O operador {...<objeto>} decompõe o objeto retornando as suas propriedades separadamente.
    // Seria o mesmo que transferencia = {valor; destino}
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }
  */

}
