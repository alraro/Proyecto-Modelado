package Deportes.Futbol;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoFutbol extends Torneo {
    public TorneoFutbol(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion) {
        
        super(
            nombre,
            paisSede,
            temporada,
            maxIntegrantesEquipo,
            TipoDeporte.FUTBOL,
            categoria,
            competicion
        );
    }
}