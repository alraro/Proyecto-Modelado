package Deportes.Baloncesto;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroBaloncesto extends Arbitro {
    public ArbitroBaloncesto(String nombre, String ap1, String ap2, Integer edad, List<Categoria> categorias, TipoCompeticion ambito) {
        super(nombre, ap1, ap2, edad, TipoDeporte.BALONCESTO, categorias, ambito);
    }
}
