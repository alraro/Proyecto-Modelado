package Deportes.Futbol;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroFutbol extends Arbitro {
    public ArbitroFutbol(String nombre, String ap1, String ap2, Integer edad, String dni, List<Categoria> categorias, TipoCompeticion competicion) {
        super(nombre, ap1, ap2, edad, dni, TipoDeporte.FUTBOL, categorias, competicion);
    }
}