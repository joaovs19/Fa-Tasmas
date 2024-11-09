import { CommonModule, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [NgIf, CommonModule, MatIcon, ],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss'
})
export class InitialPageComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(){
    this.isMenuOpen = false;
  }

  // Fecha o menu quando clicar fora da área do menu
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const menu = document.querySelector('.sidebar');
    const button = document.querySelector('.imgHamburguer');

    // Verifica se o clique ocorreu fora do menu e do botão de abrir menu
    if (this.isMenuOpen && menu && button && !menu.contains(event.target as Node) && !button.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }
  }

  

}
