package Deportes.Rugby;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoRugby extends Torneo {
    public TorneoRugby(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {

        super(
            nombre,
            paisSede,
            temporada,
            maxIntegrantesEquipo,
            TipoDeporte.RUGBY,
            categoria,
            competicion,
            duracionPartidos
        );
    }
}
