package Deportes.Baloncesto;

import Interfaces.FabricaDeporte;
import Abstractas.*;
import Enumerados.*;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalTime;

public class FabricaBaloncesto implements FabricaDeporte {

    @Override
    public Torneo crearTorneo(String nombre, Pais paisSede, String temporada, int maxIntegrantesEquipo, Categoria categoria, TipoCompeticion competicion) {
        return new TorneoBaloncesto(nombre, paisSede, temporada, maxIntegrantesEquipo, categoria, competicion);
    }

    @Override
    public Equipo crearEquipo(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, int titulares, int suplentes) {
        return new EquipoBaloncesto(nombre, categoria, competicion, pais, titulares, suplentes);
    }

    @Override
    public Jugador crearJugador(String nombre, String ap1, String ap2, int edad, Pais nacionalidad, Categoria categoria, String dni) {
        return new JugadorBaloncesto(nombre, ap1, ap2, edad, nacionalidad, categoria, dni);
    }

    @Override
    public Entrenador crearEntrenador(String nombre, String ap1, String ap2, int edad, String dni) {
        return new EntrenadorBaloncesto(nombre, ap1, ap2, edad, dni);
    }

    @Override
    public Arbitro crearArbitro(String nombre, String ap1, String ap2, int edad, String dni, List<Categoria> categorias, TipoCompeticion competicion) {
        return new ArbitroBaloncesto(nombre, ap1, ap2, edad, dni, categorias, competicion);
    }

    @Override
    public Narrador crearNarrador(String nombre, String ap1, String ap2, int edad, String dni) {
        return new NarradorBaloncesto(nombre, ap1, ap2, edad, dni);
    }

    @Override
    public Partido crearPartido(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora) {
        return new PartidoBaloncesto(torneo, local, visitante, lugar, fecha, hora);
    }
}
