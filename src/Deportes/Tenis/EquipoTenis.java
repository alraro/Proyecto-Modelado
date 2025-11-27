package Deportes.Tenis;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoTenis extends Equipo {
    // Límites reglamentarios máximos del tenis (Copa Davis/Fed Cup)
    private static final int MAX_TITULARES = 2;
    private static final int MAX_SUPLENTES = 3;

    public EquipoTenis(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, String provincia) {
        super(nombre, TipoDeporte.TENIS, categoria, competicion, pais, provincia, MAX_TITULARES, MAX_SUPLENTES);
    }
}
