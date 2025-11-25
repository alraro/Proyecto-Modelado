package Deportes.Futbol;

import Abstractas.Arbitro;
import Enumerados.*;
import java.util.List;

public class ArbitroFutbol extends Arbitro {
    public ArbitroFutbol(String nombre, String ap1, String ap2, Integer edad, List<Categoria> categorias, TipoCompeticion ambito) {
        super(nombre, ap1, ap2, edad, TipoDeporte.FUTBOL, categorias, ambito);
    }
}