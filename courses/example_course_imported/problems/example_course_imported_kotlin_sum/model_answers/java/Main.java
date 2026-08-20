import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = scanner.nextInt();
        long total = 0;
        for (int i = 0; i < count; i++) {
            total += scanner.nextInt();
        }
        System.out.println(total);
        scanner.close();
    }
}
