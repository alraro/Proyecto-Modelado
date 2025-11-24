package Abstractas;

public abstract class Jugador extends Persona{

	private Equipo equipo;

	public Jugador(String nombre, String apellido1, String apellido2, Integer edad, Equipo equipo) {
		super(nombre, apellido1, apellido2, edad);
		this.equipo = equipo;
	}
}
