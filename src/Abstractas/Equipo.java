package Abstractas;

import Enumerados.*;
import java.util.ArrayList;
import java.util.List;

public abstract class Equipo {
    // Atributos de estado
    private String nombre;
    private TipoDeporte tipoDeporte;
    private Categoria categoria;
    private TipoCompeticion tipoCompeticion;
    private Pais pais;
    private int maxTitulares; // REQUISITO: Límite de integrantes
    private int maxSuplentes;  // REQUISITO: Límite de integrantes

    // Relaciones
    private Entrenador entrenador;
    private List<Jugador> jugadores;
    private List<Torneo> torneosParticipados;

    // Constructor
    public Equipo(String nombre, TipoDeporte tipoDeporte, Categoria categoria, TipoCompeticion competicion, Pais pais, int maxTtitulares, int maxSuplentes) {
        // Validaciones básicas de integridad
        assert nombre != null && !nombre.isBlank() : "El nombre es obligatorio";
        assert tipoDeporte != null : "El deporte es obligatorio";
        assert categoria != null : "La categoría es obligatoria";
        assert competicion != null : "El tipo de competición es obligatorio";
        assert pais != null : "El país es obligatorio";
        assert maxTtitulares > 0 : "El máximo de jugadores debe ser positivo";
        assert maxSuplentes >= 0 : "El máximo de suplentes no puede ser negativo";

        this.nombre = nombre;
        this.tipoDeporte = tipoDeporte;
        this.categoria = categoria;
        this.tipoCompeticion = competicion;
        this.pais = pais;
        this.maxTitulares = maxTtitulares;
        this.maxSuplentes = maxSuplentes;

        // Inicialización de listas vacías para evitar NullPointerException
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

        // RESTRICCIÓN: Límite de plantilla (Requisito del proyecto)
        assert jugadores.size() < (maxSuplentes + maxTitulares)
        : "El equipo ha alcanzado el máximo de " + (maxSuplentes + maxTitulares) + " jugadores. No caben más.";

        // Intentamos fichar al jugador
        nuevoJugador.registrarEquipo(this);

        // Si el jugador nos acepta, lo añadimos a la lista
        this.jugadores.add(nuevoJugador);
    }

    public void despedirJugador(Jugador jugador) {
        assert jugador != null : "No se puede despedir a un null";
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

        // IMPORTANTE: Llamamos al método del Entrenador.
        // Allí es donde él verificará si ya entrena a otro equipo en nuestros torneos actuales.
        // Si hay conflicto, saltará su assert y esta operación se cancelará.
        nuevoEntrenador.asignarEquipo(this);

        // Gestión del cambio: Si ya teníamos uno, lo liberamos
        if (this.entrenador != null) {
            this.entrenador.liberarEquipo(this);
        }

        // Asignamos el nuevo
        this.entrenador = nuevoEntrenador;
    }

    // ---------------------------------------------------------
    // GESTIÓN DE TORNEOS (Protected -> Solo llamado por clase Torneo)
    // ---------------------------------------------------------
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

    // ---------------------------------------------------------
    // GETTERS
    // ---------------------------------------------------------
    public String getNombre() { return nombre; }
    public TipoDeporte getTipoDeporte() { return tipoDeporte; }
    public Categoria getCategoria() { return categoria; }
    public TipoCompeticion getTipoCompeticion() { return tipoCompeticion; }
    public Pais getPais() { return pais; }
    public int getMaxJugadores() { return ((maxSuplentes + maxTitulares)); }
    public Entrenador getEntrenador() { return entrenador; }
    public int getMaxTitulares() {return maxTitulares;}
    public int getMaxSuplentes() {return maxSuplentes;}

    // Devolvemos copias defensivas o listas no modificables si queremos proteger la encapsulación,
    // pero para este nivel académico devolver la lista suele ser aceptable.
    public List<Jugador> getJugadores() { return jugadores; }
    public List<Torneo> getTorneos() { return torneosParticipados; }

    // Método para comparar dos equipos por su nombre, tipoeDeporte, Categoria y TipoCompeticion
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
}