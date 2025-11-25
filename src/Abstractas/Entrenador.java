package Abstractas;

import java.util.ArrayList;
import java.util.List;
import Enumerados.TipoDeporte;

public abstract class Entrenador extends Persona {
    private TipoDeporte tipoDeporte;
    private List<Equipo> equiposAsignados;


    // REQUISITO INICIAL: "No puede tener un equipo con más miembros que el máximo"
    // Te faltaba este atributo para cumplir esa restricción
    private int maxJugadores;


    public Entrenador(String nombre, String apellido1, String apellido2, String dni, Integer edad, TipoDeporte tipoDeporte) {
        super(nombre, apellido1, apellido2, edad, dni);
        assert tipoDeporte != null : "El tipo de deporte no puede ser nulo";
        this.tipoDeporte = tipoDeporte;
        this.equiposAsignados = new ArrayList<>();
    }

    public void asignarEquipo(Equipo nuevoEquipo) {
        // RESTRICCIÓN: El equipo no puede ser nulo
        assert nuevoEquipo != null : "El equipo a asignar no puede ser nulo";

        // RESTRICCIÓN: El deporte debe coincidir
        assert nuevoEquipo.getTipoDeporte() == this.tipoDeporte
        : "El entrenador de " + this.tipoDeporte + " no puede entrenar " + nuevoEquipo.getTipoDeporte();

        // RESTRICCIÓN: No puede entrenar a varios equipos en el mismo torneo
        for (Equipo e : equiposAsignados) {
            for (Torneo t1 : e.getTorneos()) {
                for (Torneo t2 : nuevoEquipo.getTorneos()) {
                    assert !t1.equals(t2)
                    : "El entrenador ya entrena al equipo " + e.getNombre() + " en el torneo " + t1.getNombre();
                }
            }
        }

        // Tras asegurarnos que se cumplen las restricciones, añadimos el equipo
        this.equiposAsignados.add(nuevoEquipo);
    }

    public void liberarEquipo(Equipo equipo) {
        assert equipo != null : "No se puede liberar un equipo nulo";

        // Comprobamos si realmente lo tiene asignado
        if (this.equiposAsignados.contains(equipo)) {
            this.equiposAsignados.remove(equipo);
        }
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Torneo)
    protected void inscribirEnTorneo(Torneo nuevoTorneo) {
        assert nuevoTorneo != null : "No puedes inscribirte a un torneo nulo";

        // RESTRICCIÓN 1: No estar en dos torneos la misma temporada
        for (Torneo t : torneosParticipados) {
            assert !t.getTemporada().equals(nuevoTorneo.getTemporada())
                    : "El equipo ya juega otro torneo en la temporada " + t.getTemporada();
        }

        // RESTRICCIÓN 2 (NUEVA): Verificar conflicto del entrenador
        // Si ya tenemos entrenador, verificamos que él no tenga otro equipo en ESTE torneo nuevo
        if (this.entrenador != null) {
            for (Equipo otroEquipo : this.entrenador.getEquiposAsignados()) {
                // Saltamos la comprobación con nosotros mismos
                if (otroEquipo == this) continue;

                // Si el entrenador tiene otro equipo, chequeamos sus torneos
                assert !otroEquipo.getTorneos().contains(nuevoTorneo)
                        : "Conflicto: El entrenador " + entrenador.getNombre() + " ya dirige al equipo " + otroEquipo.getNombre() + " en este torneo.";
            }
        }

        this.torneosParticipados.add(nuevoTorneo);
    }

    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public List<Equipo> getEquiposAsignados() {
        return equiposAsignados;
    }
}