export const orgConfig = {
  // demo org credentials
  // in a production environment, make sure to put your org's credentials in environment variables
  orgCredentials: {
    secretKey:
      'c0f7ba9a61b2333e24f3ccc3d54776f9843cd79f8dad4b3b16b773f5923712ec',
    orgDid: 'did:nil:testnet:nillion1jwyuunqgduukkre27jgfyvfzshqrse6n05wx2n',
  },
  schemaId: '9330e902-763a-4191-97ac-0fcdefa04888',
  // node config
  nodes: [
    {
      url: 'https://nildb-zy8u.nillion.network',
      did: 'did:nil:testnet:nillion1fnhettvcrsfu8zkd5zms4d820l0ct226c3zy8u',
    },
    {
      url: 'https://nildb-rl5g.nillion.network',
      did: 'did:nil:testnet:nillion14x47xx85de0rg9dqunsdxg8jh82nvkax3jrl5g',
    },
    {
      url: 'https://nildb-lpjp.nillion.network',
      did: 'did:nil:testnet:nillion167pglv9k7m4gj05rwj520a46tulkff332vlpjp',
    },
  ],
};
