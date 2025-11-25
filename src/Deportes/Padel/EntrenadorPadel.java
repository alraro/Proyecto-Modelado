package Deportes.Padel;

import Abstractas.Entrenador;
import Enumerados.TipoDeporte;

public class EntrenadorPadel extends Entrenador {
    public EntrenadorPadel(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, dni, edad, TipoDeporte.PADEL);
    }
}
