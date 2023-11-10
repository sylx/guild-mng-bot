import { AutocompleteInteraction, CacheType, ChatInputCommandInteraction, ModalSubmitInteraction, SlashCommandBuilder } from "discord.js";

export interface Command {
    data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand" | "addBooleanOption" | "addUserOption" | "addChannelOption" | "addRoleOption" | "addAttachmentOption" | "addMentionableOption" | "addStringOption" | "addIntegerOption" | "addNumberOption">,
    async execute: (interaction: ChatInputCommandInteraction) => Promise<any>,
    async autocomplete?: (interaction: AutocompleteInteraction) => Promise<any>,
    async modal?: (interaction: ModalSubmitInteraction<CacheType>) => Promise<any>,
    cooldown?: number // in seconds
}

export interface BotEvent {
    name: string,
    once?: boolean | false,
    execute: (...args?) => void
}

declare module "discord.js" {
    export interface Client {
        commands: Collection<string, Command>,
        cooldowns: Collection<string, number>
    }
}