package Abstractas;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import Enumerados.*;

public abstract class Narrador extends Persona {
    private TipoDeporte tipoDeporte;
    private List<Partido> partidosAsignados;

    public Narrador(String nombre, String apellido1, String apellido2, Integer edad, String dni, TipoDeporte tipoDeporte) {
        super(nombre, apellido1, apellido2, edad,dni);
        assert tipoDeporte != null : "El tipo de deporte no puede ser nulo";
        this.tipoDeporte = tipoDeporte;
        this.partidosAsignados = new ArrayList<>();
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Partido)
    protected void anadirPartido(Partido nuevoPartido) {
        // RESTRICCIÓN: El partido no puede ser nulo
        assert nuevoPartido != null : "Partido nulo";

        // RESTRICCIÓN: El narrador debe estar contratado para el torneo del partido
        assert nuevoPartido.getTorneo().getNarradores().contains(this)
        : "El narrador no está contratado para el torneo " + nuevoPartido.getTorneo().getNombre();

        // RESTRICCIÓN: Disponibilidad (No partidos a la misma hora)
        assert estaDisponible(nuevoPartido.getFecha(), nuevoPartido.getHora(), nuevoPartido.getTorneo().getDuracionPartidos())
        : "El narrador no está disponible en ese horario";

        // Si todo es correcto, se añade a la agenda
        this.partidosAsignados.add(nuevoPartido);
    }

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

    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public List<Partido> getPartidosAsignados() {
        return partidosAsignados;
    }
}