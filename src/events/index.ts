import channelDeleteEvent from "./channelDelete";
import guildCreateEvent from "./guildCreate";
import guildDeleteEvent from "./guildDelete";
import interactionCreateEvent from "./intaractionCreate";
import readyEvent from "./ready";
import voiceStateUpdateEvent from "./voiceStateUpdate";

export const events = [
    readyEvent,
    interactionCreateEvent,
    voiceStateUpdateEvent,
    guildCreateEvent,
    guildDeleteEvent,
    channelDeleteEvent
];