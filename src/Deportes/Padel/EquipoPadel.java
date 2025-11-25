package Deportes.Padel;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoPadel extends Equipo {
    // Límites reglamentarios máximos del pádel
    private static final int MAX_TITULARES = 2;
    private static final int MAX_SUPLENTES = 2;

    public EquipoPadel(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int titulares, int suplentes) {
        super(nombre, TipoDeporte.PADEL, categoria, competicion, pais, titulares, suplentes);

        // Validaciones específicas del pádel - los valores no deben superar los límites
        assert titulares <= MAX_TITULARES : "Un equipo de pádel no puede tener más de " + MAX_TITULARES + " jugadores titulares";
        assert suplentes <= MAX_SUPLENTES : "Un equipo de pádel no puede tener más de " + MAX_SUPLENTES + " suplentes";
        assert titulares > 0 : "Un equipo de pádel debe tener al menos 1 jugador titular";
        assert suplentes >= 0 : "El número de suplentes no puede ser negativo";
    }
}
