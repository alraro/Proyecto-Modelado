import Interfaces.FabricaDeporte;
import Deportes.Futbol.FabricaFutbol;
import Deportes.Baloncesto.FabricaBaloncesto;
import Deportes.Tenis.FabricaTenis;
import Deportes.Rugby.FabricaRugby;
import Abstractas.*;
import Enumerados.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
        try {
            System.out.println("=================================================");
            System.out.println("   INICIANDO SISTEMA DE GESTIÓN DE TORNEOS   ");
            System.out.println("=================================================");

            // 1. CONFIGURACIÓN DE LA FÁBRICA
            // Aquí decidimos que vamos a trabajar con FÚTBOL
            FabricaDeporte fabrica = FabricaFutbol.getInstance();

            // --- CREACIÓN DE ESTRUCTURAS ---
            System.out.println("\n[1] Creando Torneos y Entidades...");

            // Torneo Nacional (La Liga) - con duracionPartidos
            Torneo laLiga = fabrica.crearTorneo(
                "La Liga", Pais.ESPANA, "Madrid", "2024/2025",
                Categoria.SENIOR, TipoCompeticion.NACIONAL,
                90,  // duracionPartidos en minutos
                20 // maxEquipos
            );

            // Torneo Internacional (Champions League)
            Torneo champions = fabrica.crearTorneo(
                "Champions League", Pais.ALEMANIA, "Baviera", "2024/2025",
                Categoria.SENIOR, TipoCompeticion.INTERNACIONAL,
                90,  // duracionPartidos en minutos
                32 // maxEquipos
            );

            // Equipos (sin parámetros de titulares/suplentes, usan valores fijos)
            Equipo madrid = fabrica.crearEquipo("Real Madrid", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.ESPANA, "Madrid");
            Equipo barca = fabrica.crearEquipo("FC Barcelona", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.ESPANA, "Barcelona");
            Equipo bayern = fabrica.crearEquipo("Bayern Munich", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.ALEMANIA, "Baviera");

            // Personal - ahora con DNI
            Entrenador ancelotti = fabrica.crearEntrenador("Carlo", "Ancelotti", "Guida", 64, "12345678A");

            // Árbitro (Empieza en categorías inferiores) - ahora con DNI
            List<Categoria> catsArbitro = new ArrayList<>(List.of(Categoria.SENIOR)); // Modificable
            Arbitro mateu = fabrica.crearArbitro("Mateu", "Lahoz", "X", 45, "23456789B", catsArbitro, TipoCompeticion.NACIONAL);

            Narrador lama = fabrica.crearNarrador("Manolo", "Lama", "Y", 55, "34567890C");

            // Jugadores - ahora con DNI
            Jugador vinicius = fabrica.crearJugador("Vinicius", "Jr", "", 24, Pais.BRASIL, Categoria.SENIOR, "45678901D");
            Jugador lewandowski = fabrica.crearJugador("Robert", "Lewandowski", "", 35, Pais.PORTUGAL, Categoria.SENIOR, "56789012E");
            Jugador benzema = fabrica.crearJugador("Karim", "Benzema", "", 36, Pais.FRANCIA, Categoria.SENIOR, "67890123F");
            Jugador gavi = fabrica.crearJugador("Pablo", "Gavi", "Paez", 20, Pais.ESPANA, Categoria.SENIOR, "78901234G");

            System.out.println("--> Entidades creadas correctamente.");


            // --- FASE 2: GESTIÓN DE FICHAJES Y CONTRATACIONES ---
            System.out.println("\n[2] Realizando fichajes y contrataciones...");

            // Fichajes Club
            madrid.asignarEntrenador(ancelotti);
            madrid.ficharJugador(vinicius);
            madrid.ficharJugador(benzema);
            barca.ficharJugador(lewandowski);
            barca.ficharJugador(gavi);

            // Inscripciones en Torneos
            laLiga.inscribirEquipo(madrid);
            laLiga.inscribirEquipo(barca);
            
            champions.inscribirEquipo(madrid);
            champions.inscribirEquipo(barca);
            champions.inscribirEquipo(bayern);

            // Contratación de personal del torneo
            laLiga.contratarArbitro(mateu);
            laLiga.contratarNarrador(lama);

            System.out.println("--> Fichajes completados. Vinicius y Benzema juegan en el Madrid y el Madrid en La Liga.");


            // --- FASE 3: EL PARTIDO ---
            System.out.println("\n[3] Organizando El Clásico...");

            // Crear alineaciones
            Map<Jugador, TipoJugador> alineacionMadrid = new HashMap<>();
            alineacionMadrid.put(vinicius, TipoJugador.TITULAR);
            alineacionMadrid.put(benzema, TipoJugador.TITULAR);

            Map<Jugador, TipoJugador> alineacionBarca = new HashMap<>();
            alineacionBarca.put(lewandowski, TipoJugador.TITULAR);
            alineacionBarca.put(gavi, TipoJugador.SUPLENTE);

            Partido elClasico = fabrica.crearPartido(
                laLiga, 
                madrid, 
                barca, 
                "Santiago Bernabéu", 
                LocalDate.of(2025, 4, 20), 
                LocalTime.of(21, 0),
                alineacionMadrid,
                alineacionBarca
            );

            // Asignaciones al partido
            elClasico.asignarArbitro(mateu);
            elClasico.asignarNarrador(lama);

            System.out.println("--> Partido creado: Madrid vs Barça en el Bernabéu.");
            System.out.println("    Titulares Madrid: Vinicius, Benzema");
            System.out.println("    Titulares Barça: Lewandowski");
            System.out.println("    Suplentes Barça: Gavi");

            // Finalizar partido y mostrar clasificación
            elClasico.finalizarPartido("3-1");
            System.out.println("\n--- CLASIFICACIÓN LALIGA ---");
            laLiga.mostrarClasificacion();



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
                Equipo sevilla = fabrica.crearEquipo("Sevilla", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.ESPANA, "Sevilla");
                // Inscribimos al Sevilla en La Liga (donde ya entrena Ancelotti con el Madrid)
                laLiga.inscribirEquipo(sevilla);
                sevilla.asignarEntrenador(ancelotti);
            });

            // PRUEBA C: Árbitro Ocupado
            probarFallo("Árbitro Ocupado", () -> {
                // Intentamos crear otro partido a la MISMA HORA y asignarle a Mateu
                Map<Jugador, TipoJugador> alin1 = new HashMap<>();
                alin1.put(lewandowski, TipoJugador.TITULAR);
                Map<Jugador, TipoJugador> alin2 = new HashMap<>();
                alin2.put(vinicius, TipoJugador.TITULAR);

                Partido otroPartido = fabrica.crearPartido(
                    laLiga, barca, madrid, "Camp Nou", 
                    LocalDate.of(2025, 4, 20), LocalTime.of(21, 15), // Hora cercana
                    alin1, alin2
                );
                // Mateu ya pita elClasico a esa hora
                otroPartido.asignarArbitro(mateu);
            });
            
            // PRUEBA D: Jugador no inscrito en el equipo intenta jugar
            probarFallo("Alineación Indebida", () -> {
                Jugador mbappe = fabrica.crearJugador("Kylian", "Mbappe", "", 25, Pais.FRANCIA, Categoria.SENIOR, "89012345H");
                // Mbappe NO ha fichado por el Madrid aún
                Map<Jugador, TipoJugador> alinMadrid2 = new HashMap<>();
                alinMadrid2.put(mbappe, TipoJugador.TITULAR);
                Map<Jugador, TipoJugador> alinBarca2 = new HashMap<>();
                alinBarca2.put(lewandowski, TipoJugador.TITULAR);

                fabrica.crearPartido(
                    laLiga, madrid, barca, "Bernabéu",
                    LocalDate.of(2025, 4, 21), LocalTime.of(20, 0),
                    alinMadrid2, alinBarca2
                );
            });

            // PRUEBA E: Jugador de un equipo jugando por otro
            probarFallo("Jugador Equipo Incorrecto", () -> {
                Map<Jugador, TipoJugador> alinMadrid3 = new HashMap<>();
                alinMadrid3.put(lewandowski, TipoJugador.TITULAR); // Lewandowski juega en el Barça, no en el Madrid
                Map<Jugador, TipoJugador> alinBarca3 = new HashMap<>();
                alinBarca3.put(gavi, TipoJugador.TITULAR);

                fabrica.crearPartido(
                    laLiga, madrid, barca, "Bernabéu",
                    LocalDate.of(2025, 4, 22), LocalTime.of(20, 0),
                    alinMadrid3, alinBarca3
                );
            });

            // --- FASE 5: PRUEBAS CON OTROS DEPORTES ---
            System.out.println("\n[5] PROBANDO SISTEMA CON OTROS DEPORTES");
            System.out.println("====================================================");

            // ===== BALONCESTO =====
            System.out.println("\n--- BALONCESTO (NBA) ---");
            FabricaDeporte fabricaBasket = FabricaBaloncesto.getInstance();

            Torneo nba = fabricaBasket.crearTorneo(
                "NBA", Pais.EEUU, "California", "2024/2025",
                Categoria.SENIOR, TipoCompeticion.NACIONAL,
                48,  // duracionPartidos en minutos
                30 // maxEquipos
            );

            Equipo lakers = fabricaBasket.crearEquipo("LA Lakers", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.EEUU, "California");
            Equipo celtics = fabricaBasket.crearEquipo("Boston Celtics", Categoria.SENIOR, TipoCompeticion.NACIONAL, Pais.EEUU, "Massachusetts");

            Entrenador darvin = fabricaBasket.crearEntrenador("Darvin", "Ham", "", 50, "NBA001");
            Jugador lebron = fabricaBasket.crearJugador("LeBron", "James", "", 39, Pais.EEUU, Categoria.SENIOR, "NBA002");
            Jugador davis = fabricaBasket.crearJugador("Anthony", "Davis", "", 30, Pais.EEUU, Categoria.SENIOR, "NBA003");
            Jugador tatum = fabricaBasket.crearJugador("Jayson", "Tatum", "", 26, Pais.EEUU, Categoria.SENIOR, "NBA004");
            Jugador brown = fabricaBasket.crearJugador("Jaylen", "Brown", "", 27, Pais.EEUU, Categoria.SENIOR, "NBA005");

            lakers.asignarEntrenador(darvin);
            lakers.ficharJugador(lebron);
            lakers.ficharJugador(davis);
            celtics.ficharJugador(tatum);
            celtics.ficharJugador(brown);

            nba.inscribirEquipo(lakers);
            nba.inscribirEquipo(celtics);

            Map<Jugador, TipoJugador> alinLakers = new HashMap<>();
            alinLakers.put(lebron, TipoJugador.TITULAR);
            alinLakers.put(davis, TipoJugador.TITULAR);

            Map<Jugador, TipoJugador> alinCeltics = new HashMap<>();
            alinCeltics.put(tatum, TipoJugador.TITULAR);
            alinCeltics.put(brown, TipoJugador.SUPLENTE);

            Partido partidoNBA = fabricaBasket.crearPartido(
                nba, lakers, celtics, "Crypto.com Arena",
                LocalDate.of(2025, 5, 10), LocalTime.of(19, 30),
                alinLakers, alinCeltics
            );
            partidoNBA.finalizarPartido("120-118");

            System.out.println("Partido NBA creado: Lakers vs Celtics");
            System.out.println("   Duración: 48 minutos | Titulares Lakers: LeBron, Davis");
            System.out.println("\n--- CLASIFICACIÓN NBA ---");
            nba.mostrarClasificacion();

            // ===== TENIS =====
            System.out.println("\n--- TENIS (Copa Davis) ---");
            FabricaDeporte fabricaTenis = FabricaTenis.getInstance();

            Torneo copaDavis = fabricaTenis.crearTorneo(
                "Copa Davis", Pais.ESPANA, "Madrid", "2024",
                Categoria.SENIOR, TipoCompeticion.INTERNACIONAL,
                180,  // duracionPartidos estimada en minutos
                16
            );

            Equipo equipoEspana = fabricaTenis.crearEquipo("España", Categoria.SENIOR, TipoCompeticion.INTERNACIONAL, Pais.ESPANA, "N/A");
            Equipo equipoFrancia = fabricaTenis.crearEquipo("Francia", Categoria.SENIOR, TipoCompeticion.INTERNACIONAL, Pais.FRANCIA, "N/A");

            Jugador alcaraz = fabricaTenis.crearJugador("Carlos", "Alcaraz", "", 21, Pais.ESPANA, Categoria.SENIOR, "TEN001");
            Jugador nadal = fabricaTenis.crearJugador("Rafael", "Nadal", "", 38, Pais.ESPANA, Categoria.SENIOR, "TEN002");
            Jugador tsonga = fabricaTenis.crearJugador("Jo-Wilfried", "Tsonga", "", 39, Pais.FRANCIA, Categoria.SENIOR, "TEN003");

            equipoEspana.ficharJugador(alcaraz);
            equipoEspana.ficharJugador(nadal);
            equipoFrancia.ficharJugador(tsonga);

            copaDavis.inscribirEquipo(equipoEspana);
            copaDavis.inscribirEquipo(equipoFrancia);

            Map<Jugador, TipoJugador> alinEspana = new HashMap<>();
            alinEspana.put(alcaraz, TipoJugador.TITULAR);
            alinEspana.put(nadal, TipoJugador.SUPLENTE);

            Map<Jugador, TipoJugador> alinFrancia = new HashMap<>();
            alinFrancia.put(tsonga, TipoJugador.TITULAR);

            Partido partidoTenis = fabricaTenis.crearPartido(
                copaDavis, equipoEspana, equipoFrancia, "Madrid Arena",
                LocalDate.of(2025, 6, 15), LocalTime.of(16, 0),
                alinEspana, alinFrancia
            );
            partidoTenis.finalizarPartido("2-1");

            System.out.println("Partido Copa Davis creado: España vs Francia");
            System.out.println("   Titulares España: Alcaraz | Suplentes: Nadal");
            System.out.println("\n--- CLASIFICACIÓN COPA DAVIS ---");
            copaDavis.mostrarClasificacion();

            // ===== RUGBY =====
            System.out.println("\n--- RUGBY (Six Nations) ---");
            FabricaDeporte fabricaRugby = FabricaRugby.getInstance();

            Torneo sixNations = fabricaRugby.crearTorneo(
                "Six Nations", Pais.REINO_UNIDO, "N/A", "2025",
                Categoria.SENIOR, TipoCompeticion.INTERNACIONAL,
                80,  // duracionPartidos en minutos
                6
            );

            Equipo inglaterra = fabricaRugby.crearEquipo("Inglaterra", Categoria.SENIOR, TipoCompeticion.INTERNACIONAL, Pais.REINO_UNIDO, "N/A");
            Equipo francia = fabricaRugby.crearEquipo("Francia Rugby", Categoria.SENIOR, TipoCompeticion.INTERNACIONAL, Pais.FRANCIA, "N/A");

            Jugador owen = fabricaRugby.crearJugador("Owen", "Farrell", "", 32, Pais.REINO_UNIDO, Categoria.SENIOR, "RUG001");
            Jugador maro = fabricaRugby.crearJugador("Maro", "Itoje", "", 29, Pais.REINO_UNIDO, Categoria.SENIOR, "RUG002");
            Jugador dupont = fabricaRugby.crearJugador("Antoine", "Dupont", "", 27, Pais.FRANCIA, Categoria.SENIOR, "RUG003");

            inglaterra.ficharJugador(owen);
            inglaterra.ficharJugador(maro);
            francia.ficharJugador(dupont);

            sixNations.inscribirEquipo(inglaterra);
            sixNations.inscribirEquipo(francia);

            Map<Jugador, TipoJugador> alinInglaterra = new HashMap<>();
            alinInglaterra.put(owen, TipoJugador.TITULAR);
            alinInglaterra.put(maro, TipoJugador.TITULAR);

            Map<Jugador, TipoJugador> alinFranciaRugby = new HashMap<>();
            alinFranciaRugby.put(dupont, TipoJugador.TITULAR);

            Partido partidoRugby = fabricaRugby.crearPartido(
                sixNations, inglaterra, francia, "Twickenham",
                LocalDate.of(2025, 3, 8), LocalTime.of(15, 0),
                alinInglaterra, alinFranciaRugby
            );
            partidoRugby.finalizarPartido("24-17");

            System.out.println("Partido Six Nations creado: Inglaterra vs Francia");
            System.out.println("   Duración: 80 minutos | Estadio: Twickenham");
            System.out.println("\n--- CLASIFICACIÓN SIX NATIONS ---");
            sixNations.mostrarClasificacion();

            // --- PRUEBAS ADICIONALES MULTI-DEPORTE ---
            System.out.println("\n[6] PRUEBAS ADICIONALES CON MÚLTIPLES DEPORTES");
            System.out.println("----------------------------------------------------");

            // PRUEBA F: Jugador intentando jugar en deporte diferente
            probarFallo("Jugador Deporte Incorrecto", () -> {
                // Intentamos fichar a LeBron (baloncesto) en el Madrid (fútbol)
                madrid.ficharJugador(lebron);
            });

            // PRUEBA G: Selección con jugador de país diferente (Tenis)
            probarFallo("Selección Internacional - País Incorrecto", () -> {
                // Intentamos meter a Tsonga (francés) en la selección española
                equipoEspana.ficharJugador(tsonga);
            });

            // PRUEBA H: Torneo con límites de plantilla (Baloncesto)
            probarFallo("Límite de Plantilla Baloncesto", () -> {
                // Intentamos meter más jugadores de los permitidos (5 titulares + 7 suplentes = 12 max)
                for (int i = 0; i < 15; i++) {
                    Jugador j = fabricaBasket.crearJugador("Player", "Test" + i, "", 25, Pais.EEUU, Categoria.SENIOR, "TEST" + i);
                    lakers.ficharJugador(j);
                }
            });

            System.out.println("\n=================================================");
            System.out.println("   ¡TODAS LAS PRUEBAS COMPLETADAS CON ÉXITO!   ");
            System.out.println("   Deportes probados: FÚTBOL, BALONCESTO, TENIS, RUGBY");
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
            System.out.println(" FALLO (El código inseguro se ejecutó sin problemas)");
        } catch (AssertionError e) {
            // Si llegamos aquí, es bueno: el sistema de seguridad funcionó
            System.out.println(" ÉXITO (El sistema detectó el error: " + e.getMessage() + ")");
        } catch (Exception e) {
            System.out.println(" ERROR INESPERADO: " + e.getClass().getSimpleName());
        }
    }
}
