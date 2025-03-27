import java.io.*;
import java.util.*;

public class Solution1{
	public static void main(String[] args){
	Scanner sc=new Scanner(System.in);
	int Num=sc.nextInt();
	int i=1,fact=1;
	for(i=1; i<=Num; i++){
	fact= fact * i;
	}
	System.out.println("Factorial Of " +Num+ " is " +fact);
	
	}
}