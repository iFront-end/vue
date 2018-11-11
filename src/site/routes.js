import index    from './pages/index.vue';
import home     from './pages/home.vue';
import about    from './pages/about.vue';
import contacts from './pages/contacts.vue';

export default {
  path: '/', component: index, name: 'bla', children: [
    {path: '', component: home, props: {hideNav: true}},
    {path: 'about', component: about, name: 'about', alias: '/about-foo'},
    {path: 'contacts', component: contacts, name: 'contacts'},
  ]
};
