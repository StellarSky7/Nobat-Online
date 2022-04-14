const users = [
  {
    id: "01",
    username: "Homan",
    password: "12345678",
    fullName: "هومن آقچه لو",
    city: "تهران",
    birthDate: { day: 1, month: 1, year: 1370 },
    joined: "February 06, 2017",
    educationRate: "سیکل",
    email: "example1@gmail.com",
    gender: "male",
    phoneNumber: "09124540120",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    credit: 200000,
    allApointments: [
        {
          uniqId: 4521872882,
          id: "5",
          cancel: false,
          date: "1401032510AM",
          reserved : false ,
        },
        {
          uniqId: 4521854182,
          id: "2",
          cancel: true,
          date: "1401032510AM",
          reserved : false ,
        },
        {
          uniqId: 1011852882,
          id: "3",
          cancel: false,
          date: "1401032510AM",
          reserved : false ,
        },
        {
          uniqId: 4521852882,
          id: "7",
          cancel: false,
          date: "1401032510AM",
          reserved : false ,
        },
        {
          uniqId: 7841852482,
          id: "10",
          cancel: false,
          date: "1401052512AM",
          reserved : false ,
        },
      ],
  },
];
export default users;
