package Deportes.Baloncesto;

import Abstractas.Equipo;
import Abstractas.Partido;
import Interfaces.Strategy;

public class PuntuacionBaloncesto implements Strategy {
    @Override
    public int calcularPuntos(Equipo equipo, Partido partido) {
        if (!partido.isFinalizado()) return 0;

        String[] resultados = partido.getResultado().split("-");
        int puntosLocal = Integer.parseInt(resultados[0].trim());
        int puntosVisitante = Integer.parseInt(resultados[1].trim());

        boolean esEquipoLocal = partido.getEquipoLocal().equals(equipo);
        // Lógica según la FIBA: 2 puntos por victoria, 1 punto por derrota
        if (esEquipoLocal) {
            return puntosLocal > puntosVisitante ? 2 : 1;
        } else {
            return puntosVisitante > puntosLocal ? 2 : 1;
        }
    }
}

