// products.js
const PRODUCTS_DATA = [
    { 
        id: 1, 
        name: 'RePet Extruder', 
        price: 199.99, 
        rating: 5, 
        isVisible: true, 
        images: [
            'https://lh3.googleusercontent.com/pw/AP1GczM5q7Vb73DAjlDXVzkPN2U3sOrcCl0uZkOvfRzoUR7M8cbzS7HOeCCf2Ojlj18D_88iaoOY2lR6Gg0bsj5Xim97SvtYf-asbjS0gBTQ35c0uUp5btOvZMvOaO2md_SoyfRZshu7aonrXKlHxz_ydUk=w1128-h933-s-no?authuser=2',
            'https://lh3.googleusercontent.com/pw/AP1GczNMXK2kaysBcx1_FR3ttZue1hYOWsS6MtWPAVgHzOYnS7UaVKUtdEpj4_QLoahqRs0kBZNhp0gVg4ITV8IBnowYdDkV4_o4nYF9CbgpudsYqsBsBGze0G4wzvjUSnxzauztw-P9kxPKWxfwTdhE_u0=w700-h933-s-no?authuser=0', 
            'https://lh3.googleusercontent.com/pw/AP1GczNIQNQ3M4iaYGgDpb-AUzzTf_7ORwB8hdhsG59lhKyD32xQjOnLBFRlKU0gH1dd5dIuQTCaiJRFozb7Xds1dPBVtTFHQiyMQi0IXloz--BgBveLkqgv6tYZgZyX4SfyzU3UFcZgWlu3vHkUmf-VOmw=w1244-h933-s-no?authuser=2'
        ], 
        currentImg: 0, 
        description: 'RePet filament extruder designed to make standard FDM 3D Printer filament from PET bottles', 
        reviews: [{user: 'Alex T.', date: 'Jan 12', rating: 5, text: 'Best filament extruder I have ever used.'}], 
        colors: [{hex: '#000', name: 'Black'}, {hex: '#2D5BFF', name: 'Blue'}, {hex: '#FF5B5B', name: 'Red'}], 
        selectedColor: {hex: '#000', name: 'Black'} 
    },
    { 
        id: 2, 
        name: 'RePet Tape Width Spacer', 
        price: 3.99, 
        rating: 5, 
        isVisible: true, 
        images: [
            'https://lh3.googleusercontent.com/pw/AP1GczPgBo_7C2KwYIJ29EcqmHAEeoHDVBybO91Sahj1ToHJkACOVb3g30ML3A9b0hHjlYlEcQGDfqFwYMcxBBIyB-EXlrKRQsKIbTNDVMUB-Q0PIoiSc7orZfNCbUUYc66n28OBII436Wof0A8sfKhzE5M=w1244-h933-s-no?authuser=2', 
        ], 
        currentImg: 0, 
        description: 'Detachable RePet tape width spacer. Adjusts tape width at bottle cutting process', 
        reviews: [{user: 'Mia R.', date: 'Feb 05', rating: 5, text: 'Shipping was quick'}], 
        colors: [{hex: '#000', name: 'Black'}, {hex: '#2D5BFF', name: 'Blue'}, {hex: '#FFF', name: 'White'}], 
        selectedColor: {hex: '#000', name: 'Black'} 
    },
    { 
        id: 3, 
        name: 'NiCr Welder Heater Spring', 
        price: 0.99, 
        rating: 5, 
        isVisible: true, 
        images: [
            'https://lh3.googleusercontent.com/pw/AP1GczNpiE8GOVi1EofHW922b11Sx_RDeUKzZIKB4S5xm7rrTI4igTIR-6nURcwESxJy3m6nX12DpBChMbm06rgCFpOSQ_xbBBW3uhMpz2wTRFKDW07thieLXI3wQTLs3wcfS8XtcndM4QoWdBsyA4ALuHA=w1244-h933-s-no?authuser=2', 
        ], 
        currentImg: 0, 
        description: 'NiCr Welder Heater Spring. 12V', 
        reviews: [{user: 'John W.', date: 'Dec 01', rating: 5, text: 'Very good quality'}], 
        colors: [{hex: '#333', name: 'Charcoal'}], 
        selectedColor: {hex: '#333', name: 'Charcoal'} 
    },
    { 
        id: 4, 
        name: 'Canvas Backpack', 
        price: 19.99, 
        rating: 4, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/1545998/pexels-photo-1545998.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Durable canvas material with a dedicated laptop compartment and multiple pockets.', 
        reviews: [], 
        colors: [{hex: '#4b5563', name: 'Gray'}, {hex: '#1e40af', name: 'Navy'}], 
        selectedColor: {hex: '#4b5563', name: 'Gray'} 
    },
    { 
        id: 5, 
        name: 'Pastel Highlighters', 
        price: 1.59, 
        rating: 5, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/459799/pexels-photo-459799.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4006143/pexels-photo-4006143.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4006154/pexels-photo-4006154.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Set of 6 aesthetic pastel colors that wont bleed through paper.', 
        reviews: [], 
        colors: [{hex: '#fef08a', name: 'Yellow'}, {hex: '#bbf7d0', name: 'Mint'}], 
        selectedColor: {hex: '#fef08a', name: 'Yellow'} 
    },
    { 
        id: 6, 
        name: 'Wireless Mouse', 
        price: 11.59, 
        rating: 4, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5082570/pexels-photo-5082570.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Ergonomic wireless mouse with silent clicks and long battery life.', 
        reviews: [], 
        colors: [{hex: '#000', name: 'Black'}, {hex: '#ef4444', name: 'Red'}], 
        selectedColor: {hex: '#000', name: 'Black'} 
    },
    { 
        id: 7, 
        name: 'Desk Organizer', 
        price: 2.99, 
        rating: 5, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/4006152/pexels-photo-4006152.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Keep your workspace tidy. Multiple compartments for pens, notes, and clips.', 
        reviews: [], 
        colors: [{hex: '#fff', name: 'White'}, {hex: '#000', name: 'Black'}], 
        selectedColor: {hex: '#fff', name: 'White'} 
    },
    { 
        id: 8, 
        name: 'Sticky Note Bundle', 
        price: 5.69, 
        rating: 2, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5416480/pexels-photo-5416480.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Colorful sticky notes in various sizes for reminders and bookmarks.', 
        reviews: [], 
        colors: [{hex: '#fef08a', name: 'Yellow'}], 
        selectedColor: {hex: '#fef08a', name: 'Yellow'} 
    },
    { 
        id: 9, 
        name: 'Math Geometry Set', 
        price: 3.99, 
        rating: 2, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/4253620/pexels-photo-4253620.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/30557451/pexels-photo-30557451.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Complete set including compass, protractor, and rulers in a protective case.', 
        reviews: [], 
        colors: [{hex: '#cbd5e1', name: 'Silver'}], 
        selectedColor: {hex: '#cbd5e1', name: 'Silver'} 
    },
    { 
        id: 10, 
        name: 'Noise-Canceling Buds', 
        price: 10.99, 
        rating: 4, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/3921883/pexels-photo-3921883.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Block out distractions and focus on your studies with premium audio quality.', 
        reviews: [], 
        colors: [{hex: '#fff', name: 'White'}, {hex: '#000', name: 'Black'}], 
        selectedColor: {hex: '#fff', name: 'White'} 
    },
    { 
        id: 11, 
        name: 'Lined Legal Pads', 
        price: 7, 
        rating: 3, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/5628244/pexels-photo-5628244.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5301703/pexels-photo-5301703.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5538617/pexels-photo-5538617.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Large format pads for detailed notes and drafting.', 
        reviews: [], 
        colors: [{hex: '#fff', name: 'White'}], 
        selectedColor: {hex: '#fff', name: 'White'} 
    },
    { 
        id: 12, 
        name: 'Laptop Sleeve', 
        price: 18, 
        rating: 2, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/4067090/pexels-photo-4067090.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4458519/pexels-photo-4458519.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Water-resistant sleeve with soft lining to protect your tech.', 
        reviews: [], 
        colors: [{hex: '#111', name: 'Ebony'}], 
        selectedColor: {hex: '#111', name: 'Ebony'} 
    },
    { 
        id: 13, 
        name: 'Hardcover Sketchbook', 
        price: 4.99, 
        rating: 5, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/6373290/pexels-photo-6373290.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/159621/sketch-art-draw-creative-159621.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/1032000/pexels-photo-1032000.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Heavyweight paper suitable for ink, pencil, and light watercolor.', 
        reviews: [], 
        colors: [{hex: '#000', name: 'Black'}], 
        selectedColor: {hex: '#000', name: 'Black'} 
    },
    { 
        id: 14, 
        name: 'USB-C Hub Adapter', 
        price: 2.99, 
        rating: 3, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/4503734/pexels-photo-4503734.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/30553755/pexels-photo-30553755.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5749113/pexels-photo-5749113.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Expand your laptop connectivity with HDMI, USB, and SD ports.', 
        reviews: [], 
        colors: [{hex: '#94a3b8', name: 'Steel'}], 
        selectedColor: {hex: '#94a3b8', name: 'Steel'} 
    }
];
