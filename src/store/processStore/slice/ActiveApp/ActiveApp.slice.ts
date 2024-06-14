import { ProcessStoreSlice } from '../../processStore';
import { defaultActiveState } from './constants';
import { ActiveAppsSlice, WindowSize } from './types';

const createActiveAppsSlice: ProcessStoreSlice<ActiveAppsSlice> = (
  set,
  get,
) => ({
  ...defaultActiveState,
  addApp: (type) => {
    const appData = get().ActiveApp.Apps[type];
    if (appData === undefined) {
      set((state) => {
        state.ActiveApp.Apps[type] = {
          position: { x: 600, y: 150 },
          zIndex: 0,
          size: WindowSize.DEFAULT,
        };
      });
    }
  },
  removeApp: (type) => {
    const appData = get().ActiveApp.Apps[type];
    if (appData !== undefined) {
      set((state) => {
        state.ActiveApp.Apps[type] = undefined;
      });
    }
  },
  setWindowSize: (type, size) => {
    const appData = get().ActiveApp.Apps[type];
    if (appData !== undefined) {
      set((state) => {
        state.ActiveApp.Apps[type] = {
          ...appData,
          size: size,
        };
      });
    }
  },
  getAppOnTop: (type) => {
    const appData = get().ActiveApp.Apps[type];
    if (appData !== undefined) {
      set((state) => {
        state.ActiveApp.Apps[type] = {
          ...appData,
          zIndex: appData.zIndex + 10,
        };
      });
    }
  },
  updatePosition: (type, position) => {
    const appData = get().ActiveApp.Apps[type];
    if (appData !== undefined) {
      console.log('position:', position);

      set((state) => {
        state.ActiveApp.Apps[type] = {
          ...appData,
          position: position,
        };
      });
    }
  },
});

export default createActiveAppsSlice;
