// idade.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idade'
})
export class IdadePipe implements PipeTransform {
  transform(dataNascimento: Date): string {
    // Implementar a lógica para calcular a idade em meses
    return 'X meses';
  }
}