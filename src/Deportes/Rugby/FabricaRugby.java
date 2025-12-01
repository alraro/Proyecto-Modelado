package Deportes.Rugby;

import Interfaces.FabricaDeporte;
import Abstractas.*;
import Enumerados.*;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Map;

public class FabricaRugby implements FabricaDeporte {

    // Implementación del patrón de Singleton
    private static FabricaRugby instance;

    // Constructor privado para evitar instanciación externa
    private FabricaRugby() {}

    // Creamos la instancia
    public static FabricaRugby getInstance() {
        if (instance == null) {
            instance = new FabricaRugby();
        }
        return instance;
    }

    @Override
    public Torneo crearTorneo(String nombre, Pais paisSede, String provinciaSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos, int maxEquipos) {
        return new TorneoRugby(nombre, paisSede, provinciaSede, temporada, categoria, competicion, duracionPartidos, maxEquipos);
    }

    @Override
    public Equipo crearEquipo(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, String provincia) {
        return new EquipoRugby(nombre, categoria, competicion, pais, provincia);
    }

    @Override
    public Jugador crearJugador(String nombre, String ap1, String ap2, int edad, Pais nacionalidad, Categoria categoria, String dni) {
        return new JugadorRugby(nombre, ap1, ap2, edad, nacionalidad, categoria, dni);
    }

    @Override
    public Entrenador crearEntrenador(String nombre, String ap1, String ap2, int edad, String dni) {
        return new EntrenadorRugby(nombre, ap1, ap2, edad, dni);
    }

    @Override
    public Arbitro crearArbitro(String nombre, String ap1, String ap2, int edad, String dni, List<Categoria> categorias, TipoCompeticion competicion) {
        return new ArbitroRugby(nombre, ap1, ap2, edad, dni, categorias, competicion);
    }

    @Override
    public Narrador crearNarrador(String nombre, String ap1, String ap2, int edad, String dni) {
        return new NarradorRugby(nombre, ap1, ap2, edad, dni);
    }

    @Override
    public Partido crearPartido(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora, Map<Jugador, TipoJugador> alineacionLocal, Map<Jugador, TipoJugador> alineacionVisitante) {
        return new PartidoRugby(torneo, local, visitante, lugar, fecha, hora, alineacionLocal, alineacionVisitante);
    }
}
