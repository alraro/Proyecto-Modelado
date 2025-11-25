package Abstractas;

import java.util.ArrayList;
import java.util.List;
import Enumerados.TipoDeporte;

public abstract class Narrador extends Persona {
    private TipoDeporte tipoDeporte;
    private List<Torneo> torneosAsignados;

    public Narrador(String nombre, String apellido1, String apellido2, Integer edad, TipoDeporte tipoDeporte) {
        super(nombre, apellido1, apellido2, edad);
        assert tipoDeporte != null : "El tipo de deporte no puede ser nulo";
        this.tipoDeporte = tipoDeporte;
        this.torneosAsignados = new ArrayList<>();
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Torneo)
    void asignarTorneo(Torneo nuevoTorneo) {
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
    
    public TipoDeporte getTipoDeporte() {
        return tipoDeporte;
    }

    public List<Torneo> getTorneosAsignados() {
        return torneosAsignados;
    }
}