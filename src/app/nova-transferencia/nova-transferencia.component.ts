import { Component, Output, EventEmitter } from "@angular/core";
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';

@Component ({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;
  descricao: string = "";

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log("Solicitada nova transferência");

    //const valorEmitir = {valor: this.valor, destino: this.destino, descricao: this.descricao};
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino, descricao: this.descricao};

    this.service.adicionar(valorEmitir).subscribe({
      next: () => this.limparCampos(),
      error: (error) => console.error(error),
      complete: () => console.info('complete!')
    })

    /*
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error)
    );
    */

    //this.aoTransferir.emit(valorEmitir);
    //this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
    this.descricao = "";
  }

}
