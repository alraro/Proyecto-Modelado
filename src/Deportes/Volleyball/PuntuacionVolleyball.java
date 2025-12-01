package Deportes.Volleyball;

import Abstractas.Equipo;
import Abstractas.Partido;
import Interfaces.Strategy;

public class PuntuacionVolleyball implements Strategy {
    @Override
    public int calcularPuntos(Equipo equipo, Partido partido) {
        if (!partido.isFinalizado()) return 0;

        String[] resultados = partido.getResultado().split("-");
        int setsLocal = Integer.parseInt(resultados[0].trim());
        int setsVisitante = Integer.parseInt(resultados[1].trim());

        boolean esEquipoLocal = partido.getEquipoLocal().equals(equipo);

        if (esEquipoLocal) {
            if (setsLocal > setsVisitante) {
                return (setsLocal == 3 && setsVisitante < 2) ? 3 : 2;
            } else {
                return 1;
            }
        } else {
            if (setsVisitante > setsLocal) {
                return (setsVisitante == 3 && setsLocal < 2) ? 3 : 2;
            } else {
                return 1;
            }
        }
    }
}

