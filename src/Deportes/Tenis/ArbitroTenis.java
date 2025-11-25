package Deportes.Tenis;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroTenis extends Arbitro {
    public ArbitroTenis(String nombre, String ap1, String ap2, Integer edad, List<Categoria> categorias, TipoCompeticion ambito) {
        super(nombre, ap1, ap2, edad, TipoDeporte.TENIS, categorias, ambito);
    }
}
