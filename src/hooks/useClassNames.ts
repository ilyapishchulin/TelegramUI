import { usePlatform } from 'hooks/usePlatform';

type ClassName = string | undefined | false | Record<string, boolean|undefined|null>;
type ClassNameForPrefix = string[] | ClassName;

const TG_CLASS_PREFIX = 'tg';

export const useClassNames = () => {
  const platform = usePlatform();

  const getClassName = (...args: ClassName[]): string => {
    const result: string[] = [];

    args.forEach((item): void => {
      if (!item) {
        return;
      }

      switch (typeof item) {
        case 'object':
          Object.keys(item).forEach((key: string) => {
            if (item[key]) {
              result.push(key);
            }
          });
          break;

        case 'string':
        default:
          result.push(item);
      }
    });

    return result.join(' ');
  }

  const getClassNamesWithPrefix = (...args: ClassNameForPrefix[]): string => {
    const result: string[] = [];

    args.forEach((item): void => {
      if (!item) {
        return;
      }

      switch (typeof item) {
        case 'object':
          if (Array.isArray(item)) {
            result.push(getClassNamesWithPrefix(...item));
            return;
          }

          Object.keys(item).forEach((key: string) => {
            if (item[key]) {
              result.push(`${TG_CLASS_PREFIX}${item}`);
            }
          });
          break;

        case 'string':
        default:
          result.push(`${TG_CLASS_PREFIX}${item}`);
      }
    });

    return result.join(' ');
  }

  const getClassNamesWithPlatform = (componentName: string): string[] => {
    return [componentName, `${componentName}--${platform.toLowerCase()}`];
  }

  return {
    getClassName,
    getClassNamesWithPrefix,
    getClassNamesWithPlatform,
  };
};
