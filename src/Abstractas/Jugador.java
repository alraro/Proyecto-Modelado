package Abstractas;

import Enumerados.*;

import java.util.ArrayList;
import java.util.List;

public abstract class Jugador extends Persona {
    private TipoDeporte tipoDeporte;
    private Pais nacionalidad;
    private Categoria categoria;
    private List<Equipo> equiposActuales; // Lista de equipos (Máximo 2: Club + Selección)

    public Jugador(String nombre, String ap1, String ap2, Integer edad, TipoDeporte tipoDeporte, Pais nacionalidad, Categoria categoria,String dni) {
        super(nombre, ap1, ap2, edad,dni);
        
        assert tipoDeporte != null : "Deporte obligatorio";
        assert nacionalidad != null : "Nacionalidad obligatoria";
        assert categoria != null : "Categoría obligatoria";

        this.tipoDeporte = tipoDeporte;
        this.nacionalidad = nacionalidad;
        this.categoria = categoria;
        this.equiposActuales = new ArrayList<>();
    }
    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Equipo)
    protected void registrarEquipo(Equipo nuevoEquipo) {
		// RESTRICCIÓN: El equipo no puede ser nulo
        assert nuevoEquipo != null : "Equipo nulo";

        // RESTRICCIÓN: Máximo en 2 equipos
        assert this.equiposActuales.size() < 2
        : "El jugador ya está en el máximo de equipos permitidos (2)";

        boolean esNuevaSeleccion = nuevoEquipo.getTipoCompeticion() == TipoCompeticion.INTERNACIONAL;

        // RESTRICCIÓN: Si es selección, debe ser de su país
        if (esNuevaSeleccion) {
            assert nuevoEquipo.getPais() == this.nacionalidad
                    : "Un jugador de " + this.nacionalidad + " no puede jugar en la Selección de " + nuevoEquipo.getPais();
        }

        // RESTRICCIÓN: Compatibilidad de equipos (1 Club + 1 Selección)
        for (Equipo e : equiposActuales) {
            boolean esSeleccionActual = e.getTipoCompeticion() == TipoCompeticion.INTERNACIONAL;

            if (esNuevaSeleccion) {
                // Si intento entrar en una selección, no puedo tener otra selección ya
                assert !esSeleccionActual : "El jugador ya pertenece a una Selección Nacional";
            } else {
                // Si intento entrar en un club (Local/Nacional), no puedo tener otro club ya
                assert esSeleccionActual : "El jugador ya pertenece a un Club, debe abandonarlo antes de fichar por otro";
            }
        }

        // Si pasa las restricciones, lo añadimos
        this.equiposActuales.add(nuevoEquipo);
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Equipo)
    protected void abandonarEquipo(Equipo equipo) {
		// RESTRICCIÓN: El equipo no puede ser nulo
		assert equipo != null : "Equipo nulo";

        if (equiposActuales.contains(equipo)) {
            equiposActuales.remove(equipo);
        }
    }

    public void setCategoria(Categoria nuevaCategoria) {
		// RESTRICCIÓN: La categoría no puede ser nula
        assert nuevaCategoria != null : "Categoría nula";

		// RESTRICCIÓN: No puede cambiar de categoría si pertenece a algún equipo con otra categoría
		assert this.equiposActuales.isEmpty()
        : "No es posible cambiar de categoría mientras el jugador pertenezca a algún equipo";

        this.categoria = nuevaCategoria;
    }

    // Implementamos si el jugador quiere abandonar un equipo por su cuenta
    public void abandonarEquipoPorCuentaPropia(Equipo equipo) {
        // RESTRICCIÓN: El equipo no puede ser nulo
        assert equipo != null : "Equipo nulo";
        
        // RESTRICCIÓN: El jugador debe pertenecer al equipo
        assert this.equiposActuales.contains(equipo)
        : "El jugador no pertenece al equipo " + equipo.getNombre();

        // Delegamos al equipo la gestión del abandono.
        // El equipo llamará de vuelta a 'abandonarEquipo' (protected) para actualizar nuestra lista.
        equipo.despedirJugador(this);
    }

    public TipoDeporte getTipoDeporte() {
		return tipoDeporte;
	}

	public Pais getNacionalidad() {
		return nacionalidad;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public List<Equipo> getEquiposActuales() {
		return equiposActuales;
	}
}