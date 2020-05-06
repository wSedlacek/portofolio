type DateCompatible = string | number | Date;

export const byUpdatedDate = (
  a: { sys: { updatedAt: DateCompatible } },
  b: { sys: { updatedAt: DateCompatible } }
) =>
  new Date(a.sys.updatedAt).getTime() < new Date(b.sys.updatedAt).getTime()
    ? 1
    : -1;

export const byListedDate = (
  a: { date: DateCompatible },
  b: { date: DateCompatible }
) => (new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1);
