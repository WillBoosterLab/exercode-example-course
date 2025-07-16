import java.awt.*;
import javax.swing.*;

class DrawPanel extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        // Draw a black line
        g.setColor(Color.BLACK);
        g.drawLine(50, 50, 350, 200);
    }
}

public class Drawer {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Drawer");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);

        // Add the custom panel to the frame
        DrawPanel panel = new DrawPanel();
        // Set background color (light blue)
        panel.setBackground(new Color(200, 220, 240));
        frame.add(panel);

        frame.setVisible(true);
    }
}
