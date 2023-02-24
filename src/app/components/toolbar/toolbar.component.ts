import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  menuItems: Iaccion[] = [
    {
      nombre: 'News',
      onclick: false,
    },
    {
      nombre: 'Guides',
      onclick: false,
    },
    {
      nombre: 'Documentation',
      onclick: false,
    },
  ];
  constructor(private router: Router) {}

  nav(act: Iaccion = { nombre: 'home', onclick: false }) {
    this.menuItems.forEach((i) => (i.onclick = false));
    act.onclick = true;
    let nombre = act.nombre.toLowerCase();
    this.router.navigate([`/${nombre}`]);
  }
}

interface Iaccion {
  nombre: string;
  onclick: boolean;
}
