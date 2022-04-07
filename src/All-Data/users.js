const users = [
  {
    id: "01",
    username: "admin1",
    password: "12345678",
    fullName: "هومن آقچه لو",
    city: "تهران",
    birthDate: { day: 1, month: 1, year: 1300 },
    joined: "February 06, 2017",
    educationRate: "سیکل",
    email: "example1@gmail.com",
    gender: "men",
    phoneNumber: "09124540120",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    allApointments: {
      history: [
        {
          id: "1",
          cancel: false,
          date: "1400/10/25",
        },
        {
          id: "2",
          cancel: true,
          date: "1400/10/25",
        },
        {
          id: "3",
          cancel: false,
          date: "1400/10/25",
        },
      ],
      reserved: [
        {
          id: "7",
          // cancel: false,
          date: "1401/03/25",
        },
        {
          id: "10",
          // cancel: true,
          date: "1401/03/27",
        },
      ],
    },
  },
];
export default users;