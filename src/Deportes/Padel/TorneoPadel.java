package Deportes.Padel;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoPadel extends Torneo {
    public TorneoPadel(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {

        super(
            nombre,
            paisSede,
            temporada,
            maxIntegrantesEquipo,
            TipoDeporte.PADEL,
            categoria,
            competicion,
            duracionPartidos
        );
    }
}
