package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

import org.firstinspires.ftc.robotcore.external.Telemetry;

@TeleOp(name="LinearOpModeEquivalent", group="Tutorial")
public class LinearOpModeEquivalent extends OpMode {

    Telemetry.Log log = telemetry.log();

    @Override
    public void init() {
        //This would be right at the start of runOpMode()
        log.setCapacity(5);
        log.add("runOpMode() called");
    }

    @Override
    public void init_loop() {
        //This method is optional!
        //If you put nothing here, it just behaves like an implied waitForStart()
        //If you put something here, it's like replacing waitForStart() with a
        //while (!opModeIsActive()) loop.
        log.add("Looped in while (!opModeIsActive())");
    }

    @Override
    public void start() {
        //This method is optional!
        //This is what happens between waitForStart() and while (opModeIsActive())
        log.add("waitForStart() just returned");
    }

    @Override
    public void loop() {
        //This is equivalent to the while (opModeIsActive()) loop
        log.add("Looped in while (opModeIsActive())");
    }

    @Override
    public void stop() {
        //This method is optional!
        //This is what happens when the OpMode is stopped, opModeIsActive() becomes false,
        //and the while loop exits. This is the code right after the loop.
        log.add("Exited while (opModeIsActive())");
    }
}
