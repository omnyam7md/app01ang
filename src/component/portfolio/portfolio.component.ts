import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
 selectedImage: string = '';

  openModal(event: Event) {
    const container = event.currentTarget as HTMLElement;
    const img = container.querySelector('img') as HTMLImageElement;
    this.selectedImage = img.src;

    const modal = document.getElementById('imageModal') as HTMLElement;
    modal.style.display = 'flex';
  }

  closeModal() {
    const modal = document.getElementById('imageModal') as HTMLElement;
    modal.style.display = 'none';
  }
}
