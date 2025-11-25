package Deportes.Rugby;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoRugby extends Equipo {
    // Límites reglamentarios máximos del rugby
    private static final int MAX_TITULARES = 15;
    private static final int MAX_SUPLENTES = 8;

    public EquipoRugby(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int maxTitulares, int suplentes) {
        super(nombre, TipoDeporte.RUGBY, categoria, competicion, pais, MAX_TITULARES, MAX_SUPLENTES);
    }
}
