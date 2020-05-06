
import Paciente from '../models/Paciente';

export abstract class PacienteServiceInterface {

      
    abstract getAll():Paciente[];
    abstract add(paciente:Paciente);

  }

  export default PacienteServiceInterface;
  