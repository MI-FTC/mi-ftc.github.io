package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

import org.firstinspires.ftc.robotcore.external.Telemetry;

@TeleOp(name="OpModeEquivalent", group="Tutorial")
public class OpModeEquivalent extends LinearOpMode {

    Telemetry.Log log = telemetry.log();

    @Override
    public void runOpMode() {
        //This section equivalent to init()
        log.setCapacity(5);
        log.add("init()");

        while (!opModeIsActive()) {
            //This section equivalent to init_loop() (not commonly used in LinearOpModes)
            log.add("Looped in init_loop()");
        }

        waitForStart();

        //This section equivalent to start()
        log.add("start()");

        while (opModeIsActive()) {
            //This section equivalent to loop()
            log.add("Looped in loop()");
        }

        //This section equivalent to stop()
        log.add("Stopped");

    }

}
