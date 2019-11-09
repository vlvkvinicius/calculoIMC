import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  private altura: string;
  private peso: string;
  private resultado: number;
  private situacao: string;

  constructor() {}

  calculaImc(){
    this.resultado = parseFloat(this.peso) / (parseFloat(this.altura) * parseFloat(this.altura));

    if(this.resultado < 18.5){
      this.situacao = "Abaixo do normal";
    } else if(this.resultado >= 18.5 && this.resultado <= 24.99) {
      this.situacao = "Normal";
    } else if(this.resultado >= 25 && this.resultado <= 29.99){
      this.situacao = "Acima do peso";
    } else if(this.resultado >= 30 && this.resultado <= 34.99){
      this.situacao = "Obesidade 1";
    } else if(this.resultado >= 35 && this.resultado <= 39.99){
      this.situacao = "Obesidade 2(severa)";
    } else{
      this.situacao = "Obesidade 3(Mórbita)";
    }
  }

  exibeResultado(){
    return this.resultado;
  }

  exibeSituacao(){
    return this.situacao;
  }

}
