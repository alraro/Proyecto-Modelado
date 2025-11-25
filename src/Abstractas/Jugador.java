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

        // RESTRICCIÓN: Solo puede jugar en la Selección (equipo internacional) de su país
        if (nuevoEquipo.getTipoCompeticion() == TipoCompeticion.INTERNACIONAL) {
            assert nuevoEquipo.getPais() == this.nacionalidad
            : "Un jugador de " + this.nacionalidad + " no puede jugar en la Selección de " + nuevoEquipo.getPais();
        }

        // RESTRICCIÓN: Puede estar en dos equipos si es nacional/local e internacional
        for (Equipo e : equiposActuales) {
            if (e.getTipoCompeticion() == TipoCompeticion.INTERNACIONAL) {
                assert nuevoEquipo.getTipoCompeticion() != TipoCompeticion.INTERNACIONAL
                : "El jugador ya juega en una Selección Nacional";
            }
            
            else {
                assert nuevoEquipo.getTipoCompeticion() == TipoCompeticion.INTERNACIONAL
                : "El jugador ya tiene un club, debe abandonar el actual antes de fichar por otro";
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