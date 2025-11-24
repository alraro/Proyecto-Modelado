package Deportes.Tenis;

import Abstractas.Narrador;
import Enumeraciones.TipoDeporte;

public class NarradorTenis extends Narrador {
    public NarradorTenis(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.TENIS);
    }
}
