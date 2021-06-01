require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth scrub pumpkin gesture inhale equal gasp'; 
let testAccounts = [
"0xeb9d981f9796cc3cc4340bb9081afafc8e721fd56dd14fd7f7b2f9813a30d56b",
"0x2a591a67336c5fab1207f2b2577a89a5f6a253ffdbadbd5d57ad943e787bfdbd",
"0xc09b7bdf534d428d7f6cf5da8878aee74d4778da1836b5b45c2b669540e3a524",
"0x11e512dd1c27dd773a985aa75826d649a94a731170114ef7ac738b1628707147",
"0xaa6f415828d8b704215111826389ff1427a60dc3930e1b25da13b5e53a97cbc4",
"0x5100b7239c79fa0cfe2b2f1b5f1ec742603582f8f16f62c7fd09b88d5c0c47fe",
"0x2e3bf64c26d1e2fecba52672d26d214950c6e8eb42104c32828d37fc7e12270b",
"0x1693cf55b46bf06db9a4bb86ab3ec7448c6fff3fdd8cdfff6d47614df0d7ee12",
"0x45ab288a9d20f505212de4cf18fc3f999dce11a04f58a1e531e7da654fccf6ee",
"0x7fc13475fb876d41ce18209eba3f6e71c002ade384c41189796d95cc7e671996"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

