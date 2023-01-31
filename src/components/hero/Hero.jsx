import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "./hero.css";

const steps = [
  'offer ',
  'specify dates ',
  'pay ',
  'become a member',
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <div className="main-stepper">
        <div className=" stepper">
            <Stepper className="custom-stepper" activeStep={0} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <div className="des">
                <h3 className="main-title">Choose the plan that suits you </h3>
                <h5  className="description"> Become a member and get advice immediately</h5>
            </div>
        </div>
    </div>
  );
}