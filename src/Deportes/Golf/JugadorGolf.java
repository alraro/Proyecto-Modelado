package Deportes.Golf;

import Abstractas.Jugador;
import Enumerados.*;

public class JugadorGolf extends Jugador {
    public JugadorGolf(String nombre, String ap1, String ap2, Integer edad, Pais nacionalidad, Categoria categoria) {
        super(nombre, ap1, ap2, edad, TipoDeporte.GOLF,nacionalidad, categoria);
    }
}
