import { Component, OnInit } from '@angular/core';
import Paciente from 'src/app/models/Paciente';
import PacienteServiceInterface from 'src/app/services/paciente-service.service.interface';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css'],
})
export class PacienteListComp implements OnInit {
  pacientes: Paciente[];
  //pacienteService: PacienteServiceService;

  constructor(private pacienteService: PacienteServiceInterface) {
    //this.pacienteService = new PacienteServiceService();
    this.pacienteService.getAll().subscribe((data: Paciente[]) => {
      this.pacientes = data;
    });
  }

  ngOnInit(): void {}
}
