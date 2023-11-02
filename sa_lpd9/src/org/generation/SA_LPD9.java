package org.generation;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class SA_LPD9 {
	
	
	public static void main(String[] args) {
		Map<String, String> dict = new HashMap<String, String>();
		
		dict.put("gato", "cat");
		dict.put("perro", "dog");
		dict.put("silla", "chair");
		dict.put("ventilador", "fan");
		dict.put("computador", "computer");
		dict.put("mesa", "desk");
		dict.put("correr", "run");
		dict.put("caminar", "walk");
		dict.put("hablar", "talk");
		dict.put("escribir", "write");
		dict.put("manzana", "apple");
		dict.put("comida", "food");
		dict.put("descansar", "rest");
		dict.put("fotografia", "picture");
		dict.put("bocina", "speaker");
		dict.put("desayuno", "breakfast");
		dict.put("almuerzo", "lunch");
		dict.put("guitarra", "guitar");
		dict.put("audifonos", "earphones");
		dict.put("taza", "mug");
		dict.put("lapiz", "pencil");
		
		Scanner sc = new Scanner(System.in);
		String word;
		
		do {
			System.out.print("Ingrese la palabra a traducir: ");
			word = sc.nextLine();
			word = word.toLowerCase();
			
			if(!word.equals("salir")) {
				if(dict.containsKey(word)) {
					System.out.println(word + " -> " + dict.get(word));
				} else {
					System.out.println("La palabra no se encuentra en el diccionario");
				}
			}
			
		} while(!word.equals("salir"));
		
		sc.close();
		
	}
}
