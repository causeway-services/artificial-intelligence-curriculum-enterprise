import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// This is a source-graph regression, NOT a replacement for AOE agency admission,
// an installed MetroPlat test, a paid order, or independent learner receiving.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const file = p => readFileSync(resolve(root, p), 'utf8');
const json = p => JSON.parse(file(p));

const dir = 'lib/agency';
const enterprisePath = dir + '/enterprises/artificial-intelligence-curriculum-enterprise.json';
const officePath = dir + '/offices/curriculum-learning-product-lead.json';
const assessPath = dir + '/duties/assessing-artificial-intelligence-curriculum-demand.json';
const fulfillPath = dir + '/duties/operating-curriculum-product-fulfillment.json';
const skillPath = dir + '/skills/operate-curriculum-product-fulfillment/SKILL.md';

function examineGraph({ enterprise, office, assessment, fulfillment, skill }) {
  const reasons = [];
  if (enterprise?.id !== 'artificial-intelligence-curriculum-enterprise') reasons.push('wrong canonical enterprise');
  if (!enterprise?.offices?.includes('curriculum-learning-product-lead')) reasons.push('enterprise does not select office');
  if (office?.jurisdiction !== enterprise?.id) reasons.push('office jurisdiction differs');
  if (!office?.['bears-duty']?.includes('emsenn/duty/' + assessment?.id)) reasons.push('assessment duty unlinked');
  if (!office?.['bears-duty']?.includes('emsenn/duty/' + fulfillment?.id)) reasons.push('fulfillment duty unlinked');
  if (assessment?.authority !== office?.id || fulfillment?.authority !== office?.id) reasons.push('duty authority differs');
  if (assessment?.skills?.[0] !== 'assess-taken-demand' || enterprise?.assesses?.skill !== 'assess-taken-demand') reasons.push('existing Coesite assessor not selected');
  if (!office?.['provides-skill']?.includes('operate-curriculum-product-fulfillment') ||
      !skill.includes('name: operate-curriculum-product-fulfillment')) reasons.push('offered fulfillment method unlinked');
  if (!fulfillment?.['receiver-condition']?.includes('cannot self-ACK')) reasons.push('receiver separation missing');
  return reasons;
}

test('one original curriculum enterprise has a connected office, two real duties and reusable method', () => {
  const graph = {enterprise:json(enterprisePath),office:json(officePath),
    assessment:json(assessPath),fulfillment:json(fulfillPath),skill:file(skillPath)};
  assert.deepEqual(examineGraph(graph), []);
  assert.equal(graph.enterprise.entity, '561-group-llc');
  assert.equal(graph.enterprise.kind, 'market');
  assert.notEqual(graph.enterprise.id, json(dir + '/enterprises/machine-learning-history-frontier-channel.json').id);
  assert.match(graph.skill, /No self-receiving by changing office hats/);
});

test('unlinked duty and false self-acceptance fail the same source graph', () => {
  const graph = {enterprise:json(enterprisePath),office:json(officePath),
    assessment:json(assessPath),fulfillment:json(fulfillPath),skill:file(skillPath)};
  const orphan = {...graph, office:{...graph.office,'bears-duty':[]}};
  assert.ok(examineGraph(orphan).includes('assessment duty unlinked'));
  assert.ok(examineGraph(orphan).includes('fulfillment duty unlinked'));
  const selfAccepted = {...graph,fulfillment:{...graph.fulfillment,'receiver-condition':'The lead accepts its own work.'}};
  assert.ok(examineGraph(selfAccepted).includes('receiver separation missing'));
  const foreignOwner = {...graph,fulfillment:{...graph.fulfillment,authority:'not-the-owner'}};
  assert.ok(examineGraph(foreignOwner).includes('duty authority differs'));
});

test('real commercial sources and free curriculum do not claim enabled direct checkout or cleared cash', () => {
  const ebook=json('content/launches/ebook.json');
  const cohort=json('content/launches/cohort.json');
  const site=file('README.md');
  const worksheet=file('content/marketing/agent-operator-first-commission-workbook.md');
  assert.equal(ebook.offer.priceUsd, 29);
  assert.equal(cohort.offer.priceUsdPerSeat, 349);
  assert.equal(ebook.channels[0].publicationReceipt.retailerProductUrl, 'not-yet-qualified');
  assert.equal(ebook.channels[0].publicationReceipt.externalSales, 'not-observed');
  assert.match(ebook.channelDecision.currentStatus, /without independently accepted purchase\/fulfillment/);
  assert.match(site, /\*\*not\*\* been announced/);
  assert.match(site, /causeway@561\.group/);
  assert.match(worksheet, /Receiver's independent inspection/);
});

test('operating method cannot mistake a native refusal or local file for delivery', () => {
  const method=file(skillPath);
  assert.match(method, /waiting-reply|awaiting-reply/);
  assert.match(method, /original Work/);
  assert.match(method, /source revision/);
  assert.match(method, /original supplier|original suppliers/);
  assert.match(method, /existing.*(payment|checkout)|payment channel/);
  assert.match(method, /retail.*(not|unverified)|retailer.*unverified/);
  assert.match(method, /\| Source \|/);
  assert.match(method, /\| Independent receiving \|/);
});
