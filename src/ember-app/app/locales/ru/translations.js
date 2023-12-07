import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Gffg',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gffg',
          title: 'Gffg'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-gffg-gfgd-l': IISGffggfgdLForm,
    'i-i-s-gffg-запись-l': IISGffgЗаписьLForm,
    'i-i-s-gffg-gfgd-e': IISGffggfgdEForm,
    'i-i-s-gffg-запись-e': IISGffgЗаписьEForm
  },

});

export default translations;
