import java.util.Scanner

fun main() {
    val scanner = Scanner(System.`in`)
    val count = scanner.nextInt()
    var total = 0L
    for (index in 0 until count) {
        total += scanner.nextInt()
    }
    println(total)
    scanner.close()
}
