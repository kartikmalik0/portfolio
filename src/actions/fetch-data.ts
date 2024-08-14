"use server";

import prisma from "@/lib/connect";

export async function fetchHero() {
    try {
        const hero = await prisma.hero.findMany({
            cacheStrategy: {
                ttl: 3600, // Cache data for 1 hour (3600 seconds)
                swr: 3600, // Serve stale data for up to 1 hour while fetching fresh data
            },
        });
        return { hero };
    } catch (error) {
        throw new Error("Unable to fetch Hero");
    }
}

export async function fetchAbout() {
    try {
        const about = await prisma.about.findMany({
            cacheStrategy: {
                ttl: 3600, // Cache data for 1 hour (3600 seconds)
                swr: 3600, // Serve stale data for up to 1 hour while fetching fresh data
            },
        });
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

export async function fetchProjects(pageParam = 0) {
    try {
        const projects = await prisma.project.findMany({
            take: 4,
            skip: pageParam,
        });
        return { project: projects };
    } catch (error) {
        throw new Error("Unable to fetch Projects");
    }
}

export async function fetchExp() {
    try {
        const exp = await prisma.experience.findMany();
        return { exp };
    } catch (error) {
        throw new Error("Unable to fetch Projects");
    }
}

export async function fetchLinks() {
    try {
        const links = await prisma.socialLink.findMany();
        return { links };
    } catch (error) {
        throw new Error("Unable to fetch Links");
    }
}

export async function fetchResume() {
    try {
        const hero = await prisma.hero.findMany({
            select: {
                resumeUrl: true,
            },
        });
        return { resumeUrl: hero[0].resumeUrl };
    } catch (error) {
        throw new Error("Unable to fetch Resume URL");
    }
}

export async function fetchEmail() {
    try {
        const hero = await prisma.hero.findMany({
            select: {
                email: true,
            },
        });
        return { email: hero[0].email };
    } catch (error) {
        throw new Error("Unable to fetch Email");
    }
}
