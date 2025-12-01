package Deportes.Padel;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoPadel extends Torneo {
    public TorneoPadel(String nombre, Pais paisSede, String provinciaSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos, int maxEquipos) {
        super(nombre, paisSede, provinciaSede, temporada, TipoDeporte.PADEL, categoria, competicion, duracionPartidos, maxEquipos);
        this.puntuacionStrategy = new PuntuacionPadel();
    }
}
