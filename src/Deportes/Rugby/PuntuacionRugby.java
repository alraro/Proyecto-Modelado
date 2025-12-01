package Deportes.Rugby;

import Abstractas.Equipo;
import Abstractas.Partido;
import Interfaces.Strategy;

public class PuntuacionRugby implements Strategy {
    @Override
    public int calcularPuntos(Equipo equipo, Partido partido) {
        if (!partido.isFinalizado()) return 0;

        String[] resultados = partido.getResultado().split("-");
        int puntosLocal = Integer.parseInt(resultados[0].trim());
        int puntosVisitante = Integer.parseInt(resultados[1].trim());

        boolean esEquipoLocal = partido.getEquipoLocal().equals(equipo);

        if (puntosLocal == puntosVisitante) {
            return 2; // Empate
        } else if (esEquipoLocal) {
            if (puntosLocal > puntosVisitante) {
                return 4; // Victoria
            } else {
                return 0; // Derrota
            }
        } else {
            if (puntosVisitante > puntosLocal) {
                return 4; // Victoria
            } else {
                return 0; // Derrota
            }
        }
    }
}

