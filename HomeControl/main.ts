import { MainLight } from './Gadgets';
import { TurnOffLight, TurnOnLight } from './Command';
import { Control } from './Control';

const light = new MainLight();
const turnOnLight = new TurnOnLight(light);
const turnOffLight = new TurnOffLight(light);
const control = new Control([turnOnLight], [turnOffLight]);
control.pressOnButton(0);
control.pressOffButton(0);
control.undo();
