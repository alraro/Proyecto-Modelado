package Deportes.Padel;

import Abstractas.Partido;
import Abstractas.Torneo;
import Abstractas.Equipo;
import java.time.LocalDate;
import java.time.LocalTime;

public class PartidoPadel extends Partido {
    public PartidoPadel(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora) {
        
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
