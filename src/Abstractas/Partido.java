package Abstractas;

import Enumerados.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    private Map<Jugador, TipoJugador> alineacionLocal;
    private Map<Jugador, TipoJugador> alineacionVisitante;

    public Partido(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora, Map<Jugador, TipoJugador> alineacionLocal, Map<Jugador, TipoJugador> alineacionVisitante) {
        assert torneo != null : "El partido debe pertenecer a un torneo";
        assert local != null : "El equipo local no puede ser nulo";
        assert visitante != null : "El equipo visitante no puede ser nulo";
        assert lugar != null && !lugar.isBlank() : "El lugar es obligatorio";
        assert fecha != null && hora != null : "Fecha y hora son obligatorias";
        assert alineacionLocal != null :  "La alineación local no puede ser nula";
        assert alineacionVisitante != null :  "La alineación visitante no puede ser nula";
        assert validarAlineacion(alineacionLocal, local) : "Alineación local inválida";
        assert validarAlineacion(alineacionVisitante, visitante) : "Alineación visitante inválida";

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
        this.alineacionLocal = new HashMap<>(alineacionLocal);
        this.alineacionVisitante = new HashMap<>(alineacionVisitante);
    }

    // Método para asignar alineaciones a ambos equipos
    private boolean validarAlineacion(Map<Jugador, TipoJugador> alineacion, Equipo equipo) {
        int titulares = 0;
        int suplentes = 0;

        for (Map.Entry<Jugador, TipoJugador> entry : alineacion.entrySet()) {
            Jugador jugador = entry.getKey();
            TipoJugador tipo = entry.getValue();

            // RESTRICCIÓN: El jugador debe pertenecer al equipo
            assert equipo.getJugadores().contains(jugador)
            : "El jugador " + jugador.getNombre() + " no pertenece al equipo " + equipo.getNombre();

            if (tipo == TipoJugador.TITULAR) {
                titulares++;
            } else if (tipo == TipoJugador.SUPLENTE) {
                suplentes++;
            }
        }

        // RESTRICCIÓN: Debe no superarse el número máximo de titulares y suplentes, el cual, es independiente del equipo
        assert titulares <= equipo.getMaxTitulares() : "Debe haber " + equipo.getMaxTitulares() + " jugadores titulares como máximo";
        assert suplentes <= equipo.getMaxSuplentes() : "Debe haber " + equipo.getMaxSuplentes() + " jugadores suplente como máximo";

        return true;
    }
    
    public void asignarArbitro(Arbitro arbitro) {
        // RESTRICCIÓN: El árbitro no puede ser nulo
        assert arbitro != null : "Árbitro nulo";

        // RESTRICCIÓN: El árbitro debe estar contratado para el torneo
        assert this.torneo.getArbitros().contains(arbitro)
        : "El árbitro " + arbitro.getNombre() + " no ha sido contratado para el torneo " + torneo.getNombre();

        // Intentamos añadir el partido a la agenda del árbitro, añadirPartido ya tiene el resto de asserts
        arbitro.anadirPartido(this);

        // Si todo es correcto, lo añadimos a la lista de árbitros del partido
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

        // Intentamos añadir el partido a la agenda del narrador, añadirPartido ya tiene el resto de asserts
        narrador.anadirPartido(this);

        // Si todo es correcto, lo añadimos a la lista de narradores del partido
        this.narradores.add(narrador);
    }

    // Método para determinar si ya ha finalizado el partido para poder evitar conflictos de horario y cerrar actas
    public boolean isFinalizado() {
        return this.resultado != null;
    }

    public void setResultado(String resultado) {
        // RESTRICCIÓN: El resultado no puede ser nulo o vacío
        assert resultado != null && !resultado.isBlank() : "El resultado no puede estar vacío";

        this.resultado = resultado;
    }

    // Método para obtener la alineación de un equipo
    public Map<Jugador, TipoJugador> getAlineacion(Equipo equipo) {
        if (equipo.equals(equipoLocal)) {
            return new HashMap<>(alineacionLocal);
        } else if (equipo.equals(equipoVisitante)) {
            return new HashMap<>(alineacionVisitante);
        } else {
            throw new IllegalArgumentException("El equipo no participa en este partido");
        }
    }

    // Método para mostrar las alineaciones de un equipo
    public void mostrarAlineacion(Equipo equipo) {
        Map<Jugador, TipoJugador> alineacion = getAlineacion(equipo);
        System.out.println("Alineación del equipo " + equipo.getNombre() + ":");
        for (Map.Entry<Jugador, TipoJugador> entry : alineacion.entrySet()) {
            Jugador jugador = entry.getKey();
            TipoJugador tipo = entry.getValue();
            System.out.println("- " + jugador.getNombre() + " :" + tipo + "\n");
        }
    }

    public void finalizarPartido(String resultado) {
        setResultado(resultado);
    }

    // Getters
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