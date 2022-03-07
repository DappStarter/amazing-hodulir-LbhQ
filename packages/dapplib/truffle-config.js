require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note payment uncle install globe frame gasp'; 
let testAccounts = [
"0xc0cf67fbb0a1c8ab8e0d54c395db0bbaf4190caa4b7c9200fdaac7450f3755aa",
"0xd1d6cc8361f678ac10fcf384402c858ab98ba476f93fccdb19534f8b07ba615e",
"0x750034281286e8312025548adf9fbdfeaada00cedfe9ba8244fe85b7b2c8b450",
"0x474d0f29b98e5416d44a07233d0950b110fc37d0664a4546ae976de0a20c4b6e",
"0xc1dd7345f784550821169f914de29c98a7ff77105e8fef224fcc04d44f1a32a7",
"0x14aeb749380206f36874d3dbb1fdb58daf9b6f622f4079bbd01355b581f8d8bc",
"0xc2d9e6b1fba6b0097a5df48db4517136e3c0af15f2da1446c5ac06f0908c11c7",
"0xa07d1d3d4a83e500eb2b112769768be498f1b46b9793e3c051a8d6d86bc405a3",
"0x463b6d02f0b35772d362acfd8a6f3255420712139364525994565b8115650838",
"0xf9e16db4b7164bc7a5acd586e4990b55ee5e9e2839b9f66b021510bf0db1a2b7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


