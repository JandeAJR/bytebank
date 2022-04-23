import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //@Input() transferencias: any[];
  transferencias: any[];

  // Injetar no construtor da classe o serviço TransferenciaService
  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    //this.transferencias = this.service.transferencias;

    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    } );
  }

}
