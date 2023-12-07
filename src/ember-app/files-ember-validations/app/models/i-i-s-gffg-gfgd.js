import {
  defineNamespace,
  defineProjections,
  Model as gfgdMixin
} from '../mixins/regenerated/models/i-i-s-gffg-gfgd';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(gfgdMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
