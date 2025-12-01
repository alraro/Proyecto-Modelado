package Interfaces;
import Abstractas.*;
// Impletamos un interface Strategy para el patrón Strategy
public interface Strategy {
/**
 * Calcula los puntos de un equipo específico en un partido finalizado según las reglas del deporte.
 *   @param partido El partido jugado (con resultado).
 *   @param equipo El equipo del que queremos saber los puntos.
 *   @return Puntos obtenidos (3, 1, 0, 2, etc.)
 */
    int calcularPuntos(Equipo equipo, Partido partido);
}
