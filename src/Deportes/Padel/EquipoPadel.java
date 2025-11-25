package Deportes.Padel;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoPadel extends Equipo {
    // Límites reglamentarios máximos del pádel
    private static final int MAX_TITULARES = 2;
    private static final int MAX_SUPLENTES = 2;

    public EquipoPadel(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int maxTitulares, int suplentes) {
        super(nombre, TipoDeporte.PADEL, categoria, competicion, pais, MAX_TITULARES, MAX_SUPLENTES);
    }
}
