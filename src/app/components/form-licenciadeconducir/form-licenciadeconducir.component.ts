import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form-licenciadeconducir',
  standalone: true,
  imports: [],
  templateUrl: './form-licenciadeconducir.component.html',
  styleUrl: './form-licenciadeconducir.component.css',
})
export class FormLicenciadeconducirComponent implements OnInit{
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Formulario');
  }
}
