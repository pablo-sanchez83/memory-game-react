import { ValoresCarta, PalosColores } from "../constants";

export const GenerateGame = (NumberOfCards) => {
    const game = [];
    const validIds = [];
    const ValoresDisponibles = [...ValoresCarta]
    for (let i = 0; i < NumberOfCards; i++) {
        validIds.push(i);
    }
    while (validIds.length >= 1) {
        const idIndex = Math.floor(Math.random() * validIds.length); // Índice aleatorio para seleccionar un id de validIds
        const id = validIds[idIndex]; // Seleccionar id
        validIds.splice(idIndex, 1); // Eliminar id seleccionado de validIds
        
        const parejaIndex = Math.floor(Math.random() * (validIds.length)); // Índice aleatorio para seleccionar una pareja de validIds
        const pareja = validIds[parejaIndex]; // Seleccionar pareja
        validIds.splice(parejaIndex, 1); // Eliminar la pareja seleccionada de validIds

        const valorIndex = Math.floor(Math.random() * ValoresDisponibles.length);
        const valor = ValoresDisponibles[valorIndex]; 
        ValoresDisponibles.splice(valorIndex, 1)
        const color = PalosColores[Math.floor(Math.random() * PalosColores.length)].color;
        const icono = PalosColores[Math.floor(Math.random() * PalosColores.length)].icono;
        
        game.push({
            id: id,
            pareja: pareja,
            valor: valor,
            color: color,
            icono: icono
        });
        game.push({
            id: pareja,
            pareja: id,
            valor: valor,
            color: color,
            icono: icono
        });
    }

    for (let i = game.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [game[i], game[j]] = [game[j], game[i]];
    }

    return game;
};
