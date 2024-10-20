const { expect } = require('chai');
const streamingServiceSelector = {
    
};

describe('streamingServiceSelector', () => {

    
    describe('selectingContent(type, platform, genre)', () => {
        it('should return correct message for valid inputs', () => {
            const result = streamingServiceSelector.selectingContent("Movie", "Netflix", "Action");
            expect(result).to.equal("You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!");
        });

        it('should throw error for unsupported genre', () => {
            expect(() => streamingServiceSelector.selectingContent("Movie", "Netflix", "Documentary"))
                .to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
        });

        it('should throw error for unsupported type', () => {
            expect(() => streamingServiceSelector.selectingContent("Podcast", "Netflix", "Action"))
                .to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });
    });

    
    describe('availablePlatforms(platforms, selectedPlatformIndex)', () => {
        it('should return other available platforms correctly', () => {
            const result = streamingServiceSelector.availablePlatforms(["Netflix", "Hulu", "Disney+"], 1);
            expect(result).to.equal("Other available platforms are: Netflix, Disney+.");
        });

        it('should throw error for invalid platform index', () => {
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "Hulu"], 2))
                .to.throw("Invalid platform selection.");
        });

        // it('should throw error for invalid platform input', () => {
        //     expect(() => streamingServiceSelector.availablePlatforms("Netflix", 0))
        //         .to.throw("Invalid platform selection.");
        // });
    });

    
    describe('contentRating(runtimeInMinutes, viewerRating)', () => {
        it('should return correct message for high rating content', () => {
            const result = streamingServiceSelector.contentRating(120, 8.5);
            expect(result).to.equal("This content is highly rated (8.5/10) and has a runtime of 2.00 hours. Enjoy your watch!");
        });

        it('should return correct message for low rating content', () => {
            const result = streamingServiceSelector.contentRating(150, 5.2);
            expect(result).to.equal("This content has a lower rating (5.2/10) and runs for 2.50 hours. You might want to check reviews first.");
        });

        it('should throw error for invalid runtime', () => {
            expect(() => streamingServiceSelector.contentRating(-120, 8.5))
                .to.throw("Invalid runtime or rating.");
        });

        // it('should throw error for invalid rating', () => {
        //     expect(() => streamingServiceSelector.contentRating(120, 15))
        //         .to.throw("Invalid runtime or rating.");
        // });
    });

});
