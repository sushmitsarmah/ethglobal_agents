import { z } from "zod";
import { ActionProvider, CreateAction } from "@coinbase/agentkit";
import { GetCharacterSchema, SearchSchema } from "./schema";
import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";
import { getJson } from "serpapi"; // Import the SerpAPI package

import saveData from "../nillion/save_data.ts";
import elizaSchema from "../nillion/schema.eliza.json";

const SERP_API_KEY = process.env.SERP_API;

interface NillionElizaActionProviderConfig {
    llm: ChatOpenAI<ChatOpenAICallOptions>;
};

export class NillionElizaActionProvider extends ActionProvider {
    private llm: ChatOpenAI<ChatOpenAICallOptions>;

    constructor(config: NillionElizaActionProviderConfig) {
        super("nillion_eliza", []);
        this.llm = config.llm;
    }

    /**
     * Get pairs by chainId and pairId from Dexscreener
     *
     * @param args - The arguments for the action.
     * @returns The array of token pairs.
    */
    @CreateAction({
        name: "search_and_create_eliza_character",
        description: "Searches the web for information about the character and creates an Eliza character",
        schema: SearchSchema
    })
    async createElizaCharacter(args: z.infer<typeof SearchSchema>): Promise<string> {
        const response = await getJson({
            engine: "google",
            api_key: SERP_API_KEY, // Get your API_KEY from https://serpapi.com/manage-api-key
            q: args.query,
        });

        const llmResponse = await this.llm.invoke([
            {
                role: "user",
                content: `
                    Please review the following search results: ${JSON.stringify(response)}.
                    Identify the most relevant result and use it to generate a JSON file.
                    The JSON should adhere to the format specified in the schema: ${JSON.stringify(elizaSchema)}.
                    Ensure each field in the schema is populated with the appropriate information from the selected result.
                `,
            }
        ], {
            response_format: { type: "json_object" }
        });

        return JSON.stringify(llmResponse.toJSON())
    }

    /**
     * Get pairs by chainId and pairId from Dexscreener
     *
     * @param args - The arguments for the action.
     * @returns The array of token pairs.
    */
    @CreateAction({
        name: "save eliza character to Nillion",
        description: "Saves generated Eliza character to Nillion",
        schema: GetCharacterSchema
    })
    async saveElizaCharacterToNillion(args: z.infer<typeof GetCharacterSchema>): Promise<string> {
        const data = await saveData(args.data);
        // const data = {};
        return JSON.stringify(data)
    }

    /**
     * Checks if the NillionEliza action provider supports the given network.
     *
     * @returns True if the Dexscreener action provider supports the network, false otherwise.
     */
    supportsNetwork = () => true;
}

export const nillionElizaActionProvider = (config: NillionElizaActionProviderConfig) => new NillionElizaActionProvider(config);