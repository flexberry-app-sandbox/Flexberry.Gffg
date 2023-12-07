import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  hg: DS.attr('number'),
  time: DS.attr('date'),
  запись: DS.belongsTo('i-i-s-gffg-запись', { inverse: null, async: false })
});

export let ValidationRules = {
  hg: {
    descriptionKey: 'models.i-i-s-gffg-gfgd.validations.hg.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  time: {
    descriptionKey: 'models.i-i-s-gffg-gfgd.validations.time.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-gffg-gfgd.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('gfgdE', 'i-i-s-gffg-gfgd', {
    time: attr('Time', { index: 0 }),
    hg: attr('Hg', { index: 1 }),
    запись: belongsTo('i-i-s-gffg-запись', 'Запись', {
      время: attr('Время', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'время' })
  });

  modelClass.defineProjection('gfgdL', 'i-i-s-gffg-gfgd', {
    time: attr('Time', { index: 0 }),
    hg: attr('Hg', { index: 1 }),
    запись: belongsTo('i-i-s-gffg-запись', 'Время', {
      время: attr('Время', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
