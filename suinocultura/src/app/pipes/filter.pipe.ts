import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, collum: string): any[] {
    // Verifica se não há itens ou se o texto de pesquisa está vazio
    if (!items || !searchText) {
      return items; // Retorna os itens sem filtragem se não houver itens ou texto de pesquisa
    }

    // Converte o texto de pesquisa para minúsculas para tornar a comparação sem distinção entre maiúsculas e minúsculas
    searchText = searchText.toLowerCase();

    // Filtra os itens com base no texto de pesquisa fornecido e na coluna selecionada
    return items.filter(item => {
      // Verifica se a coluna é uma data
      if (collum && (collum === 'dataNascimento' || collum === 'dataSaida')) {
        // Verifica se a data é válida e converte para o formato de data correto
        const dataNasc = new Date(item[collum]);
        if (!isNaN(dataNasc.getTime())) {
          // Se a data for válida, formata como string no formato dd/mm/aaaa
          const dataFormatada = this.formatarData(dataNasc);
          // Verifica se a data formatada inclui o texto de pesquisa
          return dataFormatada.includes(searchText);
        }
      } else if (collum) {
        // Outras colunas, converte para string e verifica se inclui o texto de pesquisa
        return item[collum].toString().toLowerCase().includes(searchText);
      } else {
        return false;
      }
    });
  }

  // Função para formatar a data como string no formato dd/mm/aaaa
  private formatarData(data: Date): string {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
}
