package GestorTorneos;

interface IReglamento {
    int getMaxJugadoresPorEquipo();
}

interface IActa {
    void registrarResultado(String resultado);
}

interface ILogicaPuntuacion {
    int getPuntosPorGanar();
    int getPuntosPorEmpatar();
}

public interface AbstractFactoryTorneo {

    IReglamento crearReglamento();
    IActa crearActaEncuentro();
    ILogicaPuntuacion crearLogicaPuntuacion();
}
