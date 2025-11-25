package Deportes.Baloncesto;

import Abstractas.Torneo;
import Enumerados.*;

public class TorneoBaloncesto extends Torneo {
    public TorneoBaloncesto(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {
        super(nombre, paisSede, temporada, maxIntegrantesEquipo, TipoDeporte.BALONCESTO, categoria, competicion, duracionPartidos);
    }
}
