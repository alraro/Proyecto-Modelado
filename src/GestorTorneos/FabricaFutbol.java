package GestorTorneos;

public class ReglamentoFutbol implements IReglamento {
    public int getMaxIntegrantesPorEquipo() {
        return 11;
    }

    public class ActaFutbol implements IActa {
        @Override
        public void registrarResultado(String resultado) {
            // Lógica de registro para fútbol (goles: 2-1)
        }
        // Aquí iría la implementación de otros métodos de IActa
    }

// Clase FabricaFutbol
public class FabricaFutbol implements AbstractFactoryTorneo {

    @Override
    public IReglamento crearReglamento() {
        return new ReglamentoFutbol();
    }

    @Override
    public IActa crearActaEncuentro() {
        return new ActaFutbol();
    }

    @Override
    public ILogicaPuntuacion crearLogicaPuntuacion() {
        return new LogicaPuntuacionFutbol();
    }
}
