export type WishReaction =
    | "love" // 💜
    | "comfort" // 🤗
    | "light" // 🕯️
    | "support" // 🫶
    | "hope"; // 🙏

export type WishReactionCounts = {
    [reaction in WishReaction]: number;
};