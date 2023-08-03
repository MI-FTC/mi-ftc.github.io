//MI-FTC 2023 - https://mi-ftc.github.io
//If this is hard to read, break it up with some extra newlines or change your text size.
package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;

@TeleOp(name="Example Mecanum TeleOp (Linear)", group="Tutorial")
public class ExampleMecanumTeleOpLinear extends LinearOpMode {
    // https://mi-ftc.github.io/tutorial/l/linearopmode/index.html

    DcMotor leftFront;
    DcMotor rightFront;
    DcMotor leftBack;
    DcMotor rightBack;

    double drive;
    double turn;
    double strafe;
    double GCD;

    @Override
    public void runOpMode() {

        //Make sure these names match the Robot Controller configuration
        //You can change either this or the RC config to match if necessary
        leftFront = hardwareMap.get(DcMotor.class, "front_left_motor");
        rightFront = hardwareMap.get(DcMotor.class, "front_right_motor");
        leftBack = hardwareMap.get(DcMotor.class, "back_left_motor");
        rightBack = hardwareMap.get(DcMotor.class, "back_right_motor");

        //Your robot may need these inverted
        leftFront.setDirection(DcMotor.Direction.REVERSE);
        rightFront.setDirection(DcMotor.Direction.FORWARD); //State FORWARD too for clarity
        leftBack.setDirection(DcMotor.Direction.REVERSE);
        rightBack.setDirection(DcMotor.Direction.FORWARD);

        waitForStart();

        while (opModeIsActive()) {

            // https://gm0.org/en/latest/docs/software/tutorials/mecanum-drive.html

            drive = gamepad1.right_trigger - gamepad1.left_trigger;
            turn = gamepad1.left_stick_x * 0.5; //Adjust multiplier to change sensitivity
            //The driver I worked with preferred slower turning
            strafe = gamepad1.right_stick_x * 1.1;
            GCD = Math.max(Math.abs(drive) + Math.abs(turn) + Math.abs(strafe), 1);

            leftFront.setPower(drive + turn + strafe);
            //Think this way: Must add power for positive (right) turn, so add turn. Same for strafe.
            rightFront.setPower(drive - turn - strafe);
            //Must remove power for positive (right) turn, so subtract turn.
            leftBack.setPower(drive + turn - strafe);
            rightBack.setPower(drive - turn + strafe);

            //Telemetry, to isolate problems with code or controller
            telemetry.addData("rightTrigger", gamepad1.right_trigger);
            telemetry.addData("leftTrigger", gamepad1.left_trigger);
            telemetry.addData("leftStickX", gamepad1.left_stick_x);
            telemetry.addData("rightStickX", gamepad1.right_stick_x);

            telemetry.addData("drive", drive);
            telemetry.addData("turn", turn);
            telemetry.addData("strafe", strafe);

            telemetry.update();

            idle(); //allow the system to do background tasks (otherwise it may crash)
        }

        //Put anything here that needs to run once after Stop is pressed

    }
}
