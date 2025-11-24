package Deportes.Rugby;

import Abstractas.Entrenador;
import Enumeraciones.TipoDeporte;

public class EntrenadorRugby extends Entrenador {
    public EntrenadorRugby(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.RUGBY);
    }
}
