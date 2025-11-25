package Deportes.Baloncesto;

import Abstractas.Entrenador;
import Enumerados.TipoDeporte;

public class EntrenadorBaloncesto extends Entrenador {
    public EntrenadorBaloncesto(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.BALONCESTO);
    }
}