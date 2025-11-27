package Deportes.Futbol;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoFutbol extends Torneo {
    public TorneoFutbol(String nombre, Pais paisSede, String provinciaSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {
        super(nombre, paisSede, provinciaSede, temporada, TipoDeporte.FUTBOL, categoria, competicion, duracionPartidos);
    }
}