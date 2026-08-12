export type WishCategory =
    | "love"
    | "happiness"
    | "peace"
    | "kindness"
    | "health"
    | "wealth"
    | "family"
    | "friends"
    | "travel"
    | "safety"
    | "fun"
    | "wisdom"
    | "success"
    | "justice"
    | "nature";

export type Wish = {
    id: number;
    text: string;
    category: WishCategory;
    postedAt: Date;
    userId: number;
    isPrivate: boolean;
};