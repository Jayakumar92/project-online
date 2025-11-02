export function capitalizeFirstLetter(string: string) {
  if (string !== undefined && string !== null && string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

export function stringSlice(string: string, slice: number = 3) {
  return string.slice(0, slice);
}

export const getInitials = (name: string) => {
  const parts = name.split(' ');
  const initials =
    parts.length > 1
      ? parts
          .map((part) => part[0])
          .join('')
          .slice(0, 2)
      : name.slice(0, 2);

  return initials.toUpperCase();
};
