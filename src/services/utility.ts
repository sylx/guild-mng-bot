import { ColorResolvable, Colors, EmbedBuilder } from "discord.js";
import { __t } from "./locale";

export const GetReplyEmbed = (message: string, type: ReplyEmbedType) => {
    const embedData: { title: string, color: ColorResolvable } = ((type) => {
        switch (type) {
            case ReplyEmbedType.Success:
                return { title: `:white_check_mark:${__t("success")}`, color: Colors.Green };
            case ReplyEmbedType.Info:
                return { title: `:information_source:${__t("info")}`, color: Colors.Blue };
            case ReplyEmbedType.Warn:
                return { title: `:warning:${__t("warn")}`, color: Colors.Yellow };
            case ReplyEmbedType.Error:
                return { title: `:no_entry_sign:${__t("error")}`, color: Colors.Red };
        }
    })(type);
    return new EmbedBuilder()
        .setTitle(embedData.title)
        .setDescription(message)
        .setColor(embedData.color);
}

export enum ReplyEmbedType {
    Success,
    Info,
    Warn,
    Error,
}