package Abstractas;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import Enumerados.*;

public abstract class Narrador extends Persona {
    private TipoDeporte tipoDeporte;
    private List<Torneo> torneosAsignados;
    private List<Partido> partidosNarrados;

    public Narrador(String nombre, String apellido1, String apellido2, Integer edad, String dni, TipoDeporte tipoDeporte) {
        super(nombre, apellido1, apellido2, edad, dni);

        assert tipoDeporte != null : "El tipo de deporte no puede ser nulo";

        this.tipoDeporte = tipoDeporte;
        this.torneosAsignados = new ArrayList<>();
        this.partidosNarrados = new ArrayList<>();
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Torneo)
    protected void asignarTorneo(Torneo nuevoTorneo) {
        assert nuevoTorneo != null : "El torneo no puede ser nulo";

        // RESTRICCIÓN: Mismo deporte
        assert this.tipoDeporte == nuevoTorneo.getTipoDeporte()
        : "El narrador es de " + this.tipoDeporte + " y no puede narrar en un torneo de " + nuevoTorneo.getTipoDeporte();

        // RESTRICCIÓN: Puede estar en varios torneos, NO en la misma temporada
        for (Torneo t : torneosAsignados) {
            assert !t.getTemporada().equals(nuevoTorneo.getTemporada())
                    : "Conflicto de temporada: El narrador ya trabaja en el torneo " + t.getNombre() + " durante la temporada " + t.getTemporada();
        }

        this.torneosAsignados.add(nuevoTorneo);
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Partido)
    protected void anadirPartido(Partido nuevoPartido) {
        assert nuevoPartido != null : "Partido nulo";

        // RESTRICCIÓN: El narrador debe estar contratado para el torneo del partido
        assert this.torneosAsignados.contains(nuevoPartido.getTorneo())
                : "El narrador no ha sido contratado para el torneo " + nuevoPartido.getTorneo().getNombre();

        // RESTRICCIÓN: Disponibilidad (No partidos a la misma hora)
        assert estaDisponible(nuevoPartido.getFecha(), nuevoPartido.getHora(), nuevoPartido.getTorneo().getDuracionPartidos())
                : "El narrador no está disponible en ese horario (coincide con otro partido)";

        this.partidosNarrados.add(nuevoPartido);
    }

    // Método auxiliar privado para comprobar disponibilidad
    private boolean estaDisponible(LocalDate fecha, LocalTime hora, int duracion) {
        final int TIEMPO_DESCANSO_MINUTOS = 30;

        // Calculamos fin del nuevo partido + descanso
        LocalTime finNuevo = hora.plusMinutes(duracion + TIEMPO_DESCANSO_MINUTOS);

        for (Partido p : partidosNarrados) {
            if (!p.getFecha().equals(fecha)) continue;

            LocalTime inicioExistente = p.getHora();
            LocalTime finExistente = inicioExistente.plusMinutes(p.getTorneo().getDuracionPartidos() + TIEMPO_DESCANSO_MINUTOS);

            // Lógica de solapamiento de intervalos
            if (hora.isBefore(finExistente) && inicioExistente.isBefore(finNuevo)) {
                return false; // Hay conflicto
            }
        }
        return true;
    }

    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public List<Torneo> getTorneosAsignados() {
        return new ArrayList<>(torneosAsignados);
    }
    
    public List<Partido> getPartidosNarrados() {
        return new ArrayList<>(partidosNarrados);
    }
}