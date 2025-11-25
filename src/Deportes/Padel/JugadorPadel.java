package Deportes.Padel;

import Abstractas.Jugador;
import Enumerados.*;

public class JugadorPadel extends Jugador {
    public JugadorPadel(String nombre, String ap1, String ap2, Integer edad, Pais nacionalidad, Categoria categoria) {
        super(nombre, ap1, ap2, edad, TipoDeporte.PADEL,nacionalidad, categoria);
    }
}
