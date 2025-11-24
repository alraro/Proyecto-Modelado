import Enums.Categorias;
import Enums.Deportes;
import Enums.TipoJugador;

public abstract class Jugador extends Persona{

	private Equipo equipo;

	public Jugador(String nombre, String apellido1, String apellido2, Integer edad) {
		super(nombre, apellido1, apellido2, edad);
	}
}
