package Deportes.Futbol;

import Abstractas.Narrador;
import Enumerados.TipoDeporte;

public class NarradorFutbol extends Narrador {
    public NarradorFutbol(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.FUTBOL);
    }
}
