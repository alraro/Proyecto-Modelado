package Deportes.Volleyball;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoVolleyball extends Torneo {
    public TorneoVolleyball(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion) {
        
        super(
            nombre,
            paisSede,
            temporada,
            maxIntegrantesEquipo,
            TipoDeporte.VOLLEYBALL,
            categoria,
            competicion
        );
    }
}
