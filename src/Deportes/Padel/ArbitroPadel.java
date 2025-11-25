package Deportes.Padel;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroPadel extends Arbitro {
    public ArbitroPadel(String nombre, String ap1, String ap2, Integer edad, List<Categoria> categorias, TipoCompeticion competicion) {
        super(nombre, ap1, ap2, edad, TipoDeporte.PADEL, categorias, competicion);
    }
}
