package org.generation.salpd7;

import java.time.*;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

/**
Instrucciones:

Crear un programa en Java que realice lo siguiente:
Debe solicitar al usuario un día de la semana (de lunes a viernes).
Debe solicitar al usuario una hora (horas y minutos).
Debe calcular cuantos minutos faltan para el fin de semana. Se considera que el fin de semana comienza el viernes a las 15:00 hrs.
Debe mostrar el resultado por consola.
Debe ser capaz de identificar si los datos de entrada son válidos (día de la semana válido, hora válida, minutos válidos), en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
lunes
14
30
Faltan 5730 minutos para el fin de semana. (DEBERIA SER 5790)
Entradas: Lunes, 14:30 hrs
Salida:
Pruébalo con las combinaciones que se te ocurran.
 */

public class SA_LPD7 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		boolean dayValid = false;
		boolean hoursValid = false;
		boolean minutesValid = false;
		String dayStr = "";
		Integer day = 0;
		Integer hour = 0;
		Integer minutes = 0;
		
		do {
			if(!dayValid) {
				System.out.println("Ingrese el día de la semana de lunes a viernes");
				dayStr = sc.nextLine();
				dayStr = dayStr.toLowerCase();
				switch(dayStr) {
				case "lunes":
					day = 1;
					break;
				case "martes":
					day = 2;
					break;
				case "miercores":
					day = 3;
					break;
				case "jueves":
					day = 4;
					break;
				case "viernes":
					day = 5;
					break;
				}
				if(day < 1 || day > 5) {
					System.out.println("El día de la semana es invalido");
					continue;
				} else {
					dayValid = true;
				}
			}
			
			if(!hoursValid) {
				System.out.println("Ingrese la hora en formato 24hrs");
				hour = sc.nextInt();
				if(hour < 0 || hour > 23) {
					System.out.println("La hora no es correcta");
					continue;
				} else {
					hoursValid = true;
				}
			}
			
			if(!minutesValid) {
				System.out.println("Ingrese los minutos");
				minutes = sc.nextInt();
				if(minutes < 0 || minutes > 59) {
					System.out.println("Los minutos no son validos");
					continue;
				} else {
					minutesValid = true;
				}
			}
			
		} while(!dayValid || !hoursValid || !minutesValid);
		
		Integer passedMinutes = (day-1)*1440 + (hour)*60 + (minutes);
		Integer weekMinutes = (4*24*60) + (15*60);
		Integer remainingMinutes = weekMinutes - passedMinutes;
		System.out.println(remainingMinutes);
		
		if(remainingMinutes <= 0) {
			System.out.println("Ya es fin de semana");
		} else {
			System.out.println("Los minutos restantes es: " + remainingMinutes);
		}
		
		/*
		 * Test con LocalDate es correcto
		LocalDateTime monday = LocalDateTime.parse("2023-10-16T14:30");
		LocalDateTime weekend = LocalDateTime.parse("2023-10-20T15:00");
		
		long diff = monday.until(weekend, ChronoUnit.MINUTES);

		System.out.println(diff);
		*/
		sc.close();
		
	}

}
