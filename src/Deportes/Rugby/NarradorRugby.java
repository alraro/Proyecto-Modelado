package Deportes.Rugby;

import Abstractas.Narrador;
import Enumerados.TipoDeporte;

public class NarradorRugby extends Narrador {
    public NarradorRugby(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, edad, dni, TipoDeporte.RUGBY);
    }
}
