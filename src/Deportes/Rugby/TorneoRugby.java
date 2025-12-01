package Deportes.Rugby;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoRugby extends Torneo {
    public TorneoRugby(String nombre, Pais paisSede, String provinciaSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos, int maxEquipos) {
        super(nombre, paisSede, provinciaSede, temporada, TipoDeporte.RUGBY, categoria, competicion, duracionPartidos, maxEquipos);
        this.puntuacionStrategy = new PuntuacionRugby();
    }
}
