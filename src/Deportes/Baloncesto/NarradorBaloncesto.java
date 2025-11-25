package Deportes.Baloncesto;

import Abstractas.Narrador;
import Enumerados.TipoDeporte;

public class NarradorBaloncesto extends Narrador {
    public NarradorBaloncesto(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, edad, dni, TipoDeporte.BALONCESTO);
    }
}
