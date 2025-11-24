package Deportes.Tenis;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoTenis extends Equipo {
    public EquipoTenis(String nombre, Categoria categoria, TipoCompeticion competicion) {
        super(nombre, TipoDeporte.TENIS, categoria, competicion);
    }
}
