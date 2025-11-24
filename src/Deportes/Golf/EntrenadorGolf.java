package Deportes.Golf;

import Abstractas.Entrenador;
import Enumeraciones.TipoDeporte;

public class EntrenadorGolf extends Entrenador {
    public EntrenadorGolf(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.GOLF);
    }
}
