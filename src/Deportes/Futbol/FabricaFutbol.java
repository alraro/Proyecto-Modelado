package Deportes.Futbol;

import Interfaces.FabricaDeporte;
import Abstractas.*;

public class FabricaFutbol implements FabricaDeporte {


    @Override
    public Equipo crearEquipo(String nombre) {
        return null;
    }

    @Override
    public Jugador crearJugador(String nombre, String posicion) {
        return null;
    }

    @Override
    public Narrador crearNarrador(String nombre) {
        return null;
    }

    @Override
    public Torneo crearTorneo(String nombre) {
        return null;
    }

    @Override
    public Arbitro crearArbitro(String nombre) {
        return null;
    }

    @Override
    public Entrenador crearEntrenador(String nombre) {
        return null;
    }

    @Override
    public Partido crearPartido(Equipo equipo1, Equipo equipo2) {
        return null;
    }
}
