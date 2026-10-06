import assert from 'node:assert/strict';
import {createDynamicVisualization} from '../src/algorithms/_shared/dynamic-animation-engine.js';
import {renderGrowthOutput} from '../src/algorithms/_shared/learning-ui.js';
import {algorithmPage as factorial} from '../src/algorithms/recursion-and-backtracking/factorial-recursion/data.js';
import {readFileSync} from 'node:fs';
const code=readFileSync(factorial.codePath,'utf8');
for(const [n,expected] of [[0,1],[1,1],[4,24],[5,120]]){
 const trace=createDynamicVisualization(factorial,code,String(n)).animation;
 assert.equal(trace.calls.length,Math.max(n,1));
 assert(!trace.steps.some(s=>/push|pop|unchoose|backtrack/i.test(s.note)));
 assert(trace.steps.at(-1).title.includes(String(expected)));
 console.log(`PASS factorial(${n}) call/return model ends at ${expected}`);
}
const empty=createDynamicVisualization({id:'example',title:'Array example',runnerInput:[[1]],animation:{type:'array-flow'}},'export function demo(values) {}','[]');
assert.deepEqual(empty.animation.values,[]);
console.log('PASS empty array model retains empty input');
const fixed=createDynamicVisualization({id:'fixed',title:'Fixed demo',runnerInput:[],animation:{type:'array-flow',values:[3,1,4]}},'export function fixed() {}','[]');
assert.deepEqual(fixed.runInput,[]);assert.deepEqual(fixed.animation.values,[3,1,4]);
console.log('PASS no-parameter companion retains its sample model');
const growth=renderGrowthOutput(64);assert(growth.includes('4096')&&growth.includes('16384'));
console.log('PASS growth comparison at n=64 and 2n');
