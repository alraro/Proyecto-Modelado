package Abstractas;

import Enumerados.*;
import java.util.ArrayList;
import java.util.List;

public abstract class Equipo {
    private String nombre;
    private TipoDeporte tipoDeporte;
    private Categoria categoria;
    private TipoCompeticion tipoCompeticion;
    private Pais pais;
    private String provincia;
    private int maxTitulares; // REQUISITO: Límite de integrantes
    private int maxSuplentes;  // REQUISITO: Límite de integrantes

    private Entrenador entrenador;
    private List<Jugador> jugadores;
    private List<Torneo> torneosParticipados;

    public Equipo(String nombre, TipoDeporte tipoDeporte, Categoria categoria, TipoCompeticion competicion,
                    Pais pais, String provincia, int maxTtitulares, int maxSuplentes) {
        assert nombre != null && !nombre.isBlank() : "El nombre es obligatorio";
        assert tipoDeporte != null : "El deporte es obligatorio";
        assert categoria != null : "La categoría es obligatoria";
        assert competicion != null : "El tipo de competición es obligatorio";
        assert pais != null : "El país es obligatorio";
        assert provincia != null && !provincia.isBlank() : "La provincia es obligatoria";
        assert maxTtitulares > 0 : "El máximo de jugadores debe ser positivo";
        assert maxSuplentes >= 0 : "El máximo de suplentes no puede ser negativo";

        this.nombre = nombre;
        this.tipoDeporte = tipoDeporte;
        this.categoria = categoria;
        this.tipoCompeticion = competicion;
        this.pais = pais;
        this.provincia = provincia;
        this.maxTitulares = maxTtitulares;
        this.maxSuplentes = maxSuplentes;
        this.jugadores = new ArrayList<>();
        this.torneosParticipados = new ArrayList<>();
    }

    // Gestión de JUGADORES del equipo
    public void ficharJugador(Jugador nuevoJugador) {
        // RESTRICCIÓN: El jugador no puede ser nulo
        assert nuevoJugador != null : "No se puede fichar un jugador nulo";

        // RESTRICCIÓN: El jugador no puede estar ya en el equipo
        assert !jugadores.contains(nuevoJugador) : "El jugador ya está en el equipo";

        // RESTRICCIÓN: El deporte debe coincidir
        assert nuevoJugador.getTipoDeporte() == this.tipoDeporte
        : "Un jugador de " + nuevoJugador.getTipoDeporte() + " no puede jugar en un equipo de " + this.tipoDeporte;

        // RESTRICCIÓN: Límite de plantilla no superado
        assert jugadores.size() < (maxSuplentes + maxTitulares)
        : "El equipo ha alcanzado el máximo de " + (maxSuplentes + maxTitulares) + " jugadores. No caben más.";

        // Intentamos fichar al jugador
        nuevoJugador.registrarEquipo(this);

        // Si el jugador nos acepta, lo añadimos a la lista
        this.jugadores.add(nuevoJugador);
    }

    public void despedirJugador(Jugador jugador) {
        // RESTRICCIÓN: El jugador no puede ser nulo
        assert jugador != null : "No se puede despedir a un null";

        // RESTRICCIÓN: El jugador debe estar en el equipo
        assert this.jugadores.contains(jugador)
        : "El jugador " + jugador.getNombreCompleto() + " no pertenece al equipo " + this.nombre;

        // Informamos al jugador que abandona el equipo
        jugador.abandonarEquipo(this);

        // Borramos al jugador de la plantilla
        this.jugadores.remove(jugador);
    }

    // Gestión de ENTRENADOR del equipo
    public void asignarEntrenador(Entrenador nuevoEntrenador) {
        assert nuevoEntrenador != null : "El entrenador no puede ser nulo";

        // Si ya es nuestro entrenador, no hacemos nada
        if (this.entrenador == nuevoEntrenador) return;

        // Intentamos que el entrenador nos asigne
        nuevoEntrenador.asignarEquipo(this);

        // Gestión del cambio: Si ya teníamos uno, lo liberamos
        if (this.entrenador != null) {
            this.entrenador.liberarEquipo(this);
        }

        // Asignamos el nuevo
        this.entrenador = nuevoEntrenador;
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Torneo)
    protected void inscribirEnTorneo(Torneo nuevoTorneo) {
        // RESTRICCIÓN: El torneo no puede ser nulo
        assert nuevoTorneo != null : "No puedes inscribirte a un torneo nulo";

        // RESTRICCIÓN: Temporada (Un equipo no puede jugar dos torneos simultáneos en la misma temporada/fecha)
        for (Torneo t : torneosParticipados) {
            assert !t.getTemporada().equals(nuevoTorneo.getTemporada())
                    : "El equipo ya juega otro torneo en la temporada " + t.getTemporada();
        }

        // RESTRICCIÓN: Conflicto de Entrenador (Validación Inversa)
        // Si ya tenemos entrenador, debemos asegurar que él no está dirigiendo a OTRO equipo en ESTE nuevo torneo.
        if (this.entrenador != null) {
            for (Equipo otroEquipo : this.entrenador.getEquiposAsignados()) {
                if (otroEquipo == this) continue; // Saltamos la comprobación con nosotros mismos

                assert !otroEquipo.getTorneos().contains(nuevoTorneo)
                        : "Conflicto: Nuestro entrenador " + entrenador.getNombre() + " ya dirige al equipo " + otroEquipo.getNombre() + " en este torneo.";
            }
        }

        // Si pasa todas las validaciones, añadimos el torneo
        this.torneosParticipados.add(nuevoTorneo);
    }

    // Getters
    public String getNombre() {return nombre; }
    public TipoDeporte getTipoDeporte() { return tipoDeporte; }
    public Categoria getCategoria() { return categoria; }
    public TipoCompeticion getTipoCompeticion() { return tipoCompeticion; }
    public Pais getPais() { return pais; }
    public String getProvincia() { return provincia; }
    public int getMaxJugadores() { return ((maxSuplentes + maxTitulares)); }
    public Entrenador getEntrenador() { return entrenador; }
    public int getMaxTitulares() {return maxTitulares;}
    public int getMaxSuplentes() {return maxSuplentes;}
    public List<Jugador> getJugadores() { return jugadores; }
    public List<Torneo> getTorneos() { return torneosParticipados; }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Equipo otro = (Equipo) obj;
        return this.nombre.equals(otro.nombre) &&
                this.tipoDeporte == otro.tipoDeporte &&
                this.categoria == otro.categoria &&
                this.tipoCompeticion == otro.tipoCompeticion;
    }

    @Override
    public int hashCode() {
        int result = nombre.hashCode();
        result = 31 * result + tipoDeporte.hashCode();
        result = 31 * result + categoria.hashCode();
        result = 31 * result + tipoCompeticion.hashCode();
        return result;
    }
}