import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dev Alchemist';
  public darkModeButton: any;
  public isDarkMode: boolean = false;

  public setLigthMode(): void {
    this.isDarkMode = false
    this.darkModeButton = document.querySelector(".darkmode");
    this.darkModeButton.style.color = "black";
    this.darkModeButton.style.backgroundColor = "white";
    document.body.classList.remove("darkmode");
  }

  public setDarkMode(): void {
    this.isDarkMode = true
    this.darkModeButton = document.querySelector(".darkmode");
    this.darkModeButton.style.color = "orange";
    document.body.classList.add("darkmode");

    }
    
  }

