import { Response } from 'express';

export const views = (res: Response, name: string, data: any) => {
  if (!data?.description) {
    data['description'] =
      'Make hiring decisions quickly and easily by using our free pre-employment assessment tests. WeTest helps you identify the best candidates for your next job position, so your search is over in no time.';
  }
  if (!data?.title) {
    data['title'] = 'Review Title.';
  }
  // return res.send(data);
  return res.render(name, {
    layout: data?.layout || 'layout/main',
    ...data,
  });
};
