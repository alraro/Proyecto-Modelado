package Deportes.Futbol;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoFutbol extends Equipo {
    // Límites reglamentarios máximos del fútbol
    private static final int MAX_TITULARES = 11;
    private static final int MAX_SUPLENTES = 12;

    public EquipoFutbol(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int titulares, int suplentes) {
        super(nombre, TipoDeporte.FUTBOL, categoria, competicion, pais, titulares, suplentes);

        // Validaciones específicas del fútbol - los valores no deben superar los límites
        assert titulares <= MAX_TITULARES : "Un equipo de fútbol no puede tener más de " + MAX_TITULARES + " jugadores titulares";
        assert suplentes <= MAX_SUPLENTES : "Un equipo de fútbol no puede tener más de " + MAX_SUPLENTES + " suplentes";
        assert titulares > 0 : "Un equipo de fútbol debe tener al menos 1 jugador titular";
        assert suplentes >= 0 : "El número de suplentes no puede ser negativo";
    }
}