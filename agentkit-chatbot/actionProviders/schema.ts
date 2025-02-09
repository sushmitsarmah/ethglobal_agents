import { z } from "zod";

/**
 * Input schema for get pairs by chain and pair schema action.
 */
export const GetCharacterSchema = z
    .object({
        data: z.array(z.object({
            name: z.string().describe("the name of the character"),
            modelProvider: z.string().describe("the model provider"),
            settings: z.object({}).describe("the settings"),
            system: z.string().describe("the system"),
            bio: z.array(z.string()).describe("the bio"),
            lore: z.array(z.string()).describe("the lore"),
            messageExamples: z.array(z.object({
                user: z.string().describe("the user"),
                content: z.object({
                    text: z.string().describe("the text"),
                    action: z.string().describe("the action"),
                }).describe("the content"),
            })).describe("the message examples"),
            postExamples: z.array(z.string()).describe("the post examples"),
            adjectives: z.array(z.string()).describe("the adjectives"),
            topics: z.array(z.string()).describe("the topics"),
            style: z.object({
                chat: z.string().describe("the chat style"),
                post: z.string().describe("the post style"),
                all: z.string().describe("the all style"),
            }).describe("the style"),
            plugins: z.array(z.string()).describe("the plugins"),
            clients: z.array(z.string()).describe("the clients"),
        })).describe("the data to save"),
    })
    .strict();

export const SearchSchema = z
    .object({
        query: z.string().describe("the name or description of the character"),
    })
    .strict();