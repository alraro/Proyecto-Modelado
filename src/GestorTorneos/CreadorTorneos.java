package GestorTorneos;

public class CreadorTorneos {
    public Torneo crearNuevoTorneo(TipoDeporte deporte, String nombreTorneo, int temporada) {

        AbstractFactoryTorneo fabrica;

        switch (deporte) {
            case FUTBOL:
                fabrica = new FabricaFutbol();
                break;
            case TENIS:
                fabrica = new FabricaTenis();
                break;
            case GOLF:
                fabrica = new FabricaGolf();
                break;
            case PADEL:
                fabrica = new FabricaPadel();
                break;
            case RUGBY:
                fabrica = new FabricaRugby();
                break;
            case BALONCESTO:
                fabrica = new FabricaBaloncesto();
                break;
            case VOLLEYBALL:
                fabrica = new FabricaVolleyball();
                break;
            default:
                throw new IllegalArgumentException("Deporte no incluido en el torneo: " + deporte);
        }

        IReglamento reglamento = fabrica.crearReglamento();

        Torneo nuevoTorneo = new Torneo(
                nombreTorneo,
                deporte,
                16,
                reglamento.getMaxJugadoresPorEquipo(), // El método debe llamarse correctamente (getMaxIntegrantesPorEquipo)
                TipoTorneo.NACIONAL,
                temporada
        );

        return nuevoTorneo;
    }
}