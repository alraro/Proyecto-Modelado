package Deportes.Rugby;

import Abstractas.Entrenador;
import Enumerados.TipoDeporte;

public class EntrenadorRugby extends Entrenador {
    public EntrenadorRugby(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, dni, edad, TipoDeporte.RUGBY);
    }
}
