package Deportes.Volleyball;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroVolleyball extends Arbitro {
    public ArbitroVolleyball(String nombre, String ap1, String ap2, Integer edad, List<Categoria> categorias, TipoCompeticion ambito) {
        super(nombre, ap1, ap2, edad, TipoDeporte.VOLLEYBALL, categorias, ambito);
    }
}
