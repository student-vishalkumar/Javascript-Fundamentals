function calculateDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "don't say";
            break;
    }

    return deliveryTime;
}

// Test the function with different package types
console.log("Delivery time for standard package:", calculateDeliveryTime("standard"));
console.log("Delivery time for express package:", calculateDeliveryTime("express"));
console.log("Delivery time for overnight package:", calculateDeliveryTime("overnight"));
console.log("Delivery time for unknown package type:", calculateDeliveryTime("unknown"));
