package Deportes.Baloncesto;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoBaloncesto extends Equipo {
    public EquipoBaloncesto(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais) {
        super(nombre, TipoDeporte.BALONCESTO, categoria, competicion, pais);
    }
}
