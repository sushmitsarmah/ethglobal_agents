// nillion-sv-wrappers.d.ts

declare module 'nillion-sv-wrappers' {
    export class NilQLWrapper {
        constructor(config: any);

        init(): Promise<void>;

        executeQuery(query: any): Promise<any>;
    }

    export class SecretVaultWrapper {
        constructor(nodes: any, orgCredentials: any, schemaId: any);

        init(): Promise<void>;

        writeToNodes(data: any): Promise<any>;

        readFromNodes(options: any): Promise<any>;
    }
}