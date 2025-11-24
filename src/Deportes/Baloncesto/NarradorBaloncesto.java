package Deportes.Baloncesto;

import Abstractas.Narrador;
import Enumeraciones.TipoDeporte;

public class NarradorBaloncesto extends Narrador {
    public NarradorBaloncesto(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.BALONCESTO);
    }
}
