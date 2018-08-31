function rentalCarCost(d) {
    // If renting fot 7 or more than 7 days
    if (d >= 7) {
        return (d * 40) - 50;
    }

    // If renting for  1 OR 2 days
    if (d == 1 || d == 2) {
        return (d * 40);
    }
    
    // If renting for 3 or more days
    if (d >= 3) {
        return (d * 40) - 20;
    }
}