package Deportes.Tenis;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoTenis extends Equipo {
    public EquipoTenis(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais) {
        super(nombre, TipoDeporte.TENIS, categoria, competicion, pais);
    }
}
