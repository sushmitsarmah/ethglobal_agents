import { SecretVaultWrapper } from 'nillion-sv-wrappers';
import { orgConfig } from './nillionOrgConfig';

const saveData = async (data: any[]) => {
    try {
        // Create a secret vault wrapper and initialize the SecretVault collection to use
        const collection = new SecretVaultWrapper(
            orgConfig.nodes,
            orgConfig.orgCredentials,
            orgConfig.schemaId as any
        );
        await collection.init();

        // Write collection data to nodes encrypting the specified fields ahead of time
        const dataWritten = await collection.writeToNodes(data);
        console.log(
            '👀 Data written to nodes:',
            JSON.stringify(dataWritten, null, 2)
        );

        // Get the ids of the SecretVault records created
        const newIds = [
            ...new Set(dataWritten.map((item) => item.result.data.created).flat()),
        ];
        console.log('uploaded record ids:', newIds);

        // Read all collection data from the nodes, decrypting the specified fields
        const decryptedCollectionData = await collection.readFromNodes({});

        // Log first 5 records
        console.log(
            'Most recent records',
            decryptedCollectionData.slice(0, data.length)
        );
    } catch (error: any) {
        console.error('❌ SecretVaultWrapper error:', error.message);
        process.exit(1);
    }
};

export default saveData;