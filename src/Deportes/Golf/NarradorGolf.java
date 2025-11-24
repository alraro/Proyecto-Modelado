package Deportes.Golf;

import Abstractas.Narrador;
import Enumeraciones.TipoDeporte;

public class NarradorGolf extends Narrador {
    public NarradorGolf(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.GOLF);
    }
}
