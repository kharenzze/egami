import { h } from 'preact'
import {create} from 'nano-css';
import {addon as addonCache} from 'nano-css/addon/cache'
import {addon as addonStable} from 'nano-css/addon/stable'
import {addon as addonNesting} from 'nano-css/addon/nesting'
import {addon as addonAtoms} from 'nano-css/addon/atoms'
import {addon as addonKeyframes} from 'nano-css/addon/keyframes'
import {addon as addonRule} from 'nano-css/addon/rule'
import {addon as addonSheet} from 'nano-css/addon/sheet'
import {addon as addonJsx} from 'nano-css/addon/jsx'

const nano = create({ h })

// Add addons you would like to use.
addonCache(nano);
addonStable(nano);
addonNesting(nano);
addonAtoms(nano);
addonKeyframes(nano);
addonRule(nano);
addonSheet(nano);
addonJsx(nano);

const {rule, sheet, jsx, keyframes} = nano;

// Export everything.
export {
    nano,
    rule,
    sheet,
    jsx,
    keyframes,
};


