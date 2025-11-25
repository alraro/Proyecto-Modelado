package Deportes.Rugby;

import Abstractas.Jugador;
import Enumerados.*;

public class JugadorRugby extends Jugador {
    public JugadorRugby(String nombre, String ap1, String ap2, Integer edad, Pais nacionalidad, Categoria categoria) {
        super(nombre, ap1, ap2, edad, TipoDeporte.RUGBY,nacionalidad, categoria);
    }
}
