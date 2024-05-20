import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  formulario: FormGroup;
  isFormSubmitted: boolean = false;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      texto: new FormControl("", [Validators.required, Validators.minLength(10)]),
      correo: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  enviar() {
    if (!this.formulario.valid) {
      const invalidFields = Object.keys(this.formulario.controls)
       .filter(field => this.formulario.get(field)?.invalid && this.formulario.get(field)?.touched);
      
      let message = '';
      if (invalidFields.length === 0) {
        message = 'Todos los campos son obligatorios.';
      } else {
        message = `Los siguientes campos están vacíos: ${invalidFields.join(', ')}.`;
      }
      
      alert(message);
      return;
    }
    
    console.log('Formulario enviado correctamente');
    this.isFormSubmitted = true;
  }
}
