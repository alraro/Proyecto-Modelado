package Deportes.Volleyball;

import Abstractas.Entrenador;
import Enumeraciones.TipoDeporte;

public class EntrenadorVolleyball extends Entrenador {
    public EntrenadorVolleyball(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.VOLLEYBALL);
    }
}
