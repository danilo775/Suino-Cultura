export interface Suino {
    brincoAnimal: number;
    brincoPai: number;
    brincoMae: number;
    dataNascimento: string;
    dataSaida: string;
    pesos: { peso: string; dataPeso: string; }[]; // Certifique-se de que 'pesos' está definido aqui
    status: string;
    sexo: string;
    id?: string;
}
