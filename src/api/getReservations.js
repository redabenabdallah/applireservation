const reservations = [
    {
        id: 1,
        name: "La pizza de la mama",
        dateTime: "2023-12-10T14:48:00",
    },
];

export const getReservations = async (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(reservations);
        }, 500);
    });
};