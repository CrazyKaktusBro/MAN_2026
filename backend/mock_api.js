const MockAPI = {
    async getOlympiads() {
        const response = await fetch("./backend/storage/olympiads.json");

        if (!response.ok) {
            throw new Error("Не удалось загрузить олимпиады");
        }

        const olympiads = await response.json();

        return olympiads.map(olympiad => ({
            ...olympiad,
            status: this.getStatus(olympiad)
        }));
    },

    getStatus(olympiad) {
        const now = Date.now();

        const registrationStart =
            new Date(olympiad.registration_start).getTime();
        const registrationEnd =
            new Date(olympiad.registration_end).getTime();
        const start = new Date(olympiad.start).getTime();
        const end = new Date(olympiad.end).getTime();

        if (now < registrationStart) return "NOT_OPEN";
        if (now <= registrationEnd) return "REGISTRATION";
        if (now < start) return "WAITING";
        if (now < end) return "ACTIVE";

        return "FINISHED";
    }
};
