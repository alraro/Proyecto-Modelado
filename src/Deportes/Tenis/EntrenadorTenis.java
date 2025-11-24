package Deportes.Tenis;

import Abstractas.Entrenador;
import Enumeraciones.TipoDeporte;

public class EntrenadorTenis extends Entrenador {
    public EntrenadorTenis(String nombre, String apellido1, String apellido2, Integer edad) {
        super(nombre, apellido1, apellido2, edad, TipoDeporte.TENIS);
    }
}
