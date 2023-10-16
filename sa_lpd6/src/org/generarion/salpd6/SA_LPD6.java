package org.generarion.salpd6;

import java.util.Scanner;

/**
 * Instrucciones:
Crear un programa en Java que realice lo siguiente:
eduardo
odraude
Debe solicitar al usuario por consola una palabra o frase.
Debe mostrar por consola el texto escrito al revés.
 */


public class SA_LPD6 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese una cadena de texto");
		String text = scanner.nextLine();
		String result = "";
		
		for (int i = text.length() - 1; i >= 0; i--) {
			result += text.charAt(i);
		}
		
		System.out.println("El resultado es: " + result);
		scanner.close();
	}

}
