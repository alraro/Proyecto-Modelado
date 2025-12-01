package Deportes.Futbol;

import Interfaces.FabricaDeporte;
import Abstractas.*;
import Enumerados.*;
import java.util.List;
import java.util.Map;
import java.time.LocalDate;
import java.time.LocalTime;

public class FabricaFutbol implements FabricaDeporte {

    // Implementación del patrón de Singleton
    private static FabricaFutbol instance;

    // Constructor privado para evitar instanciación externa
    private FabricaFutbol() {}

    // Creamos la instancia


    public static FabricaFutbol getInstance() {
        if (instance == null) {
            instance = new FabricaFutbol();
        }
        return instance;
    }

    @Override
    public Torneo crearTorneo(String nombre, Pais paisSede, String provinciaSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos, int maxEquipos) {
        return new TorneoFutbol(nombre, paisSede, provinciaSede, temporada, categoria, competicion, duracionPartidos, maxEquipos);
    }

    @Override
    public Equipo crearEquipo(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, String provincia) {
        return new EquipoFutbol(nombre, categoria, competicion, pais, provincia);
    }

    @Override
    public Jugador crearJugador(String nombre, String ap1, String ap2, int edad, Pais nacionalidad, Categoria categoria, String dni) {
        return new JugadorFutbol(nombre, ap1, ap2, edad, nacionalidad, categoria, dni);
    }

    @Override
    public Entrenador crearEntrenador(String nombre, String ap1, String ap2, int edad, String dni) {
        return new EntrenadorFutbol(nombre, ap1, ap2, edad, dni);
    }

    @Override
    public Arbitro crearArbitro(String nombre, String ap1, String ap2, int edad, String dni, List<Categoria> categorias, TipoCompeticion competicion) {
        return new ArbitroFutbol(nombre, ap1, ap2, edad, dni, categorias, competicion);
    }

    @Override
    public Narrador crearNarrador(String nombre, String ap1, String ap2, int edad, String dni) {
        return new NarradorFutbol(nombre, ap1, ap2, edad, dni);
    }

    @Override
    public Partido crearPartido(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora, Map<Jugador, TipoJugador> alineacionLocal, Map<Jugador, TipoJugador> alineacionVisitante) {
        return new PartidoFutbol(torneo, local, visitante, lugar, fecha, hora, alineacionLocal, alineacionVisitante);
    }
}