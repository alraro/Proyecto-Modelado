package Deportes.Rugby;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoRugby extends Equipo {
    // Límites reglamentarios máximos del rugby
    private static final int MAX_TITULARES = 15;
    private static final int MAX_SUPLENTES = 8;

    public EquipoRugby(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int titulares, int suplentes) {
        super(nombre, TipoDeporte.RUGBY, categoria, competicion, pais, titulares, suplentes);

        // Validaciones específicas del rugby - los valores no deben superar los límites
        assert titulares <= MAX_TITULARES : "Un equipo de rugby no puede tener más de " + MAX_TITULARES + " jugadores titulares";
        assert suplentes <= MAX_SUPLENTES : "Un equipo de rugby no puede tener más de " + MAX_SUPLENTES + " suplentes";
        assert titulares > 0 : "Un equipo de rugby debe tener al menos 1 jugador titular";
        assert suplentes >= 0 : "El número de suplentes no puede ser negativo";
    }
}
