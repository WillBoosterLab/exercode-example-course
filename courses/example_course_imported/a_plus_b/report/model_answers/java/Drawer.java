import java.awt.*;
import javax.swing.*;

/**
 * Simple Triangle Drawer
 * This program displays a triangle in a window
 */
class Triangle {
    private int[] xPoints;
    private int[] yPoints;

    public Triangle(int[] xPoints, int[] yPoints) {
        this.xPoints = xPoints;
        this.yPoints = yPoints;
    }

    public void draw(Graphics g) {
        g.setColor(Color.BLUE);
        g.drawPolygon(xPoints, yPoints, 3);

        g.setColor(Color.RED);
        g.fillPolygon(xPoints, yPoints, 3);
    }
}

class TrianglePanel extends JPanel {
    private Triangle triangle;

    public TrianglePanel() {
        // Create a triangle with these three points
        int[] xPoints = {150, 50, 250};
        int[] yPoints = {50, 200, 200};
        triangle = new Triangle(xPoints, yPoints);
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        triangle.draw(g);
        System.out.println("Triangle drawn!");
    }
}

public class Drawer {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Drawer");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);

        TrianglePanel panel = new TrianglePanel();
        frame.add(panel);

        frame.setVisible(true);
    }
}
