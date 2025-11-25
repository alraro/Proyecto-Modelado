package Deportes.Golf;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoGolf extends Torneo {
    public TorneoGolf(String nombre, Pais paisSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {
        super(nombre, paisSede, temporada, TipoDeporte.GOLF, categoria, competicion, duracionPartidos);
    }
}
