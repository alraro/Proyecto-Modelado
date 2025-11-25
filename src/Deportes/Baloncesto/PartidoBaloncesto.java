package Deportes.Baloncesto;

import Abstractas.Partido;
import Abstractas.Torneo;
import Abstractas.Equipo;
import java.time.LocalDate;
import java.time.LocalTime;

public class PartidoBaloncesto extends Partido {
    public PartidoBaloncesto(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora) {
        
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
