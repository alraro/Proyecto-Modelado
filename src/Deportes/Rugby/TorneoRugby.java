package Deportes.Rugby;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoRugby extends Torneo {
    public TorneoRugby(String nombre, Pais paisSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {
        super(nombre, paisSede, temporada, TipoDeporte.RUGBY, categoria, competicion, duracionPartidos);
    }
}
