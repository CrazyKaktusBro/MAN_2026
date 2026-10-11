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

    
async registerParticipant() {
    const email = localStorage.getItem("email");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const middleName = localStorage.getItem("middleName");
    const olympiadId = localStorage.getItem("olympiad");

    if (!email || !firstName || !lastName || !middleName || !olympiadId) {
        throw new Error("Не всі дані учасника заповнені");
    }

    const olympiads = await this.getOlympiads();

    const olympiad = olympiads.find(
        item => String(item.id) === String(olympiadId)
    );

    if (!olympiad) {
        throw new Error("Олімпіаду не знайдено");
    }

    const participants = JSON.parse(
        localStorage.getItem("participants") || "[]"
    );

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let participantCode;

    do {
        participantCode = "";

        for (let i = 0; i < 8; i++) {
            participantCode += characters[
                Math.floor(Math.random() * characters.length)
            ];
        }
    } while (
        participants.some(p => p.participantCode === participantCode)
    );

    const participant = {
        email,
        firstName,
        lastName,
        middleName,
        olympiadId: olympiad.id,
        olympiadName: olympiad.name,
        participantCode,
        createdAt: new Date().toISOString()
    };

    participants.push(participant);

    localStorage.setItem(
        "participants",
        JSON.stringify(participants)
    );

    return participant;
    },
};

window.MockAPI = MockAPI;
