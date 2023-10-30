package org.generation;

import java.util.ArrayList;
import java.util.Scanner;

public class SA_LPD8 {
	
	public static boolean isPrime(Integer n) {
		if(n == 1) return false;
		for(int i = 2; i < n; i++) {
			if(n.intValue() % i == 0) return false;
		}
		return true;
	}
	
	public static void printArray(ArrayList<Integer> arr) {
		for(int i = 0; i < arr.size(); i++) {
			System.out.println(i + " - " + arr.get(i));
		}
	}
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		Integer number;
		Integer count = 0;
		ArrayList<Integer> numbers = new ArrayList<Integer>();
		
		do {
			System.out.print("Ingrese un numero: ");
			number = sc.nextInt();
			numbers.add(number);
			count++;
			
		} while (count < 10);
		
		ArrayList<Integer> ordered = new ArrayList<Integer>();
		for(Integer n: numbers) {
			if(isPrime(n)) {
				ordered.add(n);
			}
		}
		
		for(Integer n: numbers) {
			if(!isPrime(n)) {
				ordered.add(n);
			}
		}
		
		System.out.println("Original");
		printArray(numbers);
		System.out.println("Ordenado");
		printArray(ordered);
		
		sc.close();
		
	}
	
}
