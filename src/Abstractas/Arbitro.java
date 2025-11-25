package Abstractas;

import Enumerados.*;
import java.util.ArrayList;
import java.util.List;
import java.time.*;

public abstract class Arbitro extends Persona {
    private TipoDeporte tipoDeporte;
    private TipoCompeticion competicion;
    private List<Categoria> categoriasPermitidas;
    private List<Partido> partidosAsignados;

    public Arbitro(String nombre, String ap1, String ap2, Integer edad, String dni, TipoDeporte tipoDeporte, List<Categoria> categorias, TipoCompeticion competicion) {
        super(nombre, ap1, ap2, edad,dni);
        
        assert tipoDeporte != null : "El deporte es obligatorio";
        assert competicion != null : "El ámbito es obligatorio";
        assert categorias != null && !categorias.isEmpty() : "El árbitro debe tener al menos una categoría habilitada";

        this.tipoDeporte = tipoDeporte;
        this.competicion = competicion;
        this.categoriasPermitidas = new ArrayList<>(categorias); // Envolvemos en un ArrayList para que sea mutable
        this.partidosAsignados = new ArrayList<>();
    }

    public void anadirCategoria(Categoria nuevaCategoria) {
        // RESTRICCIÓN: La categoría no puede ser nula
        assert nuevaCategoria != null : "La categoría no puede ser nula";

        // RESTRICCIÓN: No se pueden añadir categorías repetidas
        assert !this.categoriasPermitidas.contains(nuevaCategoria)
        : "La categoría " + nuevaCategoria + " ya está añadida";

        this.categoriasPermitidas.add(nuevaCategoria);
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Partido)
    protected void anadirPartido(Partido nuevoPartido) {
        // RESTRICCIÓN: El partido no puede ser nulo
        assert nuevoPartido != null : "Partido nulo";

        // RESTRICCIÓN: Mismo Deporte
        assert nuevoPartido.getTipoDeporte() == this.tipoDeporte
            : "Un árbitro de " + this.tipoDeporte + " no puede arbitrar " + nuevoPartido.getTipoDeporte();

        // RESTRICCIÓN: El árbitro debe estar cualificado para la categoría del partido
        assert this.categoriasPermitidas.contains(nuevoPartido.getCategoria())
            : "El árbitro no está habilitado para la categoría " + nuevoPartido.getCategoria();

        // RESTRICCIÓN: Disponibilidad (No partidos a la misma hora)
        assert estaDisponible(nuevoPartido.getFecha(), nuevoPartido.getHora(), nuevoPartido.getTorneo().getDuracionPartidos())
                : "El árbitro no está disponible en ese horario";

        // Si todo es correcto, se añade a la agenda
        this.partidosAsignados.add(nuevoPartido);
    }


    // Método auxiliar privado para comprobar disponibilidad
    private boolean estaDisponible(LocalDate fecha, LocalTime hora, int duracion) {
        final int TIEMPO_DESCANSO_MINUTOS = 30; // Tiempo de descanso entre partidos para los árbitros
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

    public TipoCompeticion getCompeticion() {
        return competicion;
    }

    public List<Categoria> getCategoriasPermitidas() {
        return categoriasPermitidas;
    }

    public List<Partido> getPartidosAsignados() {
        return partidosAsignados;
    }
}