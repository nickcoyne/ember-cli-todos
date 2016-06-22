import config from '../config/environment';
import FixtureAdapter from 'ember-data-fixture-adapter';
import DS from 'ember-data';

var adapter;
if (config.environment === 'test') {
  adapter = FixtureAdapter.extend({});
} else {
  adapter = DS.RESTAdapter.extend({
    host: 'https://todos-padrino.herokuapp.com/api'
  });
}

export default adapter;
