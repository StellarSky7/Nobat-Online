const data = [
  {
    id: "1",
    fname: "علیرضا",
    lname: "صابری",
    expert: "اورولوژی",
    university: "استنفورد",
    imgUrl: "544345.jpeg",
    rate: "4.6",
    address1: "شهرک شریعتی",
    address2: "شهرک شریعتی ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 120000,
    date: {
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010109: ["10AM", "11AM", "12AM", "18PM"],
      14010111: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
      14010116: ["10AM", "11AM", "12AM", "18PM"],
      14010118: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["دوشنبه", "سه شنبه", "پنجشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "2",
    fname: "محمد",
    lname: "رضایی",
    expert: "گوش و حلق و بینی",
    university: "تبریز",
    imgUrl: "156921.jpeg",
    rate: "4.0",
    address1: "پاسداران",
    address2: "پاسداران ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 85000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010109: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010116: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "سه شنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "3",
    fname: "علی",
    lname: "نوروزی",
    expert: "داخلی",
    university: "هاروارد",
    imgUrl: "643966.jpeg",
    rate: "4.8",
    address1: "تهرانپارس - فرجام",
    address2: "تهرانپارس ، فرجام ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 55000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010109: ["10AM", "11AM", "12AM", "18PM"],
      14010110: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010116: ["10AM", "11AM", "12AM", "18PM"],
      14010117: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "سه شنبه", "چهارشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "4",
    fname: "احمد",
    lname: "قادری",
    expert: "بیماری های عفونی",
    university: "علوم پزشکی ایران",
    imgUrl: "574387.jpeg",
    rate: "4.4",
    address1: "امیرآباد شمالی",
    address2: "امیرآباد شمالی ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 75000,
    date: {
      14010107: ["10AM", "11AM", "12AM", "18PM"],
      14010111: ["10AM", "11AM", "12AM", "18PM"],
      14010114: ["10AM", "11AM", "12AM", "18PM"],
      14010118: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["یکشنبه", "پنجشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "5",
    fname: "شهرام",
    lname: "کاظمی",
    expert: "اعصاب و روان",
    university: "شهید بهشتی",
    imgUrl: "455837.jpeg",
    rate: "4.2",
    address1: "میدان ونک",
    address2: "میدان ونک ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 140000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010109: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
      14010116: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "دوشنبه", "سه شنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "6",
    fname: "محمود",
    lname: "علوی",
    expert: "قلب و عروق",
    university: "تهران",
    imgUrl: "169469.jpeg",
    rate: "4.1",
    address1: "آزادی - شادمان",
    address2: "آزادی ، شادمان ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 90000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010109: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010116: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "سه شنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "7",
    fname: "سمیه",
    lname: "شیری",
    expert: "اعصاب و روان",
    university: "شهید بهشتی",
    imgUrl: "644187.jpeg",
    rate: "3.8",
    address1: "میدان توحید",
    address2: "میدان توحید ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 50000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010110: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
      14010117: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "دوشنبه", "چهارشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "8",
    fname: "مهدی",
    lname: "سجادی",
    expert: "قلب و عروق",
    university: "تهران",
    imgUrl: "533913.jpeg",
    rate: "3.7",
    address1: "میدان معلم",
    address2: "میدان معلم ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 100000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "دوشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "9",
    fname: "جلال",
    lname: "تاجیک",
    expert: "روانپزشکی",
    university: "شیراز",
    imgUrl: "297421.jpeg",
    rate: "3.9",
    address1: "میدان تجریش",
    address2: "میدان تجریش ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 110000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010111: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
      14010118: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "دوشنبه", "پنجشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "10",
    fname: "علی اکبر",
    lname: "مهدیانی",
    expert: "بیهوشی",
    university: "تهران",
    imgUrl: "462173.jpeg",
    rate: "4.0",
    address1: "تهرانپارس غربی",
    address2: "تهرانپارس غربی ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 80000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010109: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010116: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "سه شنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "11",
    fname: "زهرا",
    lname: "ایوانی",
    expert: "مامایی",
    university: "تربیت مدرس",
    imgUrl: "688564.jpeg",
    rate: "3.6",
    address1: "پاتریس لومومبا",
    address2: "پاتریس لومومبا ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 50000,
    date: {
      14010107: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010109: ["10AM", "11AM", "12AM", "18PM"],
      14010114: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
      14010116: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "دوشنبه", "چهارشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "12",
    fname: "نگار",
    lname: "کوشکی",
    expert: "روانپزشکی",
    university: "تهران",
    imgUrl: "717832.jpeg",
    rate: "4.5",
    address1: "گاندی",
    address2: "گاندی ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 50000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["یکشنبه", "دوشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "13",
    fname: "سامان",
    lname: "فاطمی",
    expert: "زیبایی",
    university: "آزاد علوم پزشکی",
    imgUrl: "99206.jpeg",
    rate: "3.7",
    address1: "ازگل",
    address2: "ازگل ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 50000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010110: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010117: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "چهارشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "14",
    fname: "مریم",
    lname: "نقلی",
    expert: "زیبایی",
    university: "تهران",
    imgUrl: "342112.jpeg",
    rate: "4.1",
    address1: "نارمک - فرجام",
    address2: "نارمک ،فرجام ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 150000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010107: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010114: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "یکشنبه", "دوشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "15",
    fname: "مسعود",
    lname: "غزنوی",
    expert: "روانپزشکی",
    university: "اصفهان",
    imgUrl: "421521.jpeg",
    rate: "4",
    address1: "نلسون ماندلا",
    address2: "نلسون ماندلا ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 70000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "دوشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "16",
    fname: "محمد مهدی",
    lname: "ارجمند",
    expert: "روانپزشکی",
    university: "فردوسی مشهد",
    imgUrl: "622715.jpeg",
    rate: "4.2",
    address1: "تهرانسر",
    address2: "تهرانسر ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 100000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "یکشنبه", "دوشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "17",
    fname: "محدثه",
    lname: "رضایی نژاد",
    expert: "قلب و عروق",
    university: "تهران",
    imgUrl: "734866.jpeg",
    rate: "4.5",
    address1: "دردشت",
    address2: " دردشت ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 120000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["یکشنبه", "چهارشنبه", "پنجشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "18",
    fname: "محمد صادق",
    lname: "بابایی",
    expert: "قلب و عروق",
    university: "علوم پزشکی ایران",
    imgUrl: "698773.jpeg",
    rate: "4.1",
    address1: "شهرک راه آهن",
    address2: " شهرک راه آهن ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 80000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["شنبه", "پنجشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "19",
    fname: "مژگان",
    lname: "گلی نژاد",
    expert: "قلب و عروق",
    university: "زنجان",
    imgUrl: "651555.jpeg",
    rate: "4.5",
    address1: "هفت حوض",
    address2: " هفت حوض ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 115000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["یکشنبه", "دوشنبه", "چهارشنبه", "پنجشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
  {
    id: "20",
    fname: "ملیحه",
    lname: "رضوی",
    expert: "روانپزشکی",
    university: "تهران",
    imgUrl: "397366.jpeg",
    rate: "4.9",
    address1: "تجریش",
    address2: " تجریش ، خیابان سوم ، کوچه دوم ، پلاک 11 ، واحد 8",
    phone: `02155778899`,
    visit: 160000,
    date: {
      14010106: ["10AM", "11AM", "12AM", "18PM"],
      14010108: ["10AM", "11AM", "12AM", "18PM"],
      14010113: ["10AM", "11AM", "12AM", "18PM"],
      14010115: ["10AM", "11AM", "12AM", "18PM"],
    },
    workDay: ["چهارشنبه", "پنجشنبه"],
    comments: [
      {
        name: "شبنم ملکی",
        date: "1400/10/24",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "طاها کریمی",
        date: "1400/05/06",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
      {
        name: "زهره علیپور",
        date: "1399/07/19",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
      },
    ],
  },
];

export default data;
