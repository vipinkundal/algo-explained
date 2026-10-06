import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { createGenericAlgorithmPage } from '../src/algorithms/_shared/page-factory.js';
const registry=readFileSync('src/content/algorithm_page_modules.js','utf8');
const entries=[...registry.matchAll(/"([^"]+)": \(\) => import\("([^"]+)"\)/g)];
const index=JSON.parse(readFileSync('src/content/algorithm_pages_index.json','utf8'));
const rows=[];const failures=[];
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const deps={escapeHtml,icon:name=>`<span>${escapeHtml(name)}</span>`,requestRender(){},t:key=>key};
const routeSet=new Set();
for(const [,id,importPath] of entries) {
 try {
  const modulePath=resolve('src/content',importPath);
  const {algorithmPage:page}=await import(resolve(dirname(modulePath),'data.js'));
  const module=await import(modulePath);
  assert.equal(id,page.id);assert(!routeSet.has(page.route),'Duplicate route');routeSet.add(page.route);
  assert.equal(index.algorithms.find(p=>p.id===id)?.route,page.route,'Index/data route mismatch');
  assert(page.learningGuide?.example && page.learningGuide?.mentalModel,'Missing guide');
  assert(!/taught here|technique focused|solves a .*problem by maintaining|explains the .*state model/.test(page.meaning),'Placeholder introduction');
  assert(page.learningGuide.terms.length>=3,'Missing vocabulary');
  assert.equal(page.quiz.options.filter(o=>o.correct).length,1,'Quiz must have one correct choice');
  assert(existsSync(resolve(page.codePath)));assert(existsSync(resolve(module.stylePath)));
  for(const link of page.relatedLinks||[])assert(index.algorithms.some(p=>p.id===link.id),`Unknown related lesson ${link.id}`);
  if(page.originalCodePath)assert(existsSync(resolve(page.originalCodePath)));
  const instance=module.createAlgorithmPage(deps);
  for(const view of ['lesson','visualizer','challenge']){
   const html=instance.render(view);
   assert(html.includes('<h1 '),`${view}: no main heading`);
   assert(!html.includes('undefined'),`${view}: undefined content`);
   if(view==='lesson')assert(html.includes('A small example')&&html.includes('Words you’ll see')&&html.includes('growth-lab'));
   if(view==='visualizer')assert(html.includes('execution recording')||html.includes('prepared walkthrough'),'Missing visualization scope');
   if(view==='challenge')assert(html.includes('data-answer=')&&html.includes('Review the small example'));
  }
  instance.cleanup();
  const code=readFileSync(resolve(page.codePath),'utf8');const name=code.match(/export function\s+(\w+)/)?.[1];
  const ctx=vm.createContext({sampleArgs:page.runnerInput||[],console:{log(){}}});
  const result=new vm.Script(code.replace(/export /g,'')+`\n${name}(...sampleArgs)`).runInContext(ctx,{timeout:1000});
  assert.equal(JSON.stringify(page.learningGuide.sampleResult),JSON.stringify(result),'Stored sample output differs from code');
  if(id==='factorial-recursion')assert(!/push|pop|backtrack/.test(page.codeInsight),'Factorial still described as backtracking');
  rows.push({id,route:page.route,views:['lesson','visualizer','challenge'],family:page.animation?.type,sample:'passed',scope:page.originalCodePath?'structure companion':page.animation?.static?'prepared sample':'illustrative model'});
 } catch(e) {failures.push({id,message:e.message});}
}
const report={pages:rows.length,views:rows.length*3,sampleExecutions:rows.length,failures,rows};
if(process.argv.includes('--report'))writeFileSync('docs/learning-coverage-report.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({registered:entries.length,passed:rows.length,views:rows.length*3,sampleExecutions:rows.length,failures},null,2));
if(failures.length)process.exitCode=1;
