package Abstractas;

import java.util.ArrayList;
import java.util.List;
import Enumerados.TipoDeporte;

public abstract class Narrador extends Persona {
    protected TipoDeporte tipoDeporte;
    protected List<Torneo> torneosAsignados;

    public Narrador(String nombre, String apellido1, String apellido2, Integer edad, TipoDeporte tipoDeporte) {
        super(nombre, apellido1, apellido2, edad);
        assert tipoDeporte != null : "El tipo de deporte no puede ser nulo";
        this.tipoDeporte = tipoDeporte;
        this.torneosAsignados = new ArrayList<>();
    }

    public void asignarTorneo(Torneo nuevoTorneo) {
        // RESTRICCIÓN: El torneo no puede ser nulo
        assert nuevoTorneo != null : "El torneo no puede ser nulo";

        // RESTRICCIÓN: El deporte debe coincidir
        assert nuevoTorneo.getTipoDeporte() == this.tipoDeporte
        : "El narrador de " + this.tipoDeporte + " no puede narrar " + nuevoTorneo.getTipoDeporte();

        // RESTRICCIÓN: Temporadas no solapadas    
        for (Torneo t : torneosAsignados) {
            assert !t.getTemporada().equals(nuevoTorneo.getTemporada())
            : "El narrador ya trabaja en la temporada " + t.getTemporada();
        }

        // Tras asegurarnos que se cumplen las restricciones, añadimos el torneo
        this.torneosAsignados.add(nuevoTorneo);
    }
    
    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public List<Torneo> getTorneosAsignados() {
        return torneosAsignados;
    }
}