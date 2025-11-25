package Deportes.Golf;

import Abstractas.Partido;
import Abstractas.Torneo;
import Abstractas.Equipo;
import java.time.LocalDate;
import java.time.LocalTime;

public class PartidoGolf extends Partido {
    public PartidoGolf(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora) {
        
        super(
            torneo, 
            local, 
            visitante, 
            lugar, 
            fecha, 
            hora
        );
    }
}
