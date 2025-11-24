package Deportes.Futbol;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoFutbol extends Equipo {
    public EquipoFutbol(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais) {
        super(nombre, TipoDeporte.FUTBOL, categoria, competicion, pais);
    }
}