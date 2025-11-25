package Deportes.Padel;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoPadel extends Torneo {
    public TorneoPadel(String nombre, Pais paisSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {
        super(nombre, paisSede, temporada, TipoDeporte.PADEL, categoria, competicion, duracionPartidos);
    }
}
