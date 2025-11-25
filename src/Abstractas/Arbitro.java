package Abstractas;

import Enumerados.*;
import java.util.ArrayList;
import java.util.List;

public abstract class Arbitro extends Persona {
    private TipoDeporte tipoDeporte;
    private TipoCompeticion competicion;
    private List<Categoria> categoriasPermitidas;
    private List<Partido> partidosAsignados;

    public Arbitro(String nombre, String ap1, String ap2, Integer edad, TipoDeporte tipoDeporte, List<Categoria> categorias, TipoCompeticion competicion) {
        super(nombre, ap1, ap2, edad);
        
        assert tipoDeporte != null : "El deporte es obligatorio";
        assert competicion != null : "El ámbito es obligatorio";
        assert categorias != null && !categorias.isEmpty() : "El árbitro debe tener al menos una categoría habilitada";

        this.tipoDeporte = tipoDeporte;
        this.competicion = competicion;
        this.categoriasPermitidas = new ArrayList<>(categorias); // Envolvemos en un ArrayList para que sea mutable
        this.partidosAsignados = new ArrayList<>();
    }

    public void añadirCategoria(Categoria nuevaCategoria) {
        // RESTRICCIÓN: La categoría no puede ser nula
        assert nuevaCategoria != null : "La categoría no puede ser nula";

        // RESTRICCIÓN: No se pueden añadir categorías repetidas
        assert !this.categoriasPermitidas.contains(nuevaCategoria)
        : "La categoría " + nuevaCategoria + " ya está añadida";

        this.categoriasPermitidas.add(nuevaCategoria);
    }

    // PROTECTED: Solo accesible por clases hijas y del mismo paquete (Partido)
    protected void añadirPartido(Partido nuevoPartido) {
        // RESTRICCIÓN: El partido no puede ser nulo
        assert nuevoPartido != null : "Partido nulo";

        // RESTRICCIÓN: Mismo Deporte
        assert nuevoPartido.getTipoDeporte() == this.tipoDeporte
            : "Un árbitro de " + this.tipoDeporte + " no puede arbitrar " + nuevoPartido.getTipoDeporte();

        // RESTRICCIÓN: El arbitro debe estar cualificado para la categoría del partido
        assert this.categoriasPermitidas.contains(nuevoPartido.getCategoria())
            : "El árbitro no está habilitado para la categoría " + nuevoPartido.getCategoria();

        // RESTRICCIÓN: Disponibilidad (No partidos a la misma hora)
        for (Partido p : partidosAsignados) {
            if (p.getFecha().equals(nuevoPartido.getFecha())) {
                assert !p.getHora().equals(nuevoPartido.getHora())
                : "El arbitro ya tiene un partido asignado el " + p.getFecha() + " a las " + p.getHora();
            }
        }

        // Si todo es correcto, se añade a la agenda
        this.partidosAsignados.add(nuevoPartido);
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