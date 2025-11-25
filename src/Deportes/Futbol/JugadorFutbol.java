package Deportes.Futbol;

import Abstractas.Jugador;
import Enumerados.*;

public class JugadorFutbol extends Jugador {
    public JugadorFutbol(String nombre, String ap1, String ap2, Integer edad, Pais nacionalidad, Categoria categoria) {
        super(nombre, ap1, ap2, edad, TipoDeporte.FUTBOL,nacionalidad, categoria);
    }
}