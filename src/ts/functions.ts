/**
 * object of collection of modifiers
 * { modifier: boolean } shows whether one modifier should be added
 */
export type ModifiersType = Record<string, boolean | null | undefined>;
/**
 * obtain classNames with necessary modifiers
 * @param baseClassName Class name of the element. You should contain element name if it's needed
 * @param modifiers [ModifiersType] Object of collection of modifiers. See ModifiersType for more details.
 * @returns `baseClassName baseClassName--modifier`
 */
export const getModifiedClassNames = <T extends string>(baseClassName: string, modifiers: ModifiersType): string => {
  const classNameList = [baseClassName];
  (Object.keys(modifiers) as T[]).forEach((modifier) => {
    if (modifiers[modifier]) {
      classNameList.push(`${baseClassName}--${modifier}`);
    }
  });
  return classNameList.join(' ');
};
