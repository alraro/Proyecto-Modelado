package Deportes.Baloncesto;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoBaloncesto extends Equipo {
    // Límites reglamentarios máximos del baloncesto
    private static final int MAX_TITULARES = 5;
    private static final int MAX_SUPLENTES = 7;

    public EquipoBaloncesto(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int titulares, int suplentes) {
        super(nombre, TipoDeporte.BALONCESTO, categoria, competicion, pais, titulares, suplentes);

        // Validaciones específicas del baloncesto - los valores no deben superar los límites
        assert titulares <= MAX_TITULARES : "Un equipo de baloncesto no puede tener más de " + MAX_TITULARES + " jugadores titulares";
        assert suplentes <= MAX_SUPLENTES : "Un equipo de baloncesto no puede tener más de " + MAX_SUPLENTES + " suplentes";
        assert titulares > 0 : "Un equipo de baloncesto debe tener al menos 1 jugador titular";
        assert suplentes >= 0 : "El número de suplentes no puede ser negativo";
    }
}
