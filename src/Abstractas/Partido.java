package Abstractas;

import Enumerados.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public abstract class Partido {
    private Torneo torneo;
    private Equipo equipoLocal;
    private Equipo equipoVisitante;
    private String lugar;
    private LocalDate fecha;
    private LocalTime hora;
    private String resultado;
    private TipoDeporte tipoDeporte;
    private Categoria categoria;
    private TipoCompeticion competicion;
    private List<Arbitro> arbitros;
    private List<Narrador> narradores;

    public Partido(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora) {
        assert torneo != null : "El partido debe pertenecer a un torneo";
        assert local != null : "El equipo local no puede ser nulo";
        assert visitante != null : "El equipo visitante no puede ser nulo";
        assert lugar != null && !lugar.isBlank() : "El lugar es obligatorio";
        assert fecha != null && hora != null : "Fecha y hora son obligatorias";

        // RESTRICCIÓN: Equipos distintos
        assert !local.equals(visitante) : "Un equipo no puede jugar contra sí mismo";

        // RESTRICCIÓN: Ambos equipos deben estar inscritos en el torneo
        assert torneo.getEquiposInscritos().contains(local)
        : "El equipo local no está inscrito en el torneo " + torneo.getNombre();
        assert torneo.getEquiposInscritos().contains(visitante)
        : "El equipo visitante no está inscrito en el torneo " + torneo.getNombre();

        // Asignaciones
        this.torneo = torneo;
        this.equipoLocal = local;
        this.equipoVisitante = visitante;
        this.lugar = lugar;
        this.fecha = fecha;
        this.hora = hora;
        this.resultado = null; // Aún no se ha jugado
        this.arbitros = new ArrayList<>();
        this.narradores = new ArrayList<>();

        // Deducimos los metadatos del partido basándonos en los equipos
        this.tipoDeporte = local.getTipoDeporte();
        this.categoria = local.getCategoria();
        this.competicion = local.getTipoCompeticion();
    }

    public void asignarArbitro(Arbitro arbitro) { // --- ARBITRO AUN NO ESTA IMPLEMENTADO ---
        // RESTRICCIÓN: El árbitro no puede ser nulo
        assert arbitro != null : "Árbitro nulo";

        // RESTRICCIÓN: El árbitro debe ser del mismo deporte que el partido
        assert arbitro.getTipoDeporte() == this.tipoDeporte : "Árbitro de deporte incorrecto";

        // RESTRICCIÓN: El árbitro debe estar contratado para el torneo
        assert this.torneo.getArbitros().contains(arbitro)
        : "El árbitro " + arbitro.getNombre() + " no ha sido contratado para el torneo " + torneo.getNombre();

        this.arbitros.add(arbitro);
    }

    public void asignarNarrador(Narrador narrador) {
        // RESTRICCIÓN: El narrador no puede ser nulo
        assert narrador != null : "Narrador nulo";

        // RESTRICCIÓN: El narrador debe ser del mismo deporte que el partido
        assert narrador.getTipoDeporte() == this.tipoDeporte : "Narrador de deporte incorrecto";

        // RESTRICCIÓN: El narrador debe estar contratado para el torneo
        assert this.torneo.getNarradores().contains(narrador)
        : "El narrador " + narrador.getNombre() + " no ha sido contratado para el torneo " + torneo.getNombre();

        this.narradores.add(narrador);
    }

    public void setResultado(String resultado) {
        // RESTRICCIÓN: El resultado no puede ser nulo o vacío
        assert resultado != null && !resultado.isBlank() : "El resultado no puede estar vacío";

        this.resultado = resultado;
    }

    public Torneo getTorneo() {
        return torneo;
    }
    
    public Equipo getEquipoLocal() {
        return equipoLocal;
    }

    public Equipo getEquipoVisitante() {
        return equipoVisitante;
    }

    public String getLugar() {
        return lugar;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public LocalTime getHora() {
        return hora;
    }

    public String getResultado() {
        return resultado;
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

    public List<Arbitro> getArbitros() {
        return arbitros;
    }

    public List<Narrador> getNarradores() {
        return narradores;
    }
}