export const byDate = (
  a: { sys: { updatedAt: string | number | Date } },
  b: { sys: { updatedAt: string | number | Date } }
) =>
  new Date(a.sys.updatedAt).getTime() < new Date(b.sys.updatedAt).getTime()
    ? 1
    : -1;
