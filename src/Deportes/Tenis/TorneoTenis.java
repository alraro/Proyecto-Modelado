package Deportes.Tenis;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoTenis extends Torneo {
    public TorneoTenis(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion) {
        
        super(
            nombre,
            paisSede,
            temporada,
            maxIntegrantesEquipo,
            TipoDeporte.TENIS,
            categoria,
            competicion
        );
    }
}
