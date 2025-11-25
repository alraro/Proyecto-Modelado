package Deportes.Volleyball;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoVolleyball extends Equipo {
    // Límites reglamentarios máximos del volleyball
    private static final int MAX_TITULARES = 6;
    private static final int MAX_SUPLENTES = 6;

    public EquipoVolleyball(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int titulares, int suplentes) {
        super(nombre, TipoDeporte.VOLLEYBALL, categoria, competicion, pais, titulares, suplentes);

        // Validaciones específicas del volleyball - los valores no deben superar los límites
        assert titulares <= MAX_TITULARES : "Un equipo de volleyball no puede tener más de " + MAX_TITULARES + " jugadores titulares";
        assert suplentes <= MAX_SUPLENTES : "Un equipo de volleyball no puede tener más de " + MAX_SUPLENTES + " suplentes";
        assert titulares > 0 : "Un equipo de volleyball debe tener al menos 1 jugador titular";
        assert suplentes >= 0 : "El número de suplentes no puede ser negativo";
    }
}
