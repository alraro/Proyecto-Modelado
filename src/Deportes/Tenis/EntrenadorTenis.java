package Deportes.Tenis;

import Abstractas.Entrenador;
import Enumerados.TipoDeporte;

public class EntrenadorTenis extends Entrenador {
    public EntrenadorTenis(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        super(nombre, apellido1, apellido2, dni, edad, TipoDeporte.TENIS);
    }
}
