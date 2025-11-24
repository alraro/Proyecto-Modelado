package Deportes.Padel;

import Abstractas.Equipo;
import Enumerados.*;

public class EquipoPadel extends Equipo {
    public EquipoPadel(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais) {
        super(nombre, TipoDeporte.PADEL, categoria, competicion, pais);
    }
}
