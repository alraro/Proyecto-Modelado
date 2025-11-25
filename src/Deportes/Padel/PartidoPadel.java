package Deportes.Padel;

import Abstractas.Partido;
import Abstractas.Torneo;
import Abstractas.Equipo;
import Abstractas.Jugador;
import Enumerados.TipoJugador;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Map;

public class PartidoPadel extends Partido {
    public PartidoPadel(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora, Map<Jugador, TipoJugador> alineacionLocal, Map<Jugador, TipoJugador> alineacionVisitante) {

        super(
            torneo, 
            local, 
            visitante, 
            lugar, 
            fecha, 
            hora,
            alineacionLocal,
            alineacionVisitante
        );
    }
}
