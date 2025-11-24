package GestorTorneos;

import java.util.HashSet;
import java.util.Set;

public class Torneo {
    private String nombre;
    private TipoDeporte deporte;
    private int maxEquipos;
    private int maxIntegrantesPorEquipo;
    private TipoTorneo tipoTorneo;
    private int temporada;
    private String equipoGanador; // Podría ser un objeto Equipo o Participante, simplificado a Object por ahora
    private Set<String> listaPremios = new HashSet<>(); // Simplificado: lista de nombres de premios
    private Set<Equipo> equiposParticipantes = new HashSet<>();
    private Set<Partido> partidosProgramados = new HashSet<>();
    private Set<Partido> partidosJugados = new HashSet<>();

    public Torneo(String nombre, TipoDeporte deporte, int maxEquipos, int maxIntegrantesPorEquipo, TipoTorneo tipoTorneo, int temporada) {
        this.nombre = nombre;
        this.deporte = deporte;
        this.maxEquipos = maxEquipos;
        this.maxIntegrantesPorEquipo = maxIntegrantesPorEquipo;
        this.tipoTorneo = tipoTorneo;
        this.temporada = temporada;
    }
}
