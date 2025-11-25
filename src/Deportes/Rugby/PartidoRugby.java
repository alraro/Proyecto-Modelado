package Deportes.Rugby;

import Abstractas.Partido;
import Abstractas.Torneo;
import Abstractas.Equipo;
import java.time.LocalDate;
import java.time.LocalTime;

public class PartidoRugby extends Partido {
    public PartidoRugby(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora) {
        
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
