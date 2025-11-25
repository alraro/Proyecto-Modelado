package Deportes.Golf;

import Abstractas.Entrenador;
import Enumerados.TipoDeporte;

public class EntrenadorGolf extends Entrenador {
    public EntrenadorGolf(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, dni, edad, TipoDeporte.GOLF);
    }
}
