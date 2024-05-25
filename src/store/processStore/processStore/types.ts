import { StateCreator } from 'zustand';
import { PowerStateSlice } from '../slice';

export interface ProcessStoreState {
  MainMac: PowerStateSlice;
}

export type ProcessStoreSlice<T> = StateCreator<
  ProcessStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
