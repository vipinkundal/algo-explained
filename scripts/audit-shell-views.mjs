import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
// Run renderer functions against isolated fixtures, without a browser account,
// network request, or writing the user's progress store.
const source=readFileSync('src/app.js','utf8').split('window.addEventListener("hashchange"')[0].replace(/^import[^\n]+\n/, 'const pageLoaders = {};\n');
const storage=new Map();
const context=vm.createContext({console,Date,Intl,URL,crypto:{randomUUID:()=> 'fixture'},window:{localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)}},document:{getElementById:()=>({})}});
new vm.Script(source).runInContext(context,{timeout:1000});
const index=JSON.parse(readFileSync('src/content/algorithm_pages_index.json','utf8'));
context.catalogFixture=index.algorithms;context.localeFixture=JSON.parse(readFileSync('src/i18n/en.json','utf8'));
vm.runInContext('algorithms = catalogFixture; localeDictionaries.set("en", localeFixture);',context);
const cases=[
 ['home','renderCatalog()','Suggested beginner path'],
 ['library','renderSearchPanel()','Explore the lesson library'],
 ['login','renderProfilePanel()','Sign in'],
 ['signup','state.authMode="signup"; renderProfilePanel()','Create account'],
 ['saved empty','renderSavedPanel()','No saved algorithms yet'],
 ['saved populated','state.savedIds.add("binary-search"); renderSavedPanel()','Binary Search'],
 ['account','state.authUser={name:"Fixture Learner",email:"fixture@example.test",userId:"fixture",createdAt:"2020-01-01"}; renderProfilePanel()','Fixture Learner'],
 ['daily quiz empty','state.dailyQuiz=null; renderDailyQuizPanel()','No quiz available'],
 ['daily quiz question','state.dailyQuiz={date:getTodayKey(),activeIndex:0,questions:[{title:"Linear Search",category:"Searching",question:"What is checked first?",options:[{key:"A",text:"Index 0",correct:true},{key:"B",text:"Every index at once",correct:false}],correctKey:"A",incorrectText:"Check the first slot.",selectedKey:"",hint:"Read the first slot"}]}; renderDailyQuizPanel()','What is checked first?'],
 ['daily quiz feedback','state.dailyQuiz.questions[0].selectedKey="A"; state.dailyQuiz.questions[0].explanation="The scan begins at index 0."; renderDailyQuizPanel()','Index 0'],
 ['progress markers','renderProgressPanel(getSelectedAlgorithm())','aria-pressed='],
 ['lesson stages','state.view="visualizer"; state.selectedId="binary-search"; renderLessonNavigation()','aria-current="step"'],
];
for(const [name,expression,expected] of cases){const html=vm.runInContext(expression,context,{timeout:1000});assert(html.includes(expected),`${name}: missing ${expected}`);assert(!html.includes('undefined'),`${name}: undefined content`);console.log(`PASS ${name}`);}
context.searchMergeFixture=[{id:"fixture-stack-main",title:"Stack",category:"Stack",priority:"high"},{id:"fixture-stack-source",title:"Stack",category:"Data Structures",topicGroup:"Stack",priority:"medium"}];
const merged=JSON.parse(vm.runInContext('algorithms=searchMergeFixture; state.searchQuery=""; state.categoryFilter=""; JSON.stringify(getSearchResults())',context));
assert.equal(merged.length,1);assert.equal(merged[0].mergedCount,2);assert.equal(merged[0].id,"fixture-stack-main");console.log('PASS related search records merge and prefer main topic');
const filtered=JSON.parse(vm.runInContext('state.categoryFilter="Data Structures"; JSON.stringify(getSearchResults())',context));
assert.equal(filtered.length,1);assert.equal(filtered[0].id,"fixture-stack-source");assert(!filtered[0].mergedCount);console.log('PASS subject filter applies before related records merge');
assert.equal(vm.runInContext('getSearchGroup({category:"Data Structures",topicGroup:"Linked List"}).category',context),'Linked Lists');console.log('PASS reference search category maps to subject');
console.log(`Shell fixtures passed: ${cases.length+3}`);
