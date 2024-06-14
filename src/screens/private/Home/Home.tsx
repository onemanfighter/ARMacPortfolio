import { createContext, useContext } from 'react';
import { Box, useBoolean } from '@chakra-ui/react';
import { HomeProps } from './type';
import { WallpaperComponent, Window } from '@components';
import { settingsStore, useShallow, wallpaperSelector } from '@settingsStore';
import { TopBar } from './TopBar';
import {
  LazyBinComponent,
  LazyChromeComponent,
  LazyFinderComponent,
  LazyGithubComponent,
  LazyNotesComponent,
  LazySettingsComponent,
  LazySpotifyComponent,
  LazyTerminalComponent,
  LazyVsCodeComponent,
} from '@router';
import { BottomBar } from './BottomBar';
import {
  ProgramType,
  processStore,
  activeAppSelector,
  WindowSize,
} from '@processStore';
import { Launchpad } from './Launchpad';
import { LaunchpadContext } from '../Mac';

const Home = (props: HomeProps) => {
  const { launchpad } = useContext(LaunchpadContext);
  const { wallpaper } = settingsStore(useShallow(wallpaperSelector));
  const activeApp = processStore(useShallow(activeAppSelector));

  const shouldShowAppWindow = (app: ProgramType) =>
    activeApp(app) !== undefined && activeApp(app)?.size !== WindowSize.HIDE;
  return (
    <Box aria-label="home" width={'100vw'} height={'100vh'}>
      <Box width={'100vw'} height={'100vh'} position={'absolute'} zIndex={-10}>
        <WallpaperComponent id={wallpaper} />
      </Box>
      <Box
        width={'100vw'}
        height={0}
        position={'absolute'}
        zIndex={1000}
        bg={'black'}
      >
        <TopBar />
      </Box>
      <Box
        width={'100vw'}
        height={'10vh'}
        position={'absolute'}
        bottom={0}
        zIndex={950}
      >
        <BottomBar />
      </Box>

      {launchpad ? (
        <Launchpad />
      ) : (
        <Box
          width={'100vw'}
          height={'100vh'}
          position={'absolute'}
          zIndex={800}
        >
          {shouldShowAppWindow(ProgramType.FINDER) ? (
            <Window
              app={ProgramType.FINDER}
              children={<LazyFinderComponent />}
            />
          ) : null}
          {shouldShowAppWindow(ProgramType.NOTES) ? (
            <Window app={ProgramType.NOTES} children={<LazyNotesComponent />} />
          ) : null}
          {shouldShowAppWindow(ProgramType.CHROME) ? (
            <Window
              app={ProgramType.CHROME}
              children={<LazyChromeComponent />}
            />
          ) : null}
          {shouldShowAppWindow(ProgramType.GITHUB) ? (
            <Window
              app={ProgramType.GITHUB}
              children={<LazyGithubComponent />}
            />
          ) : null}
          {shouldShowAppWindow(ProgramType.SETTINGS) ? (
            <Window
              app={ProgramType.SETTINGS}
              children={<LazySettingsComponent />}
            />
          ) : null}
          {shouldShowAppWindow(ProgramType.SPOTIFY) ? (
            <Window
              app={ProgramType.SPOTIFY}
              children={<LazySpotifyComponent />}
            />
          ) : null}
          {shouldShowAppWindow(ProgramType.TERMINAL) ? (
            <Window
              app={ProgramType.TERMINAL}
              children={<LazyTerminalComponent />}
            />
          ) : null}
          {shouldShowAppWindow(ProgramType.VSCODE) ? (
            <Window
              app={ProgramType.VSCODE}
              children={<LazyVsCodeComponent />}
            />
          ) : null}
          {shouldShowAppWindow(ProgramType.BIN) ? (
            <Window app={ProgramType.BIN} children={<LazyBinComponent />} />
          ) : null}
        </Box>
      )}
    </Box>
  );
};

export default Home;
