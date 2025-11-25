package Interfaces;

import Abstractas.*;
import Enumerados.*;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * Abstract Factory: Declara la interfaz para crear las familias de objetos
 * relacionados (Abstractas.Equipo y Árbitro) sin especificar sus clases concretas.
 */
public interface FabricaDeporte {
    // Métodos de fabricación de componentes
    Torneo crearTorneo(String nombre, Pais pais, String temporada, int maxIntegrantesEquipo ,Categoria categoria, TipoCompeticion competicion);
    
    Equipo crearEquipo(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais);
    
    Jugador crearJugador(String nombre, String ap1, String ap2, int edad, Pais nacionalidad, Categoria categoria);
    
    Entrenador crearEntrenador(String nombre, String ap1, String ap2, int edad);
    
    Arbitro crearArbitro(String nombre, String ap1, String ap2, int edad, List<Categoria> categorias, TipoCompeticion ambito);
    
    Narrador crearNarrador(String nombre, String ap1, String ap2, int edad);
    
    Partido crearPartido(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora);
}
