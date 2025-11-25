package Deportes.Volleyball;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoVolleyball extends Torneo {
    public TorneoVolleyball(String nombre, Pais paisSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {
        super(nombre, paisSede, temporada, TipoDeporte.VOLLEYBALL, categoria, competicion, duracionPartidos);
    }
}
