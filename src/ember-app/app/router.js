import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gffg-gfgd-l');
  this.route('i-i-s-gffg-gfgd-e',
  { path: 'i-i-s-gffg-gfgd-e/:id' });
  this.route('i-i-s-gffg-gfgd-e.new',
  { path: 'i-i-s-gffg-gfgd-e/new' });
  this.route('i-i-s-gffg-запись-l');
  this.route('i-i-s-gffg-запись-e',
  { path: 'i-i-s-gffg-запись-e/:id' });
  this.route('i-i-s-gffg-запись-e.new',
  { path: 'i-i-s-gffg-запись-e/new' });
});

export default Router;
