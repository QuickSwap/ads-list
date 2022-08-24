const { version } = require('../package.json');
const mainnet = require('./ads/polygon.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'Quickswap Ads List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'ipfs://QmQ9GCVmLQkbPohxKeCYkbpmwfTvHXrY64TmBsPQAZdbqZ',
    'keywords': [
      'QuickSwap',
      'default',
      "ads",
      "list"
    ],
    ads: [
      ...mainnet
    ]
  };
};
