package Deportes.Padel;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoPadel extends Torneo {
    public TorneoPadel(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion) {
        
        super(
            nombre,
            paisSede,
            temporada,
            maxIntegrantesEquipo,
            TipoDeporte.PADEL,
            categoria,
            competicion
        );
    }
}
