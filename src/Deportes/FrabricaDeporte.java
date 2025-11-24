package Deportes;

/**
 * Abstract Factory: Declara la interfaz para crear las familias de objetos
 * relacionados (Equipo y Árbitro) sin especificar sus clases concretas.
 */

public interface FrabricaDeporte {

    // Método para crear un equipo
    Equipo crearEquipo(String nombre);

    // Método para crear un jugador
    Jugador crearJugador(String nombre, String posicion);

    // Método para crear un narrador
    Narrador crearNarrador(String nombre);

    // Método para crear un torneo
    Torneo crearTorneo(String nombre);

    // Método para crear un árbitro
    Arbitro crearArbitro(String nombre);

    // Método para crear partido
    Partido crearPartido(Equipo equipo1, Equipo equipo2);

    // Método para crear entrenador
    Entrenador crearEntrenador(String nombre);


}
