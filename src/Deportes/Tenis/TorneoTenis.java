package Deportes.Tenis;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoTenis extends Torneo {
    public TorneoTenis(String nombre, Pais paisSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {
        super(nombre, paisSede, temporada, TipoDeporte.TENIS, categoria, competicion, duracionPartidos);
    }
}
