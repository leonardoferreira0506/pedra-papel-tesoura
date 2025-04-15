import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  opcoes = ['Pedra', 'Papel', 'Tesoura'];
  escolhaUsuario = '';
  escolhaComputador = '';
  resultado = '';
  mostrarResultado = false;
  pontuacaoUsuario = 0;
  pontuacaoComputador = 0;

  jogar(escolha: string) {
    this.escolhaUsuario = escolha;
    this.escolhaComputador = this.opcoes[Math.floor(Math.random() * 3)];
    this.verificarVencedor();
    this.mostrarResultado = true;
  }

  verificarVencedor() {
    if (this.escolhaUsuario === this.escolhaComputador) {
      this.resultado = 'Empate!';
    } else if (
      (this.escolhaUsuario === 'Pedra' && this.escolhaComputador === 'Tesoura') ||
      (this.escolhaUsuario === 'Papel' && this.escolhaComputador === 'Pedra') ||
      (this.escolhaUsuario === 'Tesoura' && this.escolhaComputador === 'Papel')
    ) {
      this.resultado = 'Você venceu!';
      this.pontuacaoUsuario++;
    } else {
      this.resultado = 'Computador venceu!';
      this.pontuacaoComputador++;
    }
  }

  reiniciar() {
    this.mostrarResultado = false;
    this.escolhaUsuario = '';
    this.escolhaComputador = '';
    this.resultado = '';
    this.pontuacaoUsuario = 0; // **Reiniciar a pontuação**
    this.pontuacaoComputador = 0; // **Reiniciar a pontuação**
  }
}
