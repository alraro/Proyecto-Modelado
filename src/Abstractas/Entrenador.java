package Abstractas;

import java.util.ArrayList;
import java.util.List;
import Enumerados.TipoDeporte;

public abstract class Entrenador extends Persona {
    private TipoDeporte tipoDeporte;
    private List<Equipo> equiposAsignados;


    public Entrenador(String nombre, String apellido1, String apellido2, String dni, Integer edad, TipoDeporte tipoDeporte) {
        super(nombre, apellido1, apellido2, edad, dni);
        assert tipoDeporte != null : "El tipo de deporte no puede ser nulo";
        this.tipoDeporte = tipoDeporte;
        this.equiposAsignados = new ArrayList<>();
    }

    public void asignarEquipo(Equipo nuevoEquipo) {
        // RESTRICCIÓN: El equipo no puede ser nulo
        assert nuevoEquipo != null : "El equipo a asignar no puede ser nulo";

        // RESTRICCIÓN: No puede estar en dos deportes diferentes
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

    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public List<Equipo> getEquiposAsignados() {
        return equiposAsignados;
    }
}