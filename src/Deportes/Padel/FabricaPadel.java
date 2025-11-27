package Deportes.Padel;

import Interfaces.FabricaDeporte;
import Abstractas.*;
import Enumerados.*;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Map;

public class FabricaPadel implements FabricaDeporte {

    @Override
    public Torneo crearTorneo(String nombre, Pais paisSede, String provinciaSede, String temporada, Categoria categoria, TipoCompeticion competicion, int duracionPartidos) {
        return new TorneoPadel(nombre, paisSede, provinciaSede, temporada, categoria, competicion, duracionPartidos);
    }

    @Override
    public Equipo crearEquipo(String nombre, Categoria categoria, TipoCompeticion competicion, Pais pais, String provincia) {
        return new EquipoPadel(nombre, categoria, competicion, pais, provincia);
    }

    @Override
    public Jugador crearJugador(String nombre, String ap1, String ap2, int edad, Pais nacionalidad, Categoria categoria, String dni) {
        return new JugadorPadel(nombre, ap1, ap2, edad, nacionalidad, categoria, dni);
    }

    @Override
    public Entrenador crearEntrenador(String nombre, String ap1, String ap2, int edad, String dni) {
        return new EntrenadorPadel(nombre, ap1, ap2, edad, dni);
    }

    @Override
    public Arbitro crearArbitro(String nombre, String ap1, String ap2, int edad, String dni, List<Categoria> categorias, TipoCompeticion competicion) {
        return new ArbitroPadel(nombre, ap1, ap2, edad, dni, categorias, competicion);
    }

    @Override
    public Narrador crearNarrador(String nombre, String ap1, String ap2, int edad, String dni) {
        return new NarradorPadel(nombre, ap1, ap2, edad, dni);
    }

    @Override
    public Partido crearPartido(Torneo torneo, Equipo local, Equipo visitante, String lugar, LocalDate fecha, LocalTime hora, Map<Jugador, TipoJugador> alineacionLocal, Map<Jugador, TipoJugador> alineacionVisitante) {
        return new PartidoPadel(torneo, local, visitante, lugar, fecha, hora, alineacionLocal, alineacionVisitante);
    }
}
