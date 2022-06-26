const IOS_REGEX = /iPhone|iPod|iPad|Macintosh/;

export enum Platform {
  ANDROID = 'Android',
  IOS = 'iOS'
}

export const getPlatformByUA = (): Platform => {
  if (IOS_REGEX.test(navigator.userAgent)) {
    return Platform.IOS;
  }

  return Platform.ANDROID;
};
