package Deportes.Golf;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroGolf extends Arbitro {
    public ArbitroGolf(String nombre, String ap1, String ap2, Integer edad, List<Categoria> categorias, TipoCompeticion ambito) {
        super(nombre, ap1, ap2, edad, TipoDeporte.GOLF, categorias, ambito);
    }
}
