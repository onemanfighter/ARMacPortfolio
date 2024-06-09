import { ProgramType } from '../components';
import { ProgramItem } from '../type';
import { reorder } from '../utils';

const dummyData: ProgramItem[] = [
  {
    type: ProgramType.SPOTIFY,
    name: 'Spotify',
    id: '1',
  },
  {
    type: ProgramType.CHROME,
    name: 'Chrome',
    id: '2',
  },
  {
    type: ProgramType.FINDER,
    name: 'Finder',
    id: '3',
  },
  {
    type: ProgramType.GITHUB,
    name: 'Github',
    id: '4',
  },
];

describe('utils', () => {
  it('should correctly reorder the array', () => {
    const data = reorder(dummyData, 0, 4);

    expect(data).toEqual([
      {
        type: ProgramType.CHROME,
        name: 'Chrome',
        id: '2',
      },
      {
        type: ProgramType.FINDER,
        name: 'Finder',
        id: '3',
      },
      {
        type: ProgramType.GITHUB,
        name: 'Github',
        id: '4',
      },
      {
        type: ProgramType.SPOTIFY,
        name: 'Spotify',
        id: '1',
      },
    ]);
  });
});