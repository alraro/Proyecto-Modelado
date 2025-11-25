package Deportes.Volleyball;

import Abstractas.Narrador;
import Enumerados.TipoDeporte;

public class NarradorVolleyball extends Narrador {
    public NarradorVolleyball(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, edad, dni, TipoDeporte.VOLLEYBALL);
    }
}
