package Deportes.Tenis;

import Abstractas.Jugador;
import Enumerados.*;

public class JugadorTenis extends Jugador {
    public JugadorTenis(String nombre, String ap1, String ap2, Integer edad, Pais nacionalidad, Categoria categoria, String dni) {
        super(nombre, ap1, ap2, edad, TipoDeporte.TENIS, nacionalidad, categoria, dni);
    }
}
