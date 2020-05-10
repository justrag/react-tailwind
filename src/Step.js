import React from 'react';
import { CHOOSING_SOURCE, CHOOSING_TARGET, AWAITING_CONFIRMATION, CHOOSING_ORIENTATION } from './constants';

const Step = ({ step }) =>
  <h3 className="text-center text-an-dark-green bold-100">
    {step === CHOOSING_SOURCE && "Choose the pyramid to move"}
    {step === CHOOSING_TARGET && "Choose the target field"}
    {step === CHOOSING_ORIENTATION && "Choose the orientation"}
    {step === AWAITING_CONFIRMATION && "Confirm move"}
  </h3>

export default Step;