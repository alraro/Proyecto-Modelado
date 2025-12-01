package Deportes.Futbol;

import Abstractas.Equipo;
import Abstractas.Partido;
import Interfaces.Strategy;

public class PuntuacionFutbol implements Strategy {
    // Implementación del método calcularPuntos para fútbol
    @Override
    public int calcularPuntos(Equipo equipo, Partido partido) {
        if (!partido.isFinalizado()) return 0; // Partido no finalizado, no hay puntos
        // Parseamos los resultados del partido del string a int
        String[] resultados = partido.getResultado().split("-");
        int golesLocal = Integer.parseInt(resultados[0].trim());
        int golesVisitante = Integer.parseInt(resultados[1].trim());

        boolean esEquipoLocal = partido.getEquipoLocal().equals(equipo);

        if( golesLocal == golesVisitante ) {
            return 1; // Empate
        } else if ((golesLocal > golesVisitante && esEquipoLocal)) {
            return 3; // Gano el equipo local
        } else if (!esEquipoLocal && (golesVisitante > golesLocal)) {
            return 3; // Gano el equipo visitante
        }else {
            return 0; // Perdió el equipo
        }
    }
}
