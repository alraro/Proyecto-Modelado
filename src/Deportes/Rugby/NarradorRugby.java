package Deportes.Rugby;

import Abstractas.Narrador;
import Enumeraciones.TipoDeporte;

public class NarradorRugby extends Narrador {
    public NarradorRugby(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.RUGBY);
    }
}
