package Deportes.Rugby;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoRugby extends Equipo {
    public EquipoRugby(String nombre, Categoria categoria, TipoCompeticion competicion) {
        super(nombre, TipoDeporte.RUGBY, categoria, competicion);
    }
}
