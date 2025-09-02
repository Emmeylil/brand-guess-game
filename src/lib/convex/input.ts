import { v } from "convex/values";
import { internalMutation, internalQuery, mutation, query } from "./_generated/server";

export const getInputs = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("input").collect();
    },
});

export const getInputInternal = internalQuery({
    args: {
    },
    handler: async (ctx, args) => {
        const scores = await ctx.db.query("input").collect()

        return scores
    }
})

export const setInput = mutation({
    args: {
        date: v.string(),
        image: v.string(),
        correctAnswers: v.string(),
        acceptableAnswers: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert('input', {
            date: args.date,
            image: args.image,
            correctAnswers: args.correctAnswers,
            acceptableAnswers: args.acceptableAnswers,
        })

        return id
    }
})

export const setInputInternal = internalMutation({
    args: {
        date: v.string(),
        image: v.string(),
        correctAnswers: v.string(),
        acceptableAnswers: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert('input', {
            date: args.date,
            image: args.image,
            correctAnswers: args.correctAnswers,
            acceptableAnswers: args.acceptableAnswers,
        })

        return id
    }
})