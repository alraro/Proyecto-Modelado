package Deportes.Padel;

import Abstractas.Entrenador;
import Enumeraciones.TipoDeporte;

public class EntrenadorPadel extends Entrenador {
    public EntrenadorPadel(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.PADEL);
    }
}
