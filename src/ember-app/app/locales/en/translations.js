import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGffggfgdLForm from './forms/i-i-s-gffg-gfgd-l';
import IISGffgЗаписьLForm from './forms/i-i-s-gffg-запись-l';
import IISGffggfgdEForm from './forms/i-i-s-gffg-gfgd-e';
import IISGffgЗаписьEForm from './forms/i-i-s-gffg-запись-e';
import IISGffggfgdModel from './models/i-i-s-gffg-gfgd';
import IISGffgЗаписьModel from './models/i-i-s-gffg-запись';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gffg-gfgd': IISGffggfgdModel,
    'i-i-s-gffg-запись': IISGffgЗаписьModel
  },

  'application-name': 'Gffg',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Gffg',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gffg',
          title: 'Gffg'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        gffg: {
          caption: 'Gffg',
          title: 'Gffg',
          'i-i-s-gffg-gfgd-l': {
            caption: 'Gfgd',
            title: ''
          },
          'i-i-s-gffg-запись-l': {
            caption: 'Запись',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gffg-gfgd-l': IISGffggfgdLForm,
    'i-i-s-gffg-запись-l': IISGffgЗаписьLForm,
    'i-i-s-gffg-gfgd-e': IISGffggfgdEForm,
    'i-i-s-gffg-запись-e': IISGffgЗаписьEForm
  },

});

export default translations;
