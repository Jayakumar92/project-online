export function paginationHandler(type: 'next' | 'prev' | 'current', position: number) {
  const page = type === 'next' ? position + 1 : type === 'prev' ? position - 1 : position;
  return page;
}

export const stopPrevent = <T extends Event>(e: T): T => {
  (e as Event).stopPropagation();
  (e as Event).preventDefault();

  return e;
};

export const convertDropdownData = (tags: { id: string; name: string }[]) => {
  if (tags && tags.length > 0) {
    return tags.map(({ id, name }) => ({ id, value: name, label: name }));
  }
  return [];
};
