import routesSite   from '../site/routes';
import routesCMS    from '../cms/routes';
import pageNotFound from '../site/pages/pageNotFound.vue';

export const routes = [
  routesSite,
  routesCMS,
  {
    path: '/*',
    component: pageNotFound
  }
];
