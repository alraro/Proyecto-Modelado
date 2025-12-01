package Deportes.Tenis;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoTenis extends Torneo {
    public TorneoTenis(String nombre, Pais paisSede, String provinciaSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos, int maxEquipos) {
        super(nombre, paisSede, provinciaSede, temporada, TipoDeporte.TENIS, categoria, competicion, duracionPartidos, maxEquipos);
        this.puntuacionStrategy = new PuntuacionTenis();
    }
}
