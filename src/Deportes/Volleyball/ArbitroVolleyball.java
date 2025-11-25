package Deportes.Volleyball;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroVolleyball extends Arbitro {
    public ArbitroVolleyball(String nombre, String ap1, String ap2, Integer edad, String dni, List<Categoria> categorias, TipoCompeticion competicion) {
        super(nombre, ap1, ap2, edad, dni, TipoDeporte.VOLLEYBALL, categorias, competicion);
    }
}
