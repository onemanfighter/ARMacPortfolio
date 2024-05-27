import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '@settingsStore';
import { WallpaperEnum } from '../types';

describe('Wallpaper slice', () => {
  it('should return default wallpaper type', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.Wallpaper.type).toEqual(WallpaperEnum.ImageA);
  });

  it('should return image type if set using setWallpaper', () => {
    const { result } = renderHook(() => settingsStore());

    result.current.Wallpaper.setWallpaper(WallpaperEnum.ImageB);

    expect(result.current.Wallpaper.type).toEqual(WallpaperEnum.ImageB);
  });

  it('should return default wallpaper if resetWallpaper is called', () => {
    const { result } = renderHook(() => settingsStore());

    result.current.Wallpaper.resetWallpaper();

    expect(result.current.Wallpaper.type).toEqual(WallpaperEnum.ImageA);
  });
});
