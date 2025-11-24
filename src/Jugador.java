import Enums.Categorias;
import Enums.Deportes;
import Enums.TipoJugador;

public class Jugador extends Persona{

	private Deportes deporte;
	private Equipo equipo;
	private TipoJugador tipoJugador;
	private Categorias categoria;


	public Jugador(String nombre, String apellido1, String apellido2, Integer edad) {
		super(nombre, apellido1, apellido2, edad);
	}
}
