const computer = {
    name: "Personal Computer",

    motherboard: {
        name: "Aorus Gaming 7",
        cpu: "Core i5-8600k",
        ram: "Corsair Vengeance 16gb",
        cooler: "Noctua NH-D15",
        os: "Windows 10"
    },

    gpu: "EVGA 3080 FTW Ultra",
    psu: "EVGA 750w",
    
    peripherals : {
        mouse: "Logitech G502",
        keyboard: "Durgod Tenkeyless Mechanical Keyboard"
    }
};

console.log("Computer: ", computer.name);
console.log("Motherboard: ", computer.motherboard.name);
console.log("CPU: ", computer.motherboard.cpu);
console.log("GPU: ", computer.gpu);