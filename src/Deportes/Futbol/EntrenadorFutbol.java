package Deportes.Futbol;

import Abstractas.Entrenador;
import Enumerados.TipoDeporte;

public class EntrenadorFutbol extends Entrenador {
    public EntrenadorFutbol(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, dni, edad, TipoDeporte.FUTBOL);
    }
}
