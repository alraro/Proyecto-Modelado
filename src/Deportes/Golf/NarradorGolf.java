package Deportes.Golf;

import Abstractas.Narrador;
import Enumerados.TipoDeporte;

public class NarradorGolf extends Narrador {
    public NarradorGolf(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, edad, dni, TipoDeporte.GOLF);
    }
}
