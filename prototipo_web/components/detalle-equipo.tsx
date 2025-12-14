"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"

interface Jugador {
  nombre: string
  dni: string
  posicion: "Titular" | "Suplente"
  contratoInicio: string
  contratoFin: string
}

interface Team {
  id: number
  nombre: string
  categoria: string
  torneo: string
  deporte: string
  jugadores: Jugador[]
}

export function DetalleEquipo() {
  const equipos: Team[] = [
    // Baloncesto - Liga ACB (8 equipos, 12-15 jugadores, 5 titulares)
    {
      id: 1,
      nombre: "Real Madrid Basket",
      categoria: "Senior",
      torneo: "Liga ACB 2024",
      deporte: "Baloncesto",
      jugadores: [
        {
          nombre: "Sergio Llull",
          dni: "12345678A",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Rudy Fernández",
          dni: "23456789B",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Walter Tavares",
          dni: "34567890C",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Alberto Abalde",
          dni: "45678901D",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Guerschon Yabusele",
          dni: "56789012E",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Facundo Campazzo",
          dni: "67890123F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Carlos Alocén",
          dni: "78901234G",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Eli Ndiaye",
          dni: "89012345H",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Dzanan Musa",
          dni: "90123456I",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Vincent Poirier",
          dni: "01234567J",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Mario Hezonja",
          dni: "11223344K",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Sergio Rodríguez",
          dni: "22334455L",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2024",
        },
      ],
    },
    {
      id: 2,
      nombre: "FC Barcelona Basket",
      categoria: "Senior",
      torneo: "Liga ACB 2024",
      deporte: "Baloncesto",
      jugadores: [
        {
          nombre: "Nikola Mirotic",
          dni: "11223344A",
          posicion: "Titular",
          contratoInicio: "01/08/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Cory Higgins",
          dni: "22334455B",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Jan Vesely",
          dni: "33445566C",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Àlex Abrines",
          dni: "44556677D",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Jabari Parker",
          dni: "55667788E",
          posicion: "Titular",
          contratoInicio: "01/08/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Rokas Jokubaitis",
          dni: "66778899F",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Oscar da Silva",
          dni: "77889900G",
          posicion: "Suplente",
          contratoInicio: "01/08/2023",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Willy Hernangómez",
          dni: "88990011H",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Dante Exum",
          dni: "99001122I",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Joel Parra",
          dni: "00112233J",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
      ],
    },
    {
      id: 3,
      nombre: "Valencia Basket",
      categoria: "Senior",
      torneo: "Liga ACB 2024",
      deporte: "Baloncesto",
      jugadores: [
        {
          nombre: "Chris Jones",
          dni: "10203040A",
          posicion: "Titular",
          contratoInicio: "01/08/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Jasiel Rivero",
          dni: "20304050B",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Damien Inglis",
          dni: "30405060C",
          posicion: "Titular",
          contratoInicio: "01/08/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Xabi López-Arostegui",
          dni: "40506070D",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Josep Puerto",
          dni: "50607080E",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Jared Harper",
          dni: "60708090F",
          posicion: "Suplente",
          contratoInicio: "01/08/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Sam Van Rossom",
          dni: "70809000G",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Bojan Dubljevic",
          dni: "80900010H",
          posicion: "Suplente",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Víctor Claver",
          dni: "90001020I",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Jarrod Jones",
          dni: "00102030J",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Louis Labeyrie",
          dni: "11213140K",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Jaime Pradilla",
          dni: "22324250L",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
      ],
    },
    {
      id: 4,
      nombre: "Baskonia",
      categoria: "Senior",
      torneo: "Liga ACB 2024",
      deporte: "Baloncesto",
      jugadores: [
        {
          nombre: "Markus Howard",
          dni: "98765432A",
          posicion: "Titular",
          contratoInicio: "01/08/2023",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Chima Moneke",
          dni: "87654321B",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Darius Thompson",
          dni: "76543210C",
          posicion: "Titular",
          contratoInicio: "01/08/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Tadas Sedekerskis",
          dni: "65432109D",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Matt Costello",
          dni: "54321098E",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Vanja Marinkovic",
          dni: "43210987F",
          posicion: "Suplente",
          contratoInicio: "01/08/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Nikos Rogkavopoulos",
          dni: "32109876G",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Khalifa Diop",
          dni: "21098765H",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Luwawu-Cabarrot",
          dni: "10987654I",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Donta Hall",
          dni: "09876543J",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Khalil Iverson",
          dni: "98765432K",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Pablo Marín",
          dni: "87654321L",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
      ],
    },
    {
      id: 5,
      nombre: "Unicaja Málaga",
      categoria: "Senior",
      torneo: "Liga ACB 2024",
      deporte: "Baloncesto",
      jugadores: [
        {
          nombre: "Alberto Díaz",
          dni: "12121212A",
          posicion: "Titular",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Tyler Kalinoski",
          dni: "23232323B",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Dylan Osetkowski",
          dni: "34343434C",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Kendrick Perry",
          dni: "45454545D",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Tyson Carter",
          dni: "56565656E",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Deon Thompson",
          dni: "67676767F",
          posicion: "Suplente",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Augusto Lima",
          dni: "78787878G",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Nihad Djedovic",
          dni: "89898989H",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Kameron Taylor",
          dni: "90909090I",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Yankuba Sima",
          dni: "01010101J",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "David Kravish",
          dni: "12123434K",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2024",
        },
      ],
    },
    {
      id: 6,
      nombre: "Rincón Basket",
      categoria: "Senior",
      torneo: "Liga ACB 2024",
      deporte: "Baloncesto",
      jugadores: [
        {
          nombre: "Pablo Ramos",
          dni: "11111111A",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Juancho García",
          dni: "22222222B",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Mario Fernández",
          dni: "33333333C",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Luis Martínez",
          dni: "44444444D",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Carlos Sánchez",
          dni: "55555555E",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Antonio López",
          dni: "66666666F",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "José Rodríguez",
          dni: "77777777G",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Miguel Pérez",
          dni: "88888888H",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "David González",
          dni: "99999999I",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Javier Jiménez",
          dni: "00000000J",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Roberto Muñoz",
          dni: "12341234K",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Fernando Ruiz",
          dni: "23452345L",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
      ],
    },
    {
      id: 7,
      nombre: "Gran Canaria",
      categoria: "Senior",
      torneo: "Liga ACB 2024",
      deporte: "Baloncesto",
      jugadores: [
        {
          nombre: "AJ Slaughter",
          dni: "11112222A",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Shurna Mike",
          dni: "22223333B",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "John Jenkins",
          dni: "33334444C",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Nicolas Brussino",
          dni: "44445555D",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Khalifa Diop",
          dni: "55556666E",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Andrew Albicy",
          dni: "66667777F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Stan Okoye",
          dni: "77778888G",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Javi López",
          dni: "88889999H",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Enoch Agyei",
          dni: "99990000I",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Enzo Ruiz",
          dni: "00001111J",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Aday Mara",
          dni: "11112222K",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2024",
        },
      ],
    },
    {
      id: 8,
      nombre: "Manresa",
      categoria: "Senior",
      torneo: "Liga ACB 2024",
      deporte: "Baloncesto",
      jugadores: [
        {
          nombre: "Chima Moneke",
          dni: "22221111A",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Jordan Davis",
          dni: "33332222B",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Luke Maye",
          dni: "44443333C",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Dani Pérez",
          dni: "55554444D",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Sylvain Francisco",
          dni: "66665555E",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Guillem Jou",
          dni: "77776666F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Retin Obasohan",
          dni: "88887777G",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Jerrick Harding",
          dni: "99998888H",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Brancou Badio",
          dni: "00009999I",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Francisco Alonso",
          dni: "11110000J",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Joe Thomasson",
          dni: "22221111K",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Ismael Bako",
          dni: "33332222L",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
      ],
    },

    // Fútbol - Copa del Rey (16 equipos, 18 jugadores, 11 titulares + 7 suplentes)
    {
      id: 9,
      nombre: "Real Madrid CF",
      categoria: "Senior",
      torneo: "Copa del Rey Fútbol",
      deporte: "Fútbol",
      jugadores: [
        {
          nombre: "Thibaut Courtois",
          dni: "11111111F",
          posicion: "Titular",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Dani Carvajal",
          dni: "22222222F",
          posicion: "Titular",
          contratoInicio: "01/07/2013",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Antonio Rüdiger",
          dni: "33333333F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "David Alaba",
          dni: "44444444F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Ferland Mendy",
          dni: "55555555F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Eduardo Camavinga",
          dni: "66666666F",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Federico Valverde",
          dni: "77777777F",
          posicion: "Titular",
          contratoInicio: "01/07/2016",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Jude Bellingham",
          dni: "88888888F",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2029",
        },
        {
          nombre: "Rodrygo",
          dni: "99999999F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Vinícius Jr",
          dni: "00000000F",
          posicion: "Titular",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Kylian Mbappé",
          dni: "12345678F",
          posicion: "Titular",
          contratoInicio: "01/07/2024",
          contratoFin: "30/06/2029",
        },
        {
          nombre: "Andriy Lunin",
          dni: "23456789F",
          posicion: "Suplente",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Lucas Vázquez",
          dni: "34567890F",
          posicion: "Suplente",
          contratoInicio: "01/07/2015",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Nacho Fernández",
          dni: "45678901F",
          posicion: "Suplente",
          contratoInicio: "01/07/2011",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Luka Modric",
          dni: "56789012F",
          posicion: "Suplente",
          contratoInicio: "01/08/2012",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Toni Kroos",
          dni: "67890123F",
          posicion: "Suplente",
          contratoInicio: "01/07/2014",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Brahim Díaz",
          dni: "78901234F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Joselu",
          dni: "89012345F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2024",
        },
      ],
    },
    {
      id: 10,
      nombre: "FC Barcelona",
      categoria: "Senior",
      torneo: "Copa del Rey Fútbol",
      deporte: "Fútbol",
      jugadores: [
        {
          nombre: "Marc-André ter Stegen",
          dni: "11112222F",
          posicion: "Titular",
          contratoInicio: "01/07/2014",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Jules Koundé",
          dni: "22223333F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Ronald Araújo",
          dni: "33334444F",
          posicion: "Titular",
          contratoInicio: "01/08/2018",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Andreas Christensen",
          dni: "44445555F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Alejandro Balde",
          dni: "55556666F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Frenkie de Jong",
          dni: "66667777F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Gavi",
          dni: "77778888F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Pedri",
          dni: "88889999F",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Raphinha",
          dni: "99990000F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Robert Lewandowski",
          dni: "00001111F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Ferran Torres",
          dni: "11112222F",
          posicion: "Titular",
          contratoInicio: "01/01/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Iñaki Peña",
          dni: "22223333F",
          posicion: "Suplente",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Sergi Roberto",
          dni: "33334444F",
          posicion: "Suplente",
          contratoInicio: "01/07/2010",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Marcos Alonso",
          dni: "44445555F",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Oriol Romeu",
          dni: "55556666F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Fermín López",
          dni: "66667777F",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "João Félix",
          dni: "77778888F",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "João Cancelo",
          dni: "88889999F",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2024",
        },
      ],
    },
    {
      id: 11,
      nombre: "Atlético Madrid",
      categoria: "Senior",
      torneo: "Copa del Rey Fútbol",
      deporte: "Fútbol",
      jugadores: [
        {
          nombre: "Jan Oblak",
          dni: "10101010F",
          posicion: "Titular",
          contratoInicio: "01/07/2014",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Nahuel Molina",
          dni: "20202020F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Stefan Savic",
          dni: "30303030F",
          posicion: "Titular",
          contratoInicio: "01/07/2015",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "José María Giménez",
          dni: "40404040F",
          posicion: "Titular",
          contratoInicio: "01/07/2013",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Mario Hermoso",
          dni: "50505050F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Rodrigo de Paul",
          dni: "60606060F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Koke",
          dni: "70707070F",
          posicion: "Titular",
          contratoInicio: "01/07/2009",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Saúl Ñíguez",
          dni: "80808080F",
          posicion: "Titular",
          contratoInicio: "01/07/2008",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Antoine Griezmann",
          dni: "90909090F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Álvaro Morata",
          dni: "01010101F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Ángel Correa",
          dni: "11111111F",
          posicion: "Titular",
          contratoInicio: "01/07/2015",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Ivo Grbic",
          dni: "12121212F",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Marcos Llorente",
          dni: "13131313F",
          posicion: "Suplente",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Axel Witsel",
          dni: "14141414F",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Thomas Lemar",
          dni: "15151515F",
          posicion: "Suplente",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Pablo Barrios",
          dni: "16161616F",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Memphis Depay",
          dni: "17171717F",
          posicion: "Suplente",
          contratoInicio: "01/01/2023",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Samuel Lino",
          dni: "18181818F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2029",
        },
      ],
    },
    {
      id: 12,
      nombre: "Valencia CF",
      categoria: "Senior",
      torneo: "Copa del Rey Fútbol",
      deporte: "Fútbol",
      jugadores: [
        {
          nombre: "Giorgi Mamardashvili",
          dni: "19191919F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Dimitri Foulquier",
          dni: "20202020F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Gabriel Paulista",
          dni: "21212121F",
          posicion: "Titular",
          contratoInicio: "01/07/2017",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Mouctar Diakhaby",
          dni: "22222222F",
          posicion: "Titular",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "José Gayà",
          dni: "23232323F",
          posicion: "Titular",
          contratoInicio: "01/07/2012",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Pepelu",
          dni: "24242424F",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Javi Guerra",
          dni: "25252525F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "André Almeida",
          dni: "26262626F",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Diego López",
          dni: "27272727F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Hugo Duro",
          dni: "28282828F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Samu Castillejo",
          dni: "29292929F",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Jaume Doménech",
          dni: "30303030F",
          posicion: "Suplente",
          contratoInicio: "01/07/2016",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Thierry Correia",
          dni: "31313131F",
          posicion: "Suplente",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Cenk Özkacar",
          dni: "32323232F",
          posicion: "Suplente",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Hugo Guillamón",
          dni: "33333333F",
          posicion: "Suplente",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Fran Pérez",
          dni: "34343434F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Sergi Canós",
          dni: "35353535F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Roman Yaremchuk",
          dni: "36363636F",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2027",
        },
      ],
    },

    // Rugby - Campeonato Andalucía (4 equipos, 15 titulares + 8 suplentes)
    {
      id: 13,
      nombre: "Sevilla Rugby",
      categoria: "Senior",
      torneo: "Campeonato Rugby Andalucía",
      deporte: "Rugby",
      jugadores: [
        {
          nombre: "Antonio Márquez",
          dni: "40404040R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Manuel Ruiz",
          dni: "41414141R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "José Fernández",
          dni: "42424242R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Luis García",
          dni: "43434343R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Francisco López",
          dni: "44444444R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Diego Sánchez",
          dni: "45454545R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Rafael Pérez",
          dni: "46464646R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Pablo Martínez",
          dni: "47474747R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Carlos Rodríguez",
          dni: "48484848R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Miguel Jiménez",
          dni: "49494949R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Javier González",
          dni: "50505050R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Fernando Díaz",
          dni: "51515151R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Roberto Muñoz",
          dni: "52525252R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Alberto Moreno",
          dni: "53535353R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Sergio Romero",
          dni: "54545454R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "David Herrera",
          dni: "55555555R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Ángel Torres",
          dni: "56565656R",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Raúl Castro",
          dni: "57575757R",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Jorge Ortiz",
          dni: "58585858R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Álvaro Rubio",
          dni: "59595959R",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Iván Navarro",
          dni: "60606060R",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Adrián Soto",
          dni: "61616161R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Gonzalo Reyes",
          dni: "62626262R",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
      ],
    },
    {
      id: 14,
      nombre: "Málaga Rugby",
      categoria: "Senior",
      torneo: "Campeonato Rugby Andalucía",
      deporte: "Rugby",
      jugadores: [
        {
          nombre: "Enrique Molina",
          dni: "63636363R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Tomás Vargas",
          dni: "64646464R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Ignacio Campos",
          dni: "65656565R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Marcos Vega",
          dni: "66666666R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Héctor Blanco",
          dni: "67676767R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Samuel Ramos",
          dni: "68686868R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Adrián Medina",
          dni: "69696969R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Nicolás Prieto",
          dni: "70707070R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Víctor Gil",
          dni: "71717171R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Lucas Domínguez",
          dni: "72727272R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Mateo Cruz",
          dni: "73737373R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Daniel Ramírez",
          dni: "74747474R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Andrés Silva",
          dni: "75757575R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Emilio Santos",
          dni: "76767676R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Hugo Iglesias",
          dni: "77777777R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Rodrigo Núñez",
          dni: "78787878R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Ismael Ferrer",
          dni: "79797979R",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Óscar Cano",
          dni: "80808080R",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Rubén Cortés",
          dni: "81818181R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Cristian León",
          dni: "82828282R",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Joaquín Fuentes",
          dni: "83838383R",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Bruno Cabrera",
          dni: "84848484R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
      ],
    },

    // Volleyball (4 equipos, 12 jugadores, 6 titulares)
    {
      id: 15,
      nombre: "Valencia Volley",
      categoria: "Senior",
      torneo: "Liga Volleyball Pro",
      deporte: "Volleyball",
      jugadores: [
        {
          nombre: "Ricardo Mendoza",
          dni: "85858585V",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Simón Parra",
          dni: "86868686V",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Emilio Arias",
          dni: "87878787V",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Guillermo Paredes",
          dni: "88888888V",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Esteban Mora",
          dni: "89898989V",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Leonardo Valle",
          dni: "90909090V",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Gabriel Serrano",
          dni: "91919191V",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Patricio Rojas",
          dni: "92929292V",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Sebastián Aguilar",
          dni: "93939393V",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Mauricio Bravo",
          dni: "94949494V",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Arturo Montes",
          dni: "95959595V",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Fabián Carrasco",
          dni: "96969696V",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
      ],
    },

    // Tenis - Individual players (8 jugadores solos como "equipos")
    {
      id: 16,
      nombre: "Carlos Alcaraz",
      categoria: "Senior",
      torneo: "Masters Tenis Madrid",
      deporte: "Tenis",
      jugadores: [
        {
          nombre: "Carlos Alcaraz",
          dni: "10101010T",
          posicion: "Titular",
          contratoInicio: "01/01/2020",
          contratoFin: "31/12/2030",
        },
      ],
    },
    {
      id: 17,
      nombre: "Rafael Nadal",
      categoria: "Senior",
      torneo: "Masters Tenis Madrid",
      deporte: "Tenis",
      jugadores: [
        {
          nombre: "Rafael Nadal",
          dni: "20202020T",
          posicion: "Titular",
          contratoInicio: "01/01/2001",
          contratoFin: "31/12/2025",
        },
      ],
    },
    {
      id: 18,
      nombre: "Novak Djokovic",
      categoria: "Senior",
      torneo: "Masters Tenis Madrid",
      deporte: "Tenis",
      jugadores: [
        {
          nombre: "Novak Djokovic",
          dni: "30303030T",
          posicion: "Titular",
          contratoInicio: "01/01/2003",
          contratoFin: "31/12/2026",
        },
      ],
    },
    {
      id: 19,
      nombre: "Jannik Sinner",
      categoria: "Senior",
      torneo: "Masters Tenis Madrid",
      deporte: "Tenis",
      jugadores: [
        {
          nombre: "Jannik Sinner",
          dni: "40404040T",
          posicion: "Titular",
          contratoInicio: "01/01/2018",
          contratoFin: "31/12/2030",
        },
      ],
    },
    {
      id: 20,
      nombre: "Daniil Medvedev",
      categoria: "Senior",
      torneo: "Masters Tenis Madrid",
      deporte: "Tenis",
      jugadores: [
        {
          nombre: "Daniil Medvedev",
          dni: "50505050T",
          posicion: "Titular",
          contratoInicio: "01/01/2015",
          contratoFin: "31/12/2028",
        },
      ],
    },
    {
      id: 21,
      nombre: "Stefanos Tsitsipas",
      categoria: "Senior",
      torneo: "Masters Tenis Madrid",
      deporte: "Tenis",
      jugadores: [
        {
          nombre: "Stefanos Tsitsipas",
          dni: "60606060T",
          posicion: "Titular",
          contratoInicio: "01/01/2016",
          contratoFin: "31/12/2029",
        },
      ],
    },
    {
      id: 22,
      nombre: "Alexander Zverev",
      categoria: "Senior",
      torneo: "Masters Tenis Madrid",
      deporte: "Tenis",
      jugadores: [
        {
          nombre: "Alexander Zverev",
          dni: "70707070T",
          posicion: "Titular",
          contratoInicio: "01/01/2013",
          contratoFin: "31/12/2028",
        },
      ],
    },
    {
      id: 23,
      nombre: "Holger Rune",
      categoria: "Senior",
      torneo: "Masters Tenis Madrid",
      deporte: "Tenis",
      jugadores: [
        {
          nombre: "Holger Rune",
          dni: "80808080T",
          posicion: "Titular",
          contratoInicio: "01/01/2019",
          contratoFin: "31/12/2030",
        },
      ],
    },

    // Additional teams for other tournaments (expanding to 32 total)
    {
      id: 24,
      nombre: "Sevilla FC",
      categoria: "Senior",
      torneo: "Copa del Rey Fútbol",
      deporte: "Fútbol",
      jugadores: [
        {
          nombre: "Yassine Bounou",
          dni: "50505050F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Jesús Navas",
          dni: "51515151F",
          posicion: "Titular",
          contratoInicio: "01/07/2013",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Sergio Ramos",
          dni: "52525252F",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Nemanja Gudelj",
          dni: "53535353F",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Marcos Acuña",
          dni: "54545454F",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Fernando",
          dni: "55555555F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Ivan Rakitic",
          dni: "56565656F",
          posicion: "Titular",
          contratoInicio: "01/09/2020",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Suso",
          dni: "57575757F",
          posicion: "Titular",
          contratoInicio: "01/01/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Ocampos",
          dni: "58585858F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Youssef En-Nesyri",
          dni: "59595959F",
          posicion: "Titular",
          contratoInicio: "01/01/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Rafa Mir",
          dni: "60606060F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Marko Dmitrovic",
          dni: "61616161F",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Gonzalo Montiel",
          dni: "62626262F",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Loïc Badé",
          dni: "63636363F",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Joan Jordán",
          dni: "64646464F",
          posicion: "Suplente",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Óliver Torres",
          dni: "65656565F",
          posicion: "Suplente",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Erik Lamela",
          dni: "66666666F",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Lucas Ocampos",
          dni: "67676767F",
          posicion: "Suplente",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
      ],
    },
    {
      id: 25,
      nombre: "Real Betis",
      categoria: "Senior",
      torneo: "Copa del Rey Fútbol",
      deporte: "Fútbol",
      jugadores: [
        {
          nombre: "Rui Silva",
          dni: "68686868F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Héctor Bellerín",
          dni: "69696969F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Germán Pezzella",
          dni: "70707070F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Luiz Felipe",
          dni: "71717171F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Juan Miranda",
          dni: "72727272F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Guido Rodríguez",
          dni: "73737373F",
          posicion: "Titular",
          contratoInicio: "01/01/2020",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "William Carvalho",
          dni: "74747474F",
          posicion: "Titular",
          contratoInicio: "01/08/2018",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Nabil Fekir",
          dni: "75757575F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Ayoze Pérez",
          dni: "76767676F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Isco",
          dni: "77777777F",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Borja Iglesias",
          dni: "78787878F",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Claudio Bravo",
          dni: "79797979F",
          posicion: "Suplente",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Youssouf Sabaly",
          dni: "80808080F",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Chadi Riad",
          dni: "81818181F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Marc Roca",
          dni: "82828282F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Assane Diao",
          dni: "83838383F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Luiz Henrique",
          dni: "84848484F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Willian José",
          dni: "85858585F",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2024",
        },
      ],
    },
    // Padel - Circuito Padel Pro (8 equipos, 2 jugadores por equipo)
    {
      id: 49,
      nombre: "Díaz/Gutiérrez",
      categoria: "Senior",
      torneo: "Circuito Padel Pro",
      deporte: "Padel",
      jugadores: [
        {
          nombre: "Carlos Díaz",
          dni: "11223344A",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
        {
          nombre: "Miguel Gutiérrez",
          dni: "22334455B",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
      ],
    },
    {
      id: 50,
      nombre: "Martín/Sánchez",
      categoria: "Senior",
      torneo: "Circuito Padel Pro",
      deporte: "Padel",
      jugadores: [
        {
          nombre: "Pablo Martín",
          dni: "33445566C",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
        {
          nombre: "Javier Sánchez",
          dni: "44556677D",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
      ],
    },
    {
      id: 51,
      nombre: "López/Fernández",
      categoria: "Senior",
      torneo: "Circuito Padel Pro",
      deporte: "Padel",
      jugadores: [
        {
          nombre: "Antonio López",
          dni: "55667788E",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
        {
          nombre: "David Fernández",
          dni: "66778899F",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
      ],
    },
    {
      id: 52,
      nombre: "García/Rodríguez",
      categoria: "Senior",
      torneo: "Circuito Padel Pro",
      deporte: "Padel",
      jugadores: [
        {
          nombre: "Luis García",
          dni: "77889900G",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
        {
          nombre: "Manuel Rodríguez",
          dni: "88990011H",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
      ],
    },
    {
      id: 53,
      nombre: "Pérez/Jiménez",
      categoria: "Senior",
      torneo: "Circuito Padel Pro",
      deporte: "Padel",
      jugadores: [
        {
          nombre: "Sergio Pérez",
          dni: "99001122I",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
        {
          nombre: "Rafael Jiménez",
          dni: "00112233J",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
      ],
    },
    {
      id: 54,
      nombre: "Ruiz/Moreno",
      categoria: "Senior",
      torneo: "Circuito Padel Pro",
      deporte: "Padel",
      jugadores: [
        {
          nombre: "Alberto Ruiz",
          dni: "11223355K",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
        {
          nombre: "Ángel Moreno",
          dni: "22334466L",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
      ],
    },
    {
      id: 55,
      nombre: "Navarro/Muñoz",
      categoria: "Senior",
      torneo: "Circuito Padel Pro",
      deporte: "Padel",
      jugadores: [
        {
          nombre: "Fernando Navarro",
          dni: "33445577M",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
        {
          nombre: "Álvaro Muñoz",
          dni: "44556688N",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
      ],
    },
    {
      id: 56,
      nombre: "Romero/Alonso",
      categoria: "Senior",
      torneo: "Circuito Padel Pro",
      deporte: "Padel",
      jugadores: [
        {
          nombre: "Adrián Romero",
          dni: "55667799O",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
        {
          nombre: "Rubén Alonso",
          dni: "66778800P",
          posicion: "Titular",
          contratoInicio: "01/03/2025",
          contratoFin: "31/12/2025",
        },
      ],
    },
    {
      id: 26,
      nombre: "Cádiz Rugby",
      categoria: "Senior",
      torneo: "Campeonato Rugby Andalucía",
      deporte: "Rugby",
      jugadores: [
        {
          nombre: "Pedro Navarro",
          dni: "86868686R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Felipe Suárez",
          dni: "87878787R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Rodrigo Jiménez",
          dni: "88888888R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Santiago Álvarez",
          dni: "89898989R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Martín Flores",
          dni: "90909090R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Gustavo Romero",
          dni: "91919191R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Maximiliano Ortega",
          dni: "92929292R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Valentín Delgado",
          dni: "93939393R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Agustín Castillo",
          dni: "94949494R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Facundo Gutiérrez",
          dni: "95959595R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Matías Sosa",
          dni: "96969696R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Tomás Vázquez",
          dni: "97979797R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Benjamín Peña",
          dni: "98989898R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Lucas Mendoza",
          dni: "99999999R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Sebastián Torres",
          dni: "00000000R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Julián Ibáñez",
          dni: "10101010R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Lorenzo Ponce",
          dni: "20202020R",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Nicolás Benítez",
          dni: "30303030R",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Ezequiel Rojas",
          dni: "40404040R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Damián Luna",
          dni: "50505050R",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Octavio Silva",
          dni: "60606060R",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Hernán Méndez",
          dni: "70707070R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
      ],
    },
    {
      id: 27,
      nombre: "Granada Rugby",
      categoria: "Senior",
      torneo: "Campeonato Rugby Andalucía",
      deporte: "Rugby",
      jugadores: [
        {
          nombre: "Ricardo Salgado",
          dni: "80808080R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Óscar Reyes",
          dni: "81818181R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Esteban Morales",
          dni: "82828282R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Ramiro Valencia",
          dni: "83838383R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Vicente Cortés",
          dni: "84848484R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Leandro Campos",
          dni: "85858585R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Ignacio Blanco",
          dni: "86868686R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Bernardo Varela",
          dni: "87878787R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Patricio Montes",
          dni: "88888888R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Mariano Prieto",
          dni: "89898989R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Federico Gil",
          dni: "90909090R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Aurelio Vega",
          dni: "91919191R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Claudio Ramírez",
          dni: "92929292R",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Domingo Cruz",
          dni: "93939393R",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Ismael Domínguez",
          dni: "94949494R",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Gerardo Santos",
          dni: "95959595R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Eugenio Rivas",
          dni: "96969696R",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Salvador Medina",
          dni: "97979797R",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Alfonso Carrasco",
          dni: "98989898R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Teodoro Serrano",
          dni: "99999999R",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Celestino Aguilar",
          dni: "00000001R",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Virgilio Bravo",
          dni: "00000002R",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
      ],
    },
    {
      id: 28,
      nombre: "Alicante Volley",
      categoria: "Senior",
      torneo: "Liga Volleyball Pro",
      deporte: "Volleyball",
      jugadores: [
        {
          nombre: "Ernesto Paz",
          dni: "00000003V",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Ramón Fuentes",
          dni: "00000004V",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Leopoldo Castro",
          dni: "00000005V",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Armando León",
          dni: "00000006V",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Gonzalo Ortiz",
          dni: "00000007V",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Baltasar Rubio",
          dni: "00000008V",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Alfredo Navarro",
          dni: "00000009V",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Jacinto Soto",
          dni: "00000010V",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Gaspar Iglesias",
          dni: "00000011V",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Melchor Cano",
          dni: "00000012V",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Baltasar Núñez",
          dni: "00000013V",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Casimiro Ferrer",
          dni: "00000014V",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
      ],
    },
    {
      id: 29,
      nombre: "Murcia Volley",
      categoria: "Senior",
      torneo: "Liga Volleyball Pro",
      deporte: "Volleyball",
      jugadores: [
        {
          nombre: "Elías Cortés",
          dni: "00000015V",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Benito Cabrera",
          dni: "00000016V",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Heriberto Herrera",
          dni: "00000017V",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Plácido Torres",
          dni: "00000018V",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Hipólito Reyes",
          dni: "00000019V",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Fulgencio Molina",
          dni: "00000020V",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Crisanto Vargas",
          dni: "00000021V",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Policarpo Campos",
          dni: "00000022V",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Eusebio Vega",
          dni: "00000023V",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Epifanio Blanco",
          dni: "00000024V",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Anastasio Ramos",
          dni: "00000025V",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Clemente Prieto",
          dni: "00000026V",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
      ],
    },
    {
      id: 30,
      nombre: "Barcelona Volley",
      categoria: "Senior",
      torneo: "Liga Volleyball Pro",
      deporte: "Volleyball",
      jugadores: [
        {
          nombre: "Ambrosio Gil",
          dni: "00000027V",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Cipriano Domínguez",
          dni: "00000028V",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Desiderio Cruz",
          dni: "00000029V",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Fausto Ramírez",
          dni: "00000030V",
          posicion: "Titular",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Gumersindo Silva",
          dni: "00000031V",
          posicion: "Titular",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Honorio Santos",
          dni: "00000032V",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Inocencio Iglesias",
          dni: "00000033V",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Justiniano Cano",
          dni: "00000034V",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Laureano Núñez",
          dni: "00000035V",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Máximo Ferrer",
          dni: "00000036V",
          posicion: "Suplente",
          contratoInicio: "01/09/2022",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Nicanor Cortés",
          dni: "00000037V",
          posicion: "Suplente",
          contratoInicio: "01/09/2021",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Olegario Cabrera",
          dni: "00000038V",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2026",
        },
      ],
    },
    // Adding 2 more teams to reach exactly 32 teams
    {
      id: 31,
      nombre: "Getafe CF",
      categoria: "Senior",
      torneo: "Copa del Rey Fútbol",
      deporte: "Fútbol",
      jugadores: [
        {
          nombre: "David Soria",
          dni: "00000039F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Djené Dakonam",
          dni: "00000040F",
          posicion: "Titular",
          contratoInicio: "01/07/2017",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Stefan Mitrovic",
          dni: "00000041F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Omar Alderete",
          dni: "00000042F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Gastón Álvarez",
          dni: "00000043F",
          posicion: "Titular",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Luis Milla",
          dni: "00000044F",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Nemanja Maksimovic",
          dni: "00000045F",
          posicion: "Titular",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Mauro Arambarri",
          dni: "00000046F",
          posicion: "Titular",
          contratoInicio: "01/07/2017",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Mason Greenwood",
          dni: "00000047F",
          posicion: "Titular",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Borja Mayoral",
          dni: "00000048F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Enes Ünal",
          dni: "00000049F",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Diego Conde",
          dni: "00000050F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Juan Iglesias",
          dni: "00000051F",
          posicion: "Suplente",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Fabrizio Angileri",
          dni: "00000052F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Yellu Santiago",
          dni: "00000053F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Carles Aleñá",
          dni: "00000054F",
          posicion: "Suplente",
          contratoInicio: "01/09/2023",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Jaime Mata",
          dni: "00000055F",
          posicion: "Suplente",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Juanmi Latasa",
          dni: "00000056F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2027",
        },
      ],
    },
    {
      id: 32,
      nombre: "Athletic Bilbao",
      categoria: "Senior",
      torneo: "Copa del Rey Fútbol",
      deporte: "Fútbol",
      jugadores: [
        {
          nombre: "Unai Simón",
          dni: "00000057F",
          posicion: "Titular",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Óscar De Marcos",
          dni: "00000058F",
          posicion: "Titular",
          contratoInicio: "01/07/2009",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Yeray Álvarez",
          dni: "00000059F",
          posicion: "Titular",
          contratoInicio: "01/07/2016",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Aitor Paredes",
          dni: "00000060F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Yuri Berchiche",
          dni: "00000061F",
          posicion: "Titular",
          contratoInicio: "01/07/2018",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Oihan Sancet",
          dni: "00000062F",
          posicion: "Titular",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Dani García",
          dni: "00000063F",
          posicion: "Titular",
          contratoInicio: "01/07/2019",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Ander Herrera",
          dni: "00000064F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Nico Williams",
          dni: "00000065F",
          posicion: "Titular",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Iñaki Williams",
          dni: "00000066F",
          posicion: "Titular",
          contratoInicio: "01/07/2014",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Gorka Guruzeta",
          dni: "00000067F",
          posicion: "Titular",
          contratoInicio: "01/07/2022",
          contratoFin: "30/06/2027",
        },
        {
          nombre: "Julen Agirrezabala",
          dni: "00000068F",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Iñigo Lekue",
          dni: "00000069F",
          posicion: "Suplente",
          contratoInicio: "01/07/2015",
          contratoFin: "30/06/2025",
        },
        {
          nombre: "Dani Vivian",
          dni: "00000070F",
          posicion: "Suplente",
          contratoInicio: "01/07/2021",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Unai Gómez",
          dni: "00000071F",
          posicion: "Suplente",
          contratoInicio: "01/07/2023",
          contratoFin: "30/06/2028",
        },
        {
          nombre: "Alex Berenguer",
          dni: "00000072F",
          posicion: "Suplente",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2026",
        },
        {
          nombre: "Raúl García",
          dni: "00000073F",
          posicion: "Suplente",
          contratoInicio: "01/07/2015",
          contratoFin: "30/06/2024",
        },
        {
          nombre: "Asier Villalibre",
          dni: "00000074F",
          posicion: "Suplente",
          contratoInicio: "01/07/2020",
          contratoFin: "30/06/2025",
        },
      ],
    },
  ]

  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
  const [expandedSport, setExpandedSport] = useState<string | null>(null)

  const teamsBySport = equipos.reduce(
    (acc, team) => {
      if (!acc[team.deporte]) {
        acc[team.deporte] = []
      }
      acc[team.deporte].push(team)
      return acc
    },
    {} as Record<string, Team[]>,
  )

  const sportOrder = ["Fútbol", "Baloncesto", "Rugby", "Volleyball", "Tenis", "Padel"]
  const sortedSports = sportOrder.filter((sport) => teamsBySport[sport])

  if (selectedTeam) {
    return (
      <div className="p-8 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => setSelectedTeam(null)} className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Volver a Equipos
          </Button>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {selectedTeam.nombre} - {selectedTeam.categoria}
          </h1>
          <p className="text-muted-foreground mt-1">
            Torneo: {selectedTeam.torneo} | Deporte: {selectedTeam.deporte}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Plantilla del Equipo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Nombre Jugador</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">DNI</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Posición</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Contrato Inicio</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Contrato Fin</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedTeam.jugadores.map((jugador, index) => (
                    <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{jugador.nombre}</td>
                      <td className="py-3 px-4 text-muted-foreground">{jugador.dni}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={jugador.posicion === "Titular" ? "default" : "secondary"}
                          className={jugador.posicion === "Titular" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                        >
                          {jugador.posicion}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">{jugador.contratoInicio}</td>
                      <td className="py-3 px-4">{jugador.contratoFin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Equipos y Plantillas</h1>
        <p className="text-muted-foreground mt-1">Gestión de equipos y sus plantillas</p>
      </div>

      <div className="space-y-4">
        {sortedSports.map((deporte) => {
          const teams = teamsBySport[deporte]
          const isExpanded = expandedSport === deporte

          return (
            <Card key={deporte} className="overflow-hidden">
              <CardHeader
                className="cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => setExpandedSport(isExpanded ? null : deporte)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl">{deporte}</CardTitle>
                    <Badge className="bg-emerald-600 hover:bg-emerald-700">{teams.length} equipos</Badge>
                  </div>
                  {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    {teams.map((equipo) => (
                      <Card
                        key={equipo.id}
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedTeam(equipo)}
                      >
                        <CardHeader>
                          <CardTitle className="text-lg">{equipo.nombre}</CardTitle>
                          <div className="flex items-center gap-2 mt-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">
                              {equipo.categoria}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">{equipo.torneo}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Total Jugadores:</span>
                              <span className="font-medium">{equipo.jugadores.length}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Titulares:</span>
                              <span className="font-medium">
                                {equipo.jugadores.filter((j) => j.posicion === "Titular").length}
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Suplentes:</span>
                              <span className="font-medium">
                                {equipo.jugadores.filter((j) => j.posicion === "Suplente").length}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
