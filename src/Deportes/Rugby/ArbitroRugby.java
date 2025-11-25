package Deportes.Rugby;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroRugby extends Arbitro {
    public ArbitroRugby(String nombre, String ap1, String ap2, Integer edad, String dni, List<Categoria> categorias, TipoCompeticion competicion) {
        super(nombre, ap1, ap2, edad, dni, TipoDeporte.RUGBY, categorias, competicion);
    }
}
