package Deportes.Golf;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoGolf extends Equipo {
    public EquipoGolf(String nombre, Categoria categoria, TipoCompeticion competicion) {
        super(nombre, TipoDeporte.GOLF, categoria, competicion);
    }
}
