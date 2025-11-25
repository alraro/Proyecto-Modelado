package Abstractas;

import Enumerados.*;
import java.util.ArrayList;
import java.util.List;

public abstract class Torneo {
    private String nombre;
    private Pais paisSede;
    private String temporada;
    private int maxIntegrantesEquipo;
    private TipoDeporte tipoDeporte;
    private Categoria categoria;
    private TipoCompeticion competicion;
    private List<Equipo> equiposInscritos;
    private List<Partido> partidos;
    private List<Arbitro> arbitros;
    private List<Narrador> narradores;
    private Equipo ganador; 

    public Torneo(String nombre, Pais paisSede, String temporada, int maxIntegrantes, 
                  TipoDeporte tipoDeporte, Categoria categoria, TipoCompeticion competicion) {

        assert nombre != null && !nombre.isBlank() : "El nombre es obligatorio";
        assert paisSede != null : "Debe definirse un país sede";
        assert temporada != null && !temporada.isBlank() : "La temporada es obligatoria";
        assert maxIntegrantes > 0 : "El cupo de jugadores debe ser positivo";
        assert tipoDeporte != null : "El deporte es obligatorio";
        assert categoria != null : "La categoría es obligatoria";
        assert competicion != null : "El tipo de competición es obligatorio";

        this.nombre = nombre;
        this.paisSede = paisSede;
        this.temporada = temporada;
        this.maxIntegrantesEquipo = maxIntegrantes;
        this.tipoDeporte = tipoDeporte;
        this.categoria = categoria;
        this.competicion = competicion;
        this.equiposInscritos = new ArrayList<>();
        this.partidos = new ArrayList<>();
        this.arbitros = new ArrayList<>();
        this.narradores = new ArrayList<>();
        this.ganador = null;
    }

    public void inscribirEquipo(Equipo equipo) {
        // RESTRICCIÓN: El equipo no puede ser nulo
        assert equipo != null : "Equipo nulo";

        // RESTRICCIÓN: El equipo tiene que ser del mismo deporte que el torneo
        assert equipo.getTipoDeporte() == this.tipoDeporte 
        : "No puedes inscribir un equipo de " + equipo.getTipoDeporte() + " en un torneo de " + this.tipoDeporte;

        // RESTRICCIÓN: El equipo tiene que ser de la misma categoría que el torneo
        assert equipo.getCategoria() == this.categoria
        : "Categoría incorrecta: Se espera " + this.categoria;

        // RESTRICCIÓN: El equipo no puede tener más jugadores que el máximo permitido por el torneo
        assert equipo.getJugadores().size() <= this.maxIntegrantesEquipo 
        : "El equipo excede el límite de participantes de este torneo (" + maxIntegrantesEquipo + ")";

        // RESTRICCIÓN: El equipo no puede estar ya inscrito
        assert !this.equiposInscritos.contains(equipo) 
        : "El equipo " + equipo.getNombre() + " ya está inscrito en el torneo";

        // RESTRICCIÓN: En un torneo internacional no puede haber dos equipos del mismo país
        if (this.competicion == TipoCompeticion.INTERNACIONAL) {
            for (Equipo e : equiposInscritos) {
                assert e.getPais() != equipo.getPais()
                : "Regla Internacional violada: Ya existe un equipo de " + equipo.getPais();
            }
        }
        
        // RESTRICCIÓN: En un torneo nacional los equipos deben ser del país sede
        else if (this.competicion == TipoCompeticion.NACIONAL) {
            assert equipo.getPais() == this.paisSede
            : "Regla Nacional violada: Un equipo de " + equipo.getPais() + " no puede jugar un torneo nacional de " + this.paisSede;
        }

        // Intentamos que el equipo se inscriba en el torneo, inscribirEnTorneo ya tiene el resto de asserts
        equipo.inscribirEnTorneo(this);

        // Si pasa todas las validaciones, entra.
        this.equiposInscritos.add(equipo);
    }

    public void contratarArbitro(Arbitro arbitro) { // --- ARBITRO AUN NO ESTA IMPLEMENTADO ---
        assert arbitro != null : "Arbitro nulo";
        // Validamos que el árbitro sea del mismo deporte
        // Asumimos Arbitro.getTipoDeporte()
        /* assert arbitro.getTipoDeporte() == this.tipoDeporte : "Arbitro de deporte incorrecto"; */
        
        this.arbitros.add(arbitro);
    }

    public void contratarNarrador(Narrador narrador) {
        // RESTRICCIÓN: El narrador no puede ser nulo
        assert narrador != null : "Narrador nulo";

        // RESTRICCIÓN: El narrador debe ser del mismo deporte que el torneo
        assert narrador.getTipoDeporte() == this.tipoDeporte
        : "El narrador de " + narrador.getTipoDeporte() + " no puede narrar un torneo de " + this.tipoDeporte;

        // Intentamos asignarle el torneo al narrador, asignarTorneo ya tiene el resto de asserts
        narrador.asignarTorneo(this);

        // Tras asegurarnos que se cumplen las restricciones, añadimos el narrador
        this.narradores.add(narrador);
    }

    public void registrarPartido(Partido nuevoPartido) {
        // RESTRICCIÓN: El partido no puede ser nulo
        assert nuevoPartido != null : "El partido no puede ser nulo";

        // RESTRICCIÓN: No se pueden jugar varios partidos a la misma hora en el mismo lugar"
        for (Partido p : partidos) {
            if (p.getFecha().equals(nuevoPartido.getFecha())) { // Mismo día
                if (p.getLugar().equalsIgnoreCase(nuevoPartido.getLugar())) { // Mismo lugar
                    assert !p.getHora().equals(nuevoPartido.getHora()) // Misma hora
                    : "Ya hay un partido en " + p.getLugar() +  " el " + p.getFecha() + " a las " + p.getHora();
                }
            }
        }

        this.partidos.add(nuevoPartido);
    }

    public void finalizarTorneo(Equipo ganador) {
        // RESTRICCIÓN: Tiene que haberse jugado al menos un partido
        assert !partidos.isEmpty() 
        : "No se puede finalizar un torneo sin partidos jugados";
        
        // RESTRICCIÓN: El ganador debe ser un equipo del torneo
        assert equiposInscritos.contains(ganador) 
        : "El ganador no estaba inscrito en el torneo";

        this.ganador = ganador;
    }

    public String getNombre() {
        return nombre;
    }

    public Pais getPaisSede() {
        return paisSede;
    }

    public String getTemporada() {
        return temporada;
    }

    public int getMaxIntegrantesEquipo() {
        return maxIntegrantesEquipo;
    }

    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public TipoCompeticion getCompeticion() {
        return competicion;
    }

    public List<Equipo> getEquiposInscritos() {
        return equiposInscritos;
    }

    public List<Partido> getPartidos() {
        return partidos;
    }

    public List<Arbitro> getArbitros() {
        return arbitros;
    }

    public List<Narrador> getNarradores() {
        return narradores;
    }

    public Equipo getGanador() {
        return ganador;
    }
}