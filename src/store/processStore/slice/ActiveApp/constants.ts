import { ActiveAppsState, ProgramType } from './types';

export const defaultActiveState: ActiveAppsState = {
  Apps: {
    [ProgramType.CHROME]: undefined,
    [ProgramType.NOTES]: undefined,
    [ProgramType.FINDER]: undefined,
    [ProgramType.VSCODE]: undefined,
    [ProgramType.TERMINAL]: undefined,
    [ProgramType.SPOTIFY]: undefined,
    [ProgramType.GITHUB]: undefined,
    [ProgramType.SETTINGS]: undefined,
    [ProgramType.BIN]: undefined,
    [ProgramType.LAUNCHPAD]: undefined,
    // Add new app here
    [ProgramType.APP_STORE]: undefined,
    [ProgramType.SAFARI]: undefined,
    [ProgramType.MAILS]: undefined,
    [ProgramType.CONTACTS]: undefined,
    [ProgramType.CALENDAR]: undefined,
    [ProgramType.REMINDERS]: undefined,
    [ProgramType.FACE_TIME]: undefined,
    [ProgramType.MESSAGES]: undefined,
    [ProgramType.MAPS]: undefined,
    [ProgramType.FIND_MY]: undefined,
    [ProgramType.PHOTO_BOOTH]: undefined,
    [ProgramType.PHOTOS]: undefined,
    [ProgramType.PREVIEW]: undefined,
    [ProgramType.MUSIC]: undefined,
    [ProgramType.PODCASTS]: undefined,
    [ProgramType.TV]: undefined,
    [ProgramType.VOICE_MEMOS]: undefined,
    [ProgramType.NEWS]: undefined,
    [ProgramType.STOCKS]: undefined,
    [ProgramType.GARAGE_BAND]: undefined,
    [ProgramType.I_MOVIE]: undefined,
    [ProgramType.HOME]: undefined,
    [ProgramType.CLOCK]: undefined,
    [ProgramType.CALCULATOR]: undefined,
    [ProgramType.FREEFORM]: undefined,
    [ProgramType.BOOKS]: undefined,
    [ProgramType.DICTIONARY]: undefined,
    [ProgramType.WEATHER]: undefined,
    [ProgramType.KEYNOTE]: undefined,
    [ProgramType.NUMBERS]: undefined,
    [ProgramType.PAGES]: undefined,
    [ProgramType.XCODE]: undefined,
  },
};
