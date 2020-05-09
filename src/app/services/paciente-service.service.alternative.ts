import { Injectable } from '@angular/core';
import Paciente from '../models/Paciente';
import PacienteServiceInterface from './paciente-service.service.interface';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PacienteServiceAlternative extends PacienteServiceInterface {
  
  
  constructor(private httpcliente:HttpClient) {
    super();
  }

  add(paciente: Paciente) {
    throw new Error('Method not implemented.');
  }

  getAll(): Observable<Paciente[]> {
    return this.httpcliente.get<Paciente[]>("http://localhost:3000/pacientes");

    // return Observable.create((observer: Observer<Paciente[]>) => {
    //   observer.next([
    //     {
    //       id: 1,
    //       nombre: 'Juan',
    //       apellido: 'Alberto',
    //       fechaNacimiento: new Date(1961, 3, 1),
    //     },
    //     {
    //       id: 2,
    //       nombre: 'Silvia',
    //       apellido: 'Andrea',
    //       fechaNacimiento: new Date(1985, 10, 25),
    //     },
    //     {
    //       id: 3,
    //       nombre: 'jorge',
    //       apellido: 'Andres',
    //       fechaNacimiento: new Date(1978, 5, 15),
    //     },
    //   ]);
    //   observer.complete();
    // });
  }
}
