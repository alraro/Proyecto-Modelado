package Deportes.Volleyball;

import Abstractas.Entrenador;
import Enumerados.TipoDeporte;

public class EntrenadorVolleyball extends Entrenador {
    public EntrenadorVolleyball(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, dni, edad, TipoDeporte.VOLLEYBALL);
    }
}
