package Abstractas;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import Enumerados.*;

public abstract class Narrador extends Persona {
    // Atributos
    private TipoDeporte tipoDeporte;

    // REQUISITO: Atributo "Torneos Asignados"
    private List<Torneo> torneosAsignados;

    // Mantenemos esto para controlar que no narre dos partidos a la vez
    private List<Partido> partidosNarrados;

    public Narrador(String nombre, String apellido1, String apellido2, Integer edad, String dni, TipoDeporte tipoDeporte) {
        super(nombre, apellido1, apellido2, edad, dni);

        assert tipoDeporte != null : "El tipo de deporte no puede ser nulo";

        this.tipoDeporte = tipoDeporte;
        this.torneosAsignados = new ArrayList<>();
        this.partidosNarrados = new ArrayList<>();
    }

    // ---------------------------------------------------------
    // GESTIÓN DE TORNEOS (Nuevo Requisito)
    // ---------------------------------------------------------
    // PROTECTED: Se llama desde la clase Torneo para mantener bidireccionalidad
    protected void asignarTorneo(Torneo nuevoTorneo) {
        // Validación básica
        assert nuevoTorneo != null : "El torneo no puede ser nulo";

        // RESTRICCIÓN: Solo puede narrar un deporte
        // (Verificamos que el torneo sea del deporte del narrador)
        assert this.tipoDeporte == nuevoTorneo.getTipoDeporte()
                : "El narrador es de " + this.tipoDeporte + " y no puede narrar en un torneo de " + nuevoTorneo.getTipoDeporte();

        // RESTRICCIÓN: Puede estar en varios torneos, NO en la misma temporada
        for (Torneo t : torneosAsignados) {
            assert !t.getTemporada().equals(nuevoTorneo.getTemporada())
                    : "Conflicto de temporada: El narrador ya trabaja en el torneo " + t.getNombre() + " durante la temporada " + t.getTemporada();
        }

        // Nota: No restringimos TipoCompeticion, cumpliendo: "Puede narrar distintas competiciones"

        this.torneosAsignados.add(nuevoTorneo);
    }

    // ---------------------------------------------------------
    // GESTIÓN DE PARTIDOS (Tu código existente + integración)
    // ---------------------------------------------------------
    protected void anadirPartido(Partido nuevoPartido) {
        assert nuevoPartido != null : "Partido nulo";

        // RESTRICCIÓN: Coherencia (Debe estar asignado al torneo del partido primero)
        assert this.torneosAsignados.contains(nuevoPartido.getTorneo())
                : "El narrador no ha sido contratado para el torneo " + nuevoPartido.getTorneo().getNombre();

        // RESTRICCIÓN: Disponibilidad (No partidos a la misma hora)
        assert estaDisponible(nuevoPartido.getFecha(), nuevoPartido.getHora(), nuevoPartido.getTorneo().getDuracionPartidos())
                : "El narrador no está disponible en ese horario (coincide con otro partido)";

        this.partidosNarrados.add(nuevoPartido);
    }

    // Método auxiliar privado para comprobar disponibilidad (Tu lógica correcta)
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

    // ---------------------------------------------------------
    // GETTERS
    // ---------------------------------------------------------
    public TipoDeporte getTipoDeporte() { return tipoDeporte; }

    // Devolvemos copias para proteger encapsulamiento
    public List<Torneo> getTorneosAsignados() { return new ArrayList<>(torneosAsignados); }
    public List<Partido> getPartidosNarrados() { return new ArrayList<>(partidosNarrados); }
}