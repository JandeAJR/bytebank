import { Component, Output } from "@angular/core";
import * as EventEmitter from 'events';


@Component ({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: Number = 0;
  destino: Number = 0;

  transferir() {
    console.log("Transferência efetivada");

    const valorEmitir = {valor: this.valor, destino: this.destino};

    console.log("Valor: ", this.valor);
    console.log("Destino: ", this.destino);
  }
}
