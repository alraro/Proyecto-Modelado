package Deportes.Padel;

import Abstractas.Narrador;
import Enumerados.TipoDeporte;

public class NarradorPadel extends Narrador {
    public NarradorPadel(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.PADEL);
    }
}
