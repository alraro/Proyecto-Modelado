package Deportes.Volleyball;

import Abstractas.Jugador;
import Enumerados.*;

public class JugadorVolleyball extends Jugador {
    public JugadorVolleyball(String nombre, String ap1, String ap2, Integer edad, Pais nacionalidad, Categoria categoria) {
        super(nombre, ap1, ap2, edad, TipoDeporte.VOLLEYBALL,nacionalidad, categoria);
    }
}
