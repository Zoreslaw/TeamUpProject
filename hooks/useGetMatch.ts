import { getPotentialMatchesForUser } from "@/utils/getPotentialMatchesForUser";
import { useState, useEffect } from "react";

export function useGetMatch(userId: string) {
    const [cards, setCards] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function testMatches() {
        try {
            setIsLoading(true);
            setError(null);
            if (!userId) {
                throw new Error('No user ID provided');
            }
            const topMatches = await getPotentialMatchesForUser(userId, 50);
            console.log('Found matches:', topMatches.length);
            setCards(topMatches);
        } catch (err) {
            console.error('Error fetching matches:', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch matches');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (userId) {
            testMatches();
        }
    }, [userId]);

    return { cards, isLoading, error };
}
