package Deportes.Tenis;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroTenis extends Arbitro {
    public ArbitroTenis(String nombre, String ap1, String ap2, Integer edad, String dni, List<Categoria> categorias, TipoCompeticion competicion) {
        super(nombre, ap1, ap2, edad, dni, TipoDeporte.TENIS, categorias, competicion);
    }
}
