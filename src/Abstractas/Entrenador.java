package Abstractas;

import java.util.ArrayList;
import java.util.List;

import Enumeraciones.TipoDeporte;

public abstract class Entrenador extends Persona {
    protected TipoDeporte tipoDeporte; 
    protected List<Equipo> equiposAsignados; 

    public Entrenador(String nombre, String apellido1, String apellido2, Integer edad, TipoDeporte tipoDeporte) {
        super(nombre, apellido1, apellido2, edad);
        assert tipoDeporte != null : "El tipo de deporte no puede ser nulo";
        this.tipoDeporte = tipoDeporte;
        this.equiposAsignados = new ArrayList<>();
    }
    
    public void asignarEquipo(Equipo nuevoEquipo) {
        // 1. PRECONDICIÓN: El equipo no puede ser nulo
        assert nuevoEquipo != null : "El equipo a asignar no puede ser nulo";

        // 2. PRECONDICIÓN: El deporte debe coincidir
        assert nuevoEquipo.getTipoDeporte() == this.tipoDeporte
        : "Precondición violada: El entrenador de " + this.tipoDeporte + " no puede entrenar " + nuevoEquipo.getTipoDeporte();

        // 3. PRECONDICIÓN: No puede entrenar a varios equipos en el mismo torneo
        for (Equipo e : equiposAsignados) {
            assert !e.getTorneo().equals(nuevoEquipo.getTorneo())
            : "Precondición violada: El entrenador ya tiene un equipo en el torneo " + nuevoEquipo.getTorneo().getNombre();
        }
        
        // Tras asegurarnos que se cumplen las restricciones, añadimos el equipo
        this.equiposAsignados.add(nuevoEquipo);
    }

    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public List<Equipo> getEquiposAsignados() {
        return equiposAsignados;
    }
}