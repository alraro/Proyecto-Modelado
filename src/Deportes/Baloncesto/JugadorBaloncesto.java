package Deportes.Baloncesto;

import Abstractas.Jugador;
import Enumerados.*;

public class JugadorBaloncesto extends Jugador {
    public JugadorBaloncesto(String nombre, String ap1, String ap2, Integer edad, Pais nacionalidad, Categoria categoria) {
        super(nombre, ap1, ap2, edad, TipoDeporte.BALONCESTO,nacionalidad, categoria);
    }
}
