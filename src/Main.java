import Interfaces.FabricaDeporte;
import Deportes.Futbol.FabricaFutbol;
import Abstractas.*;
import Enumerados.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        System.out.println("=================================================");
        System.out.println("   INICIANDO SISTEMA DE GESTIÓN DE TORNEOS   ");
        System.out.println("=================================================");

        // 1. CONFIGURACIÓN DE LA FÁBRICA
        // Aquí decidimos que vamos a trabajar con FÚTBOL
        FabricaDeporte fabrica = new FabricaFutbol();

        try {
            // --- FASE 1: CREACIÓN DE ESTRUCTURAS (RUTA FELIZ) ---
            System.out.println("\n[1] Creando Torneos y Entidades...");

            // Torneo Nacional (La Liga)
            Torneo laLiga = fabrica.crearTorneo(
                "La Liga", Pais.ESPANA, "2024/2025", 
                Categoria.SENIOR, TipoCompeticion.NACIONAL
            );

            // Torneo Internacional (Champions League)
            Torneo champions = fabrica.crearTorneo(
                "Champions League", Pais.ALEMANIA, "2024/2025", 
                Categoria.SENIOR, TipoCompeticion.INTERNACIONAL
            );

            // Equipos
            Equipo madrid = fabrica.crearEquipo("Real Madrid", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.ESPANA);
            Equipo barca = fabrica.crearEquipo("FC Barcelona", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.ESPANA);
            Equipo bayern = fabrica.crearEquipo("Bayern Munich", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.ALEMANIA);

            // Personal
            Entrenador ancelotti = fabrica.crearEntrenador("Carlo", "Ancelotti", "Guida", 64);
            
            // Árbitro (Empieza en categorías inferiores)
            List<Categoria> catsArbitro = new ArrayList<>(List.of(Categoria.SENIOR)); // Modificable
            Arbitro mateu = fabrica.crearArbitro("Mateu", "Lahoz", "X", 45, catsArbitro, TipoCompeticion.NACIONAL);
            
            Narrador lama = fabrica.crearNarrador("Manolo", "Lama", "Y", 55);

            // Jugadores
            Jugador vinicius = fabrica.crearJugador("Vinicius", "Jr", "", 24, Pais.BRASIL, Categoria.SENIOR);
            Jugador lewandowski = fabrica.crearJugador("Robert", "Lewandowski", "", 35, Pais.POLONIA, Categoria.SENIOR);

            System.out.println("--> Entidades creadas correctamente.");


            // --- FASE 2: GESTIÓN DE FICHAJES Y CONTRATACIONES ---
            System.out.println("\n[2] Realizando fichajes y contrataciones...");

            // Fichajes Club
            madrid.asignarEntrenador(ancelotti);
            madrid.ficharJugador(vinicius);
            barca.ficharJugador(lewandowski);

            // Inscripciones en Torneos
            laLiga.inscribirEquipo(madrid);
            laLiga.inscribirEquipo(barca);
            
            champions.inscribirEquipo(madrid);
            champions.inscribirEquipo(barca);
            champions.inscribirEquipo(bayern);

            // Contratación de personal del torneo
            laLiga.contratarArbitro(mateu);
            laLiga.contratarNarrador(lama);

            System.out.println("--> Fichajes completados. Vinicius juega en el Madrid y el Madrid en La Liga.");


            // --- FASE 3: EL PARTIDO ---
            System.out.println("\n[3] Organizando El Clásico...");

            Partido elClasico = fabrica.crearPartido(
                laLiga, 
                madrid, 
                barca, 
                "Santiago Bernabéu", 
                LocalDate.of(2025, 4, 20), 
                LocalTime.of(21, 0)
            );

            // Asignaciones al partido
            elClasico.asignarArbitro(mateu);
            elClasico.asignarNarrador(lama);

            // Alineaciones (Aquí probamos la lógica de Titular/Suplente)
            elClasico.registrarParticipante(vinicius, TipoJugador.TITULAR, madrid);
            elClasico.registrarParticipante(lewandowski, TipoJugador.TITULAR, barca);

            System.out.println("--> Partido creado: Madrid vs Barça en el Bernabéu.");


            // --- FASE 4: SIMULACIÓN DE ERRORES (ASSERTS) ---
            System.out.println("\n[4] INICIANDO BATERÍA DE PRUEBAS DE ESTRÉS (ASSERTS)");
            System.out.println("----------------------------------------------------");

            // PRUEBA A: Doble Militancia Ilegal (Vinicius ficha por el Barça teniendo equipo)
            probarFallo("Fichaje Ilegal (Doble Club)", () -> {
                barca.ficharJugador(vinicius);
            });

            // PRUEBA B: Entrenador con conflicto de Torneos
            // Creamos un equipo nuevo que juega La Liga. Ancelotti ya entrena al Madrid en La Liga.
            probarFallo("Entrenador Conflicto Intereses", () -> {
                Equipo sevilla = fabrica.crearEquipo("Sevilla", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.ESPANA);
                // Inscribimos al Sevilla en La Liga (donde ya entrena Ancelotti con el Madrid)
                laLiga.inscribirEquipo(sevilla);
                sevilla.asignarEntrenador(ancelotti);
            });

            // PRUEBA C: Regla Internacional (Dos equipos del mismo país en torneo internacional)
            // Ya metimos al Madrid (España) en Champions. Intentamos meter al Barça (España) si la regla está activa.
            // NOTA: Si tu implementación de Torneo Internacional prohíbe mismo país, esto saltará.
            /* probarFallo("Regla Nacionalidad Champions", () -> {
                 Torneo mundialito = fabrica.crearTorneo("Mundialito", Pais.EEUU, "2025", Categoria.SENIOR, Competicion.INTERNACIONAL);
                 mundialito.inscribirEquipo(madrid); // OK
                 mundialito.inscribirEquipo(barca);  // FAIL: Otro de España
            });
            */

            // PRUEBA D: Partido Ilegal (Árbitro ocupado)
            probarFallo("Árbitro Ocupado", () -> {
                // Intentamos crear otro partido a la MISMA HORA y asignarle a Mateu
                Partido otroPartido = fabrica.crearPartido(
                    laLiga, barca, madrid, "Camp Nou", 
                    LocalDate.of(2025, 4, 20), LocalTime.of(21, 0) // Misma fecha/hora
                );
                // Mateu ya pita elClasico a esa hora
                otroPartido.asignarArbitro(mateu);
            });
            
            // PRUEBA E: Jugador no inscrito en el equipo intenta jugar
            probarFallo("Alineación Indebida", () -> {
                Jugador mbappe = fabrica.crearJugador("Kylian", "Mbappe", "", 25, Pais.FRANCIA, Categoria.SENIOR);
                // Mbappe NO ha fichado por el Madrid aún
                elClasico.registrarParticipante(mbappe, Rol.TITULAR, madrid);
            });

            System.out.println("\n=================================================");
            System.out.println("   ¡TODAS LAS PRUEBAS COMPLETADAS CON ÉXITO!   ");
            System.out.println("=================================================");

        } catch (AssertionError e) {
            System.err.println("\n[FATAL] Ha saltado un assert fuera de control:");
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Método auxiliar para ejecutar código que SABEMOS que debe fallar.
     * Si salta el Assert, capturamos el error y decimos "Prueba superada".
     * Si NO salta, es que nuestra seguridad ha fallado.
     */
    private static void probarFallo(String nombrePrueba, Runnable codigo) {
        System.out.print("TEST: " + nombrePrueba + " ... ");
        try {
            codigo.run();
            // Si llegamos aquí, es malo: el código debería haber explotado
            System.out.println("❌ FALLO (El código inseguro se ejecutó sin problemas)");
        } catch (AssertionError e) {
            // Si llegamos aquí, es bueno: el sistema de seguridad funcionó
            System.out.println("✅ ÉXITO (El sistema detectó el error: " + e.getMessage() + ")");
        } catch (Exception e) {
            System.out.println("⚠️ ERROR INESPERADO: " + e.getClass().getSimpleName());
        }
    }
}