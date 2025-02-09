import { SecretVaultWrapper } from 'nillion-sv-wrappers';
import { orgConfig } from './nillionOrgConfig.ts';

export const readData = async () => {
  try {
    // Create a secret vault wrapper and initialize the SecretVault collection to use
    const collection = new SecretVaultWrapper(
      orgConfig.nodes,
      orgConfig.orgCredentials,
      orgConfig.schemaId
    );
    await collection.init();

    // Read all collection data from the nodes, decrypting the specified fields
    const decryptedCollectionData = await collection.readFromNodes({});

    return decryptedCollectionData;

  } catch (error) {
    console.error('❌ SecretVaultWrapper error:', error.message);
    process.exit(1);
  }
};
