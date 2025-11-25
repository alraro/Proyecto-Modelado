package Deportes.Baloncesto;

import Abstractas.Entrenador;
import Enumerados.TipoDeporte;

public class EntrenadorBaloncesto extends Entrenador {
    public EntrenadorBaloncesto(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, dni, edad, TipoDeporte.BALONCESTO);
    }
}