package Abstractas;

public abstract class Persona {
	private String nombre;
	private String Apellido1;
	private String Apellido2;
	private Integer Edad;

	public Persona(String nombre, String apellido1, String apellido2, Integer edad) {
		this.nombre = nombre;
		Apellido1 = apellido1;
		Apellido2 = apellido2;
		Edad = edad;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido1() {
		return Apellido1;
	}

	public void setApellido1(String apellido1) {
		Apellido1 = apellido1;
	}

	public String getApellido2() {
		return Apellido2;
	}

	public void setApellido2(String apellido2) {
		Apellido2 = apellido2;
	}

	public Integer getEdad() {
		return Edad;
	}

	public void setEdad(Integer edad) {
		Edad = edad;
	}

	public String getNombreCompleto() {
		return this.nombre + " " + this.Apellido1 + " " + this.Apellido2;
	}

	public void setNombreCompleto(String name) {
		String[] splitted = name.split(" ");
		if (splitted.length != 3) {
			throw new IllegalArgumentException("Error poniendo nombre, formato: Nombre Apellido1 Apellido2");
		}
		setNombre(splitted[0]);
		setApellido1(splitted[1]);
		setApellido2(splitted[2]);
	}
}
