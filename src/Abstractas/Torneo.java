package Abstractas;

import Enumerados.*;
import Interfaces.Strategy;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public abstract class Torneo {
    private String nombre;
    private Pais paisSede;
    private String provinciaSede;
    private String temporada;
    private TipoDeporte tipoDeporte;
    private Categoria categoria;
    private TipoCompeticion competicion;
    private List<Equipo> equiposInscritos;
    private List<Partido> partidos;
    private List<Arbitro> arbitros;
    private List<Narrador> narradores;
    private Equipo ganador;
    private int duracionPartidos; // en minutos
    protected Strategy puntuacionStrategy;

    // REQUISITO: "No puede haber más equipos que el número máximo de equipos."
    private int maxEquipos;

    public Torneo(String nombre, Pais paisSede, String provinciaSede, String temporada,
                  TipoDeporte tipoDeporte, Categoria categoria, TipoCompeticion competicion, int duracionPartidos, int maxEquipos) {

        assert nombre != null && !nombre.isBlank() : "El nombre es obligatorio";
        assert paisSede != null : "Debe definirse un país sede";
        assert provinciaSede != null && !provinciaSede.isBlank() : "Debe definirse una ciudad sede";
        assert temporada != null && !temporada.isBlank() : "La temporada es obligatoria";
        assert tipoDeporte != null : "El deporte es obligatorio";
        assert categoria != null : "La categoría es obligatoria";
        assert competicion != null : "El tipo de competición es obligatorio";
        assert duracionPartidos > 0 : "La duración de los partidos debe ser positiva";

        // Validación del nuevo atributo
        assert maxEquipos > 1 : "Un torneo debe tener al menos 2 equipos de cupo";

        this.nombre = nombre;
        this.paisSede = paisSede;
        this.provinciaSede = provinciaSede;
        this.temporada = temporada;
        this.tipoDeporte = tipoDeporte;
        this.categoria = categoria;
        this.competicion = competicion;
        this.equiposInscritos = new ArrayList<>();
        this.partidos = new ArrayList<>();
        this.arbitros = new ArrayList<>();
        this.narradores = new ArrayList<>();
        this.ganador = null;
        this.duracionPartidos = duracionPartidos;
        this.maxEquipos = maxEquipos;
    }

    public void inscribirEquipo(Equipo equipo) {
        assert equipo != null : "Equipo nulo";

        // RESTRICCIÓN: Número máximo de equipos
        assert equiposInscritos.size() < maxEquipos
                : "Cupo de equipos lleno. Máximo permitido: " + maxEquipos;

        // RESTRICCIÓN: Mismo deporte
        assert equipo.getTipoDeporte() == this.tipoDeporte
                : "No puedes inscribir un equipo de " + equipo.getTipoDeporte() + " en un torneo de " + this.tipoDeporte;

        // RESTRICCIÓN: Misma categoría
        assert equipo.getCategoria() == this.categoria
                : "Categoría incorrecta: Se espera " + this.categoria;

        // RESTRICCIÓN: No repetidos
        assert !this.equiposInscritos.contains(equipo)
                : "El equipo " + equipo.getNombre() + " ya está inscrito en el torneo";

        // RESTRICCIÓN: Internacional (No dos equipos del mismo país)
        if (this.competicion == TipoCompeticion.INTERNACIONAL) {
            for (Equipo e : equiposInscritos) {
                assert e.getPais() != equipo.getPais()
                : "Regla Internacional violada: Ya existe un equipo de " + equipo.getPais();
            }
        }
        // RESTRICCIÓN: Nacional (Equipos del país sede)
        else if (this.competicion == TipoCompeticion.NACIONAL) {
            assert equipo.getPais() == this.paisSede
            : "Regla Nacional violada: Un equipo de " + equipo.getPais() + " no puede jugar un torneo nacional de " + this.paisSede;
        }
        // RESTRICCIÓN: Local (Equipos de la provincia sede)
        else if (this.competicion == TipoCompeticion.LOCAL) {
            assert equipo.getProvincia().equals(this.provinciaSede)
            : "Regla Local violada: Un equipo de " + equipo.getProvincia() + " no puede jugar un torneo local de " + this.provinciaSede;
        }

        // Intentamos que el equipo se inscriba (él validará si tiene agenda libre)
        equipo.inscribirEnTorneo(this);

        this.equiposInscritos.add(equipo);
    }

    public void contratarArbitro(Arbitro arbitro) {
        assert arbitro != null : "Arbitro nulo";
        assert !arbitros.contains(arbitro) : "El árbitro ya está contratado";

        assert arbitro.getTipoDeporte() == this.tipoDeporte
                : "Un arbitro de " + arbitro.getTipoDeporte() + " no puede arbitrar un torneo de " + this.tipoDeporte;

        assert arbitro.getCategoriasPermitidas().contains(this.categoria)
                : "El árbitro no está cualificado para la categoría " + this.categoria;

        this.arbitros.add(arbitro);

        // Notificamos al árbitro (si fuera necesario en tu modelo, aunque Arbitro gestiona Partidos, no Torneos directamente)
    }

    public void contratarNarrador(Narrador narrador) {
        assert narrador != null : "Narrador nulo";
        assert !narradores.contains(narrador) : "El narrador ya está contratado";

        assert narrador.getTipoDeporte() == this.tipoDeporte
                : "Deporte incorrecto para el narrador";

        // IMPORTANTE: Vinculación bidireccional para que el narrador sepa que trabaja aquí
        // (Esto es necesario para que luego Narrador.anadirPartido funcione, ya que comprueba 'torneosAsignados')
        narrador.asignarTorneo(this);

        this.narradores.add(narrador);
    }

    public void registrarPartido(Partido nuevoPartido) {
        assert nuevoPartido != null : "Partido nulo";

        // RESTRICCIÓN: No solapamiento de lugar y hora
        for (Partido p : partidos) {
            if (p.getFecha().equals(nuevoPartido.getFecha())) {
                if (p.getLugar().equalsIgnoreCase(nuevoPartido.getLugar())) {
                    // Aquí calculamos si chocan las horas usando la duración
                    LocalTime finExistente = p.getHora().plusMinutes(p.getTorneo().getDuracionPartidos());
                    LocalTime finNuevo = nuevoPartido.getHora().plusMinutes(nuevoPartido.getTorneo().getDuracionPartidos());

                    // Solapamiento de intervalos
                    boolean solapan = nuevoPartido.getHora().isBefore(finExistente) && p.getHora().isBefore(finNuevo);

                    assert !solapan
                            : "Conflicto de pista: Ya hay un partido en " + p.getLugar() + " a esa hora.";
                }
            }
        }

        this.partidos.add(nuevoPartido);
    }

    public void finalizarTorneo(Equipo ganador) {
        assert !partidos.isEmpty() : "No se puede finalizar un torneo sin partidos jugados";
        assert equiposInscritos.contains(ganador) : "El ganador no estaba inscrito en el torneo";

        this.ganador = ganador;
    }

    // Método para mostrar la clasificación de los equipos según la estrategia de puntuación
    public void mostrarClasificacion() {
        System.out.println("Clasificación del Torneo: " + nombre);
        for (Equipo equipo : equiposInscritos) {
            int puntos = 0;
            for (Partido partido : partidos) {
                // Comprobamos que los partidos involucren a los equipos correctos
                if (partido.getEquipoLocal().equals(equipo) || partido.getEquipoVisitante().equals(equipo)) {
                    puntos += puntuacionStrategy.calcularPuntos(equipo, partido);
                }
            }
            System.out.println(equipo.getNombre() + ": " + puntos + " puntos");
        }
    }

    // Getters
    public String getNombre() { return nombre; }
    public Pais getPaisSede() { return paisSede; }
    public String getProvinciaSede() { return provinciaSede; }
    public String getTemporada() { return temporada; }
    public TipoDeporte getTipoDeporte() { return tipoDeporte; }
    public Categoria getCategoria() { return categoria; }
    public TipoCompeticion getCompeticion() { return competicion; }
    public List<Equipo> getEquiposInscritos() { return new ArrayList<>(equiposInscritos); }
    public List<Partido> getPartidos() { return new ArrayList<>(partidos); }
    public List<Arbitro> getArbitros() { return new ArrayList<>(arbitros); }
    public List<Narrador> getNarradores() { return new ArrayList<>(narradores); }
    public Equipo getGanador() { return ganador; }
    public int getDuracionPartidos() { return duracionPartidos; }
    public int getMaxEquipos() { return maxEquipos; }
}