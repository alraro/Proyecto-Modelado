package Deportes.Futbol;

import Interfaces.FabricaDeporte;

public class FabricaFutbol implements FabricaDeporte {
    @Override
    public Equipo crearEquipo(String nombre) {
        return new Equipo(nombre);
    }

    @Override
    public Jugador crearJugador(String nombre, String posicion) {
        return new Jugador(nombre, posicion);
    }

    @Override
    public Narrador crearNarrador(String nombre) {
        return new Narrador(nombre);
    }

    @Override
    public Torneo crearTorneo(String nombre) {
        return new Torneo(nombre);
    }

    @Override
    public Arbitro crearArbitro(String nombre) {
        return new Arbitro(nombre);
    }

    @Override
    public Partido crearPartido(Equipo equipo1, Equipo equipo2) {
        return new Partido(equipo1, equipo2);
    }

    @Override
    public Entrenador crearEntrenador(String nombre) {
        return new Entrenador(nombre);
    }
}
