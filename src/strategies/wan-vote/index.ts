import { formatUnits } from '@wansproject/units';
import axios from 'axios';

export const author = 'wanchain';
export const version = '0.1.0';

export async function strategy(
  network,
  provider,
  addresses,
  options,
  snapshot
) {

  const blockTag = typeof snapshot === 'number' ? snapshot : 'latest';

  let response = await Promise.all(addresses.map(v => {
    return axios.get('https://wan-vote.vercel.app/api/wanvote?addr=' + v + '&block=' + blockTag);
  }))

  return Object.fromEntries(
    response.map((value: any, i) => [
      addresses[i],
      parseFloat(value.data.data.balance)
    ])
  );
}
