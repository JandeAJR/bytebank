import { Component, Output, EventEmitter, Renderer2 } from "@angular/core";
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';
import { Router } from "@angular/router";

@Component ({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;
  descricao: string = '';

  constructor(private service: TransferenciaService,
    private router: Router,
    private renderer: Renderer2) {}

  ngOnInit(): void {
    this.focoInput();
  }

  transferir(): void {
    console.log('Solicitada nova transferência');

    //const valorEmitir = {valor: this.valor, destino: this.destino, descricao: this.descricao};
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino, descricao: this.descricao};

    // Forma nova de implementar o método subscribe (versões novas do Angular)
    this.service.adicionar(valorEmitir).subscribe({
      next: () => [this.limparCampos(),
                   this.router.navigateByUrl('extrato')],
      error: (error) => console.error(error),
      complete: () => console.info('complete!')
    })

    // Forma antiga de implementar o método subscribe (versões anteriores do Angular)
    /*
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
    */

    //this.aoTransferir.emit(valorEmitir);
    //this.limparCampos();
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
    this.descricao = '';
  }

  focoInput(): void {
    this.renderer.selectRootElement('#id_destino').focus();
  }

}
