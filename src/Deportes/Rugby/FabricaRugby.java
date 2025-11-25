package Deportes.Rugby;

import Interfaces.FabricaDeporte;
import Abstractas.*;
import Enumerados.*;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalTime;

public class FabricaRugby implements FabricaDeporte {

    @Override
    public Torneo crearTorneo(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion) {
        return new TorneoRugby(nombre, paisSede, temporada, maxIntegrantesEquipo, categoria, competicion);
    }

    @Override
    public Equipo crearEquipo(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais) {
        return new EquipoRugby(nombre, categoria, competicion, pais);
    }

    @Override
    public Jugador crearJugador(String nombre, String ap1, String ap2, int edad, Pais nacionalidad, Categoria categoria) {
        return new JugadorRugby(nombre, ap1, ap2, edad, nacionalidad, categoria);
    }

    @Override
    public Entrenador crearEntrenador(String nombre, String ap1, String ap2, int edad) {
        return new EntrenadorRugby(nombre, ap1, ap2, edad);
    }

    @Override
    public Arbitro crearArbitro(String nombre, String ap1, String ap2, int edad, List<Categoria> categorias, TipoCompeticion competicion) {
        return new ArbitroRugby(nombre, ap1, ap2, edad, categorias, competicion);
    }

    @Override
    public Narrador crearNarrador(String nombre, String ap1, String ap2, int edad) {
        return new NarradorRugby(nombre, ap1, ap2, edad);
    }

    @Override
    public Partido crearPartido(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora) {
        return new PartidoRugby(torneo, local, visitante, lugar, fecha, hora);
    }
}
