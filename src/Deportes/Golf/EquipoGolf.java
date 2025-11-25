package Deportes.Golf;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoGolf extends Equipo {
    // Límites reglamentarios máximos del golf (Ryder Cup/competiciones por equipos)
    private static final int MAX_TITULARES = 4;
    private static final int MAX_SUPLENTES = 8;

    public EquipoGolf(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int maxTitulares, int suplentes) {
        super(nombre, TipoDeporte.GOLF, categoria, competicion, pais, MAX_TITULARES, MAX_SUPLENTES);
    }
}
