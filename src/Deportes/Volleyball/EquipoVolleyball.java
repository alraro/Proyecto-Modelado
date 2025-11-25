package Deportes.Volleyball;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoVolleyball extends Equipo {
    public EquipoVolleyball(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais) {
        super(nombre, TipoDeporte.VOLLEYBALL, categoria, competicion, pais);
    }
}
