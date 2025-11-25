package Deportes.Golf;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoGolf extends Equipo {
    // Límites reglamentarios máximos del golf (Ryder Cup/competiciones por equipos)
    private static final int MAX_TITULARES = 4;
    private static final int MAX_SUPLENTES = 8;

    public EquipoGolf(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int titulares, int suplentes) {
        super(nombre, TipoDeporte.GOLF, categoria, competicion, pais, titulares, suplentes);

        // Validaciones específicas del golf - los valores no deben superar los límites
        assert titulares <= MAX_TITULARES : "Un equipo de golf no puede tener más de " + MAX_TITULARES + " jugadores titulares";
        assert suplentes <= MAX_SUPLENTES : "Un equipo de golf no puede tener más de " + MAX_SUPLENTES + " suplentes";
        assert titulares > 0 : "Un equipo de golf debe tener al menos 1 jugador titular";
        assert suplentes >= 0 : "El número de suplentes no puede ser negativo";
    }
}
