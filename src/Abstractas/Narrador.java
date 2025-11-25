package Abstractas;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import Enumerados.TipoDeporte;

public abstract class Narrador extends Persona {
    private TipoDeporte tipoDeporte;
    private List<Torneo> torneosAsignados;

    public Narrador(String nombre, String apellido1, String apellido2, Integer edad, String dni, TipoDeporte tipoDeporte) {
        super(nombre, apellido1, apellido2, edad,dni);
        assert tipoDeporte != null : "El tipo de deporte no puede ser nulo";
        this.tipoDeporte = tipoDeporte;
        this.torneosAsignados = new ArrayList<>();
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Torneo)
    protected void asignarTorneo(Torneo nuevoTorneo) {
        // RESTRICCIÓN: El torneo no puede ser nulo
        assert nuevoTorneo != null : "El torneo no puede ser nulo";

        // RESTRICCIÓN: No puede narrar dos torneos en la misma temporada    
        for (Torneo t : torneosAsignados) {
            assert !t.getTemporada().equals(nuevoTorneo.getTemporada())
            : "El narrador ya trabaja en la temporada " + t.getTemporada();
        }

        // Tras asegurarnos de que se cumplen las restricciones, añadimos el torneo
        this.torneosAsignados.add(nuevoTorneo);
    }
    /*
    // Método auxiliar privado para comprobar disponibilidad
    private boolean estaDisponible(LocalDate fecha, LocalTime hora, int duracion) {
        final int TIEMPO_DESCANSO_MINUTOS = 30; // Tiempo de descanso entre partidos para los narradores
        LocalTime horaFinNuevoPartido = hora.plusMinutes(duracion);
        LocalTime horaFinConDescanso = horaFinNuevoPartido.plusMinutes(TIEMPO_DESCANSO_MINUTOS);
        for (Partido p : partidosAsignados) {
            if (!p.getFecha().equals(fecha)) {
                continue; // Si es en otro día, no hay conflicto
            }

            // Comprobamos si hay solapamiento
            LocalTime horaInicioExistente = p.getHora();
            LocalTime horaFinExistente = horaInicioExistente.plusMinutes(p.getTorneo().getDuracionPartidos());
            // Verificamos si los intervalos de tiempo se solapan
            boolean solapan = !(horaFinConDescanso.isBefore(horaInicioExistente) || hora.isAfter(horaFinExistente.plusMinutes(TIEMPO_DESCANSO_MINUTOS)));
            if (solapan) {
                return false; // Hay conflicto
            }
        }
        return true; // No hay conflictos
    }

     */

    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public List<Torneo> getTorneosAsignados() {
        return torneosAsignados;
    }
}