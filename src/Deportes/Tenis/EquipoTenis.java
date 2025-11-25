package Deportes.Tenis;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoTenis extends Equipo {
    // Límites reglamentarios máximos del tenis (Copa Davis/Fed Cup)
    private static final int MAX_TITULARES = 2;
    private static final int MAX_SUPLENTES = 3;

    public EquipoTenis(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int titulares, int suplentes) {
        super(nombre, TipoDeporte.TENIS, categoria, competicion, pais, titulares, suplentes);

        // Validaciones específicas del tenis - los valores no deben superar los límites
        assert titulares <= MAX_TITULARES : "Un equipo de tenis no puede tener más de " + MAX_TITULARES + " jugadores titulares";
        assert suplentes <= MAX_SUPLENTES : "Un equipo de tenis no puede tener más de " + MAX_SUPLENTES + " suplentes";
        assert titulares > 0 : "Un equipo de tenis debe tener al menos 1 jugador titular";
        assert suplentes >= 0 : "El número de suplentes no puede ser negativo";
    }
}
