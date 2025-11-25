package Deportes.Futbol;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoFutbol extends Equipo {
    // Límites reglamentarios máximos del fútbol
    private static final int MAX_TITULARES = 11;
    private static final int MAX_SUPLENTES = 12;

    public EquipoFutbol(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int maxTitulares, int suplentes) {
        super(nombre, TipoDeporte.FUTBOL, categoria, competicion, pais, MAX_TITULARES, MAX_SUPLENTES);
    }
}