import index     from './pages/index.vue';
import auth      from './pages/auth.vue';
import pages     from './pages/pages.vue';
import dashboard from './pages/dashboard.vue';
import statistic from './pages/statistic.vue';
import news from './pages/news.vue';
import catalog from './pages/catalog.vue';

export default {
  path: '/admin', component: index, name: 'admin', children: [
    // {path: '', component: auth},
    // {path: 'dashboard', component: dashboard}
    {
      path: '', component: pages, redirect: 'auth', children: [
        {path: 'dashboard', component: dashboard},
        {path: 'statistic', component: statistic},
        {path: 'news', component: news},
        {path: 'catalog', component: catalog}
      ]
    },
    {path: 'auth', component: auth}
  ]
};
