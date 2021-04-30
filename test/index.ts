const { JsonRpcProvider } = require('@wansproject/providers');
const snapshot = require('../');

const network = 888;
const url = 'https://gwan-ssl.wandevs.org:56891';
const provider = new JsonRpcProvider(url);

const strategies = [
  {
    name: 'wan-vote'
  },
  {
    name: 'eth-balance'
  }
];

const addresses = [
  '0x5560aF0F46D00FCeA88627a9DF7A4798b1b10961',
  '0xb920344cf7cab8f7e96dabb34abc4d0be72dbfbe',
];

async function test() {
  const scores = await snapshot.utils.getScores(strategies, network, provider, addresses, 14394276);
  console.log('Scores', scores);
}

test();
