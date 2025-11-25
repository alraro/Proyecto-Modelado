package Interfaces;

import Abstractas.*;
import Enumerados.*;
import java.util.List;
import java.util.Map;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * Abstract Factory: Declara la interfaz para crear las familias de objetos
 * relacionados (Abstractas.Equipo y Árbitro) sin especificar sus clases concretas.
 */
public interface FabricaDeporte {
    // Métodos de fabricación de componentes
    Torneo crearTorneo(String nombre, Pais pais, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos);

    Equipo crearEquipo(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int titulares, int suplentes);

    Jugador crearJugador(String nombre, String ap1, String ap2, int edad, Pais nacionalidad, Categoria categoria, String dni);

    Entrenador crearEntrenador(String nombre, String ap1, String ap2, int edad, String dni);

    Arbitro crearArbitro(String nombre, String ap1, String ap2, int edad, String dni, List<Categoria> categorias, TipoCompeticion ambito);

    Narrador crearNarrador(String nombre, String ap1, String ap2, int edad, String dni);

    Partido crearPartido(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora, Map<Jugador, TipoJugador> alineacionLocal, Map<Jugador, TipoJugador> alineacionVisitante);
}
