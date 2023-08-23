package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

//or @Autonomous
//Change these arguments to change the appearance in the Driver Station
@TeleOp(name="LinearOpMode Boiler Plate", group="Tutorial")
public class BoilerPlate_LinearOpMode extends LinearOpMode {

    //Declare variables (more specifically class members) here

    @Override
    public void runOpMode() {
      
        //Initialize things here
        
        waitForStart();
        
        //Code here will run only once when Start is pressed

        while (opModeIsActive()) {
          
            //loop until Stop is pressed
            
            telemetry.update();
        }
        
        //Put anything here that needs to run once when Stop is pressed
        
    }
}
