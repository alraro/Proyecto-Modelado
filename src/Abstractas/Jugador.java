package Abstractas;

import Enumerados.TipoDeporte;

public abstract class Jugador extends Persona{

	private Equipo equipo;
	private TipoDeporte tipoDeporte;

	public Jugador(String nombre, String apellido1, String apellido2, Integer edad, Equipo equipo) {
		super(nombre, apellido1, apellido2, edad);
		this.equipo = equipo;
	}




	public TipoDeporte getTipoDeporte() {		// Me daba toc que me saliese error sin este get
        return tipoDeporte;
    }
}
