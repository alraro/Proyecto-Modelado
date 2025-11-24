package Deportes.Futbol;

import Abstractas.Entrenador;
import Enumerados.TipoDeporte;

public class EntrenadorFutbol extends Entrenador {
    public EntrenadorFutbol(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.FUTBOL);
    }
}
