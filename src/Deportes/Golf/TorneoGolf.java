package Deportes.Golf;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoGolf extends Torneo {
    public TorneoGolf(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion) {
        
        super(
            nombre,
            paisSede,
            temporada,
            maxIntegrantesEquipo,
            TipoDeporte.GOLF,
            categoria,
            competicion
        );
    }
}
