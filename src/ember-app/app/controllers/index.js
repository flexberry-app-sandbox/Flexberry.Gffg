import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.gffg.caption'),
          title: i18n.t('forms.application.sitemap.gffg.title'),
          children: [{
            link: 'i-i-s-gffg-gfgd-l',
            caption: i18n.t('forms.application.sitemap.gffg.i-i-s-gffg-gfgd-l.caption'),
            title: i18n.t('forms.application.sitemap.gffg.i-i-s-gffg-gfgd-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-gffg-запись-l',
            caption: i18n.t('forms.application.sitemap.gffg.i-i-s-gffg-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.gffg.i-i-s-gffg-запись-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})