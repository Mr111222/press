import CbTitles from './src/components/title.vue';

let install = CbTitles.install = function(Vue, options = {}) {
  if (install.installed) return;
  if (!options.scoped) {
    Vue.component(options.name || CbTitles.name, CbTitles);
  }
};

export default CbTitles;

