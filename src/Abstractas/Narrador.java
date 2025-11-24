package Abstractas;

import java.util.ArrayList;
import java.util.List;

public abstract class Narrador extends Persona {
    protected String tipoDeporte;
    protected List<Torneo> torneosAsignados;

    public Narrador(String nombre, String apellido1, String apellido2, Integer edad, String tipoDeporte) {
        super(nombre, apellido1, apellido2, edad);
        this.tipoDeporte = tipoDeporte;
        this.torneosAsignados = new ArrayList<>();
        
        assert this.tipoDeporte != null : "El narrador debe tener un deporte";
    }

    public void asignarTorneo(Torneo nuevoTorneo) {
        // 1. Precondición básica
        assert nuevoTorneo != null : "El torneo no puede ser nulo";

        // 2. Precondición: Deporte correcto (si aplica en tu modelo)
        // assert nuevoTorneo.getTipoDeporte().equals(this.tipoDeporte) : "Deporte incorrecto";

        // 3. Precondición: Temporadas no solapadas
        boolean temporadaOcupada = false;
        String temporadaConflictiva = "";
        
        for (Torneo t : torneosAsignados) {
            if (t.getTemporada().equals(nuevoTorneo.getTemporada())) {
                temporadaOcupada = true;
                temporadaConflictiva = t.getTemporada();
                break;
            }
        }

        assert !temporadaOcupada 
            : "Precondición violada: El narrador ya trabaja en la temporada " + temporadaConflictiva;

        // Ejecución
        this.torneosAsignados.add(nuevoTorneo);
        
        // Post-condición / Invariante
        assert validarInvariante() : "Estado del narrador inconsistente tras asignar torneo";
    }
    
    protected boolean validarInvariante() {
        return this.torneosAsignados != null;
    }
}