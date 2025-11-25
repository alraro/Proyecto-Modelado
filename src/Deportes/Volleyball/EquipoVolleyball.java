package Deportes.Volleyball;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoVolleyball extends Equipo {
    // Límites reglamentarios máximos del volleyball
    private static final int MAX_TITULARES = 6;
    private static final int MAX_SUPLENTES = 6;

    public EquipoVolleyball(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int maxTitulares, int suplentes) {
        super(nombre, TipoDeporte.VOLLEYBALL, categoria, competicion, pais, MAX_TITULARES, MAX_SUPLENTES);
    }
}
