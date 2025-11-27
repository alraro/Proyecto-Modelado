package Deportes.Baloncesto;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoBaloncesto extends Torneo {
    public TorneoBaloncesto(String nombre, Pais paisSede, String provinciaSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {
        super(nombre, paisSede, provinciaSede, temporada, TipoDeporte.BALONCESTO, categoria, competicion, duracionPartidos);
    }
}
