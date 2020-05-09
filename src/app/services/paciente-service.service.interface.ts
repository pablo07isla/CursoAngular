
import Paciente from '../models/Paciente';
import { Observable } from 'rxjs';

export abstract class PacienteServiceInterface {

      
    abstract getAll():Observable <Paciente[]>;
    abstract add(paciente:Paciente);

  }

  export default PacienteServiceInterface;
  