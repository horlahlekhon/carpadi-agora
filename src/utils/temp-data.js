export const Cars = [
    {id: 1, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-1.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 2, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-2.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 3, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-3.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 4, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-4.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 5, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-5.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 6, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-6.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 7, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-1.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 8, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-2.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 9, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-6.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 10, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-3.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 11, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-4.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 12, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-5.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 13, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-6.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 14, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-1.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 15, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-2.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 16, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-3.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 17, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-4.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
    {id: 18, model: 'Toyota Corolla GQ', description: '2.5 Lt VHC Engine, 5dr Step Auto', image: '/sell/car-5.png', color: 'Blue', year: 2011, transmission: 'Automatic', type: 'Salon', price: 4700000 },
];

export const features = [
    {name: 'Panoramic roof', url: '/cars/features/feature-1.png'},
    {name: 'Leather seats', url: '/cars/features/feature-2.png'},
    {name: 'Digital device', url: '/cars/features/feature-3.png'},
    {name: 'Seat heater', url: '/cars/features/feature-4.png'},
    {name: 'Panoramic roof', url: '/cars/features/feature-5.png'},
    {name: 'Durable seats', url: '/cars/features/feature-6.png'},
];

export const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
];

export const years = () => {
    let year = new Date().getFullYear();
    let lowerBoundary = year - 25;
    let array = [];
    for(let x = lowerBoundary; x <= year; x++) {
        array.push(x);
    }
    return array;
};

export const makes = [
   "Acura", "Honda", "Hyundai", "Land Rover", "Lexus", "Mazda", "Mercedes Benz", "Peugeot", "Toyota"
];