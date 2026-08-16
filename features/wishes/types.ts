import { UserId } from '../users/types';
import { WishReactionCounts } from '../reactions/types';

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
    userId: UserId;
    isPrivate: boolean;
    reactionCounts: WishReactionCounts;
};