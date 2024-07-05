"use server";

import { prisma } from "@/lib/connect";

export async function fetchHero() {
    try {
        const hero = await prisma.hero.findMany();
        return { hero };
    } catch (error) {
        throw new Error("Unable to fetch Hero");
    }
}

export async function fetchAbout() {
    try {
        const about = await prisma.about.findMany();
        return { about };
    } catch (error) {
        throw new Error("Unable to fetch About");
    }
}

export async function fetchSkills() {
    try {
        const skill = await prisma.skill.findMany();
        return { skill };
    } catch (error) {
        throw new Error("Unable to fetch Skills");
    }
}
