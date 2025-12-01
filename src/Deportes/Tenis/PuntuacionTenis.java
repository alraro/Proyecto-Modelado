package Deportes.Tenis;

import Abstractas.Equipo;
import Abstractas.Partido;
import Interfaces.Strategy;

public class PuntuacionTenis implements Strategy {
    @Override
    public int calcularPuntos(Equipo equipo, Partido partido) {
        if (!partido.isFinalizado()) return 0;

        String[] resultados = partido.getResultado().split("-");
        int setsLocal = Integer.parseInt(resultados[0].trim());
        int setsVisitante = Integer.parseInt(resultados[1].trim());

        boolean esEquipoLocal = partido.getEquipoLocal().equals(equipo);

        if (esEquipoLocal) {
            return setsLocal > setsVisitante ? 1 : 0;
        } else {
            return setsVisitante > setsLocal ? 1 : 0;
        }
    }
}

