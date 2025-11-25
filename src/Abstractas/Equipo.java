package Abstractas;

import Enumerados.*;
import java.util.ArrayList;
import java.util.List;

public abstract class Equipo {
    protected String nombre;
    protected TipoDeporte tipoDeporte;
    protected Categoria categoria;
    protected TipoCompeticion tipoCompeticion;
    protected Pais pais;
    
    // Relaciones
    protected Entrenador entrenador;
    protected List<Jugador> jugadores;
    protected List<Torneo> torneosParticipados; // Historial para controlar temporadas

    public Equipo(String nombre, TipoDeporte tipoDeporte, Categoria categoria, TipoCompeticion competicion, Pais pais) {
        assert nombre != null && !nombre.isBlank() : "El nombre es obligatorio";
        assert tipoDeporte != null : "El deporte es obligatorio";
        assert categoria != null : "La categoría es obligatoria";
        assert competicion != null : "El tipo de competición es obligatorio";
        assert pais != null : "El país es obligatorio";

        this.nombre = nombre;
        this.tipoDeporte = tipoDeporte;
        this.categoria = categoria;
        this.tipoCompeticion = competicion;
        this.pais = pais;
        this.jugadores = new ArrayList<>();
        this.torneosParticipados = new ArrayList<>();
    }

    public void ficharJugador(Jugador nuevoJugador) {
        // RESTRICCIÓN: El jugador no puede ser nulo
        assert nuevoJugador != null : "No se puede fichar un jugador nulo";
        
        // RESTRICCIÓN: El jugador no puede estar ya en el equipo
        assert !jugadores.contains(nuevoJugador) : "El jugador ya está en el equipo";

        // RESTRICCIÓN: El deporte debe coincidir
        assert nuevoJugador.getTipoDeporte() == this.tipoDeporte
        : "Un jugador de " + nuevoJugador.getTipoDeporte() + " no puede jugar en un equipo de " + this.tipoDeporte;

        // Tras asegurarnos que se cumplen las restricciones, añadimos el jugador
        this.jugadores.add(nuevoJugador);
    }

    public void asignarEntrenador(Entrenador nuevoEntrenador) {
        // RESTRICCIÓN: El entrenador no puede ser nulo
        assert nuevoEntrenador != null : "El entrenador no puede ser nulo";
        
        // Si ya es nuestro entrenador, no hacemos nada
        if (this.entrenador == nuevoEntrenador) return;

        // Intentamos que el nuevo entrenador nos acepte
        // Si hay conflicto de torneos, el assert saltará y no se cambiará nada.
        nuevoEntrenador.asignarEquipo(this);

        // Si ya tenemos entrenador, lo despedimos primero
        if (this.entrenador != null) {
            this.entrenador.liberarEquipo(this);
            this.entrenador = null;
        }

        // Tras asegurarnos que se cumplen las restricciones, asignamos el entrenador
        this.entrenador = nuevoEntrenador;
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Torneo)
    protected void inscribirEnTorneo(Torneo nuevoTorneo) {
        // RESTRICCIÓN: El torneo no puede ser nulo
        assert nuevoTorneo != null : "No puedes inscribirte a un torneo nulo";

        // RESTRICCIÓN: No estar en dos torneos la misma temporada
        for (Torneo t : torneosParticipados) {
            assert !t.getTemporada().equals(nuevoTorneo.getTemporada())
            : "El equipo ya juega otro torneo en la temporada " + t.getTemporada();
        }

        // Tras asegurarnos que se cumplen las restricciones, añadimos el torneo
        this.torneosParticipados.add(nuevoTorneo);
    }

    public String getNombre() {
        return nombre;
    }

    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public TipoCompeticion getTipoCompeticion() {
        return tipoCompeticion;
    }

    public Pais getPais() {
        return pais;
    }

    public Entrenador getEntrenador() {
        return entrenador;
    }

    public List<Jugador> getJugadores() {
        return jugadores;
    }

    public List<Torneo> getTorneos() {
        return torneosParticipados;
    }
}