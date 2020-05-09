import { Injectable } from '@angular/core';
import Paciente from '../models/Paciente';
import PacienteServiceInterface from './paciente-service.service.interface';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacienteServiceService extends PacienteServiceInterface {
  constructor() {
    super();
  }

  add(paciente: Paciente) {
    throw new Error('Method not implemented.');
  }

  getAll(): Observable<Paciente[]> {
    return Observable.create((observer: Observer<Paciente[]>) => {
      observer.next([
        {
          id: 1,
          nombre: 'Boris',
          apellido: 'Jhonson',
          fechaNacimiento: new Date(1961, 3, 1),
        },
        {
          id: 2,
          nombre: 'Juan',
          apellido: 'Perez',
          fechaNacimiento: new Date(1985, 10, 25),
        },
        {
          id: 3,
          nombre: 'Esteban',
          apellido: 'Garcia',
          fechaNacimiento: new Date(1978, 5, 15),
        },
        {
          id: 4,
          nombre: 'Pablo',
          apellido: 'Isla Casares',
          fechaNacimiento: new Date(1976, 12, 30),
        },
      ]);
      observer.complete();
    });
  }
}
