package Abstractas;

import java.util.Objects;

public abstract class Persona {
	private String nombre;
	private String apellido1;
	private String apellido2;
	private Integer edad;
	private String dni;

	public Persona(String nombre, String apellido1, String apellido2, Integer edad, String dni) {
        // RESTRICCIÓN: El DNI no puede ser nulo o vacío
        assert dni != null && !dni.isBlank() : "El DNI es obligatorio";
        // RESTRICCIÓN: El nombre no puede ser nulo o vacío
        assert nombre != null && !nombre.isBlank() : "El nombre es obligatorio";
        // RESTRICCIÓN: El primer apellido no puede ser nulo o vacío
        assert apellido1 != null && !apellido1.isBlank() : "El primer apellido es obligatorio";
        // RESTRICCIÓN: El segundo apellido no puede ser nulo o vacío
        assert apellido2 != null && !apellido2.isBlank() : "El segundo apellido es obligatorio";
        // RESTRICCIÓN: La edad debe ser positiva
        assert edad != null && edad > 0 : "La edad debe ser un número positivo";

        this.dni = dni;
		this.nombre = nombre;
		this.apellido1 = apellido1;
		this.apellido2 = apellido2;
		this.edad = edad;
	}

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido1() {
		return apellido1;
	}

	public void setApellido1(String apellido1) {
		this.apellido1 = apellido1;
	}

	public String getApellido2() {
		return apellido2;
	}

	public void setApellido2(String apellido2) {
		this.apellido2 = apellido2;
	}

	public Integer getEdad() {
		return edad;
	}

	public void setEdad(Integer edad) {
		this.edad = edad;
	}

	public String getNombreCompleto() {
		return this.nombre + " " + this.apellido1 + " " + this.apellido2;
	}

    public void setNombreCompleto(String name) {
        assert name != null : "El nombre completo no puede ser nulo";
        String[] splitted = name.split(" ");


        // RESTRICCIÓN: El nombre completo debe tener al menos 3 partes, de manera que tenemos en cuenta los nombres compuestos
        assert splitted.length >= 3 : "El nombre completo debe tener al menos 3 partes: nombre, primer apellido y segundo apellido";

        setNombre(splitted[0]);
        setApellido1(splitted[1]);
        setApellido2(splitted[2]);
    }

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (!(o instanceof Persona persona)) return false;
		return Objects.equals(dni, persona.dni);
	}

    @Override
	public int hashCode() {
		return Objects.hashCode(dni);
	}
}
