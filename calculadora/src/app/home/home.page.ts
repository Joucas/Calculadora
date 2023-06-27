import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // variável que recebe os valores dos botões
  valor = '';

  // função para capturar o valor do botão
  acumularValores(valor_btn : string){
    this.valor += valor_btn;
  }

  // função para calcular os valores dados pelo usuário
  // eval() serve para transformar uma combinação de caracteres, como exemplo "10 - 25" em uma linha de código executavel pelo JS
  calcularValor(){
    const res = eval(this.valor);
    this.valor = res.toString();
  }

  // função para limpar a calculadora, transformando a variavel do valor salvo como nada
  clear(){
    this.valor = '';
  }

  // função para apagar a última coisa digitada
  apagarUltimo(){
    const ultimo_valor = this.valor.slice(0,-1)
    this.valor = ultimo_valor;
  }

  // função para calcular porcentagem
  calcularPorcentagem(){
    const porcentagem = eval(this.valor) / 100;
    this.valor = porcentagem.toString();
    this.valor += '*';
  }

  // função para inverter o sinal do valor adicionado na calculadora
  inverterSinal(){
    const valor_invertido = eval(this.valor) * (-1);
    this.valor = valor_invertido.toString();
  }
}
