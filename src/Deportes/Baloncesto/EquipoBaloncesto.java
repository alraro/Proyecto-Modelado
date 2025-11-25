package Deportes.Baloncesto;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoBaloncesto extends Equipo {
    // Límites reglamentarios máximos del baloncesto
    private static final int MAX_TITULARES = 5;
    private static final int MAX_SUPLENTES = 7;

    public EquipoBaloncesto(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais) {
        super(nombre, TipoDeporte.BALONCESTO, categoria, competicion, pais, MAX_TITULARES, MAX_SUPLENTES);
    }
}
