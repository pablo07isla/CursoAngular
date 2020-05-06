
import { Component, OnInit } from '@angular/core';
import Paciente from 'src/app/models/Paciente';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css'],
})
export class PacienteListComponent implements OnInit {

  pacientes: Paciente[];
  //pacienteService: PacienteServiceService;

  constructor(private pacienteService:PacienteServiceService) {
    //this.pacienteService = new PacienteServiceService();
    this.pacientes = this.pacienteService.getAll();
  }

  ngOnInit(): void {

  }
}
